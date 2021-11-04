const { Router } = require('express');
const router = Router();
const menuService = require('../services/menuService');
const formidable = require('formidable');
const { parseForm } = require('../utils/parseForm');
const { uploadImageToCloudinary } = require('../services/cloudinaryService');

router.get('/:category', async (req, res) => {
    try {
        const data = await menuService.getProductsByMenuCategory(req.params.category);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.post('/create-product', async (req, res) => {
    try {
        const form = formidable({ multiples: true });
        const [fields, files] = await parseForm(req, form);
        const response = [];

        if (Array.isArray(files.image)) {
            await Promise.all(
                files.image.map(async (x) => {
                    if (!/image\/(jpg|jpeg|png)$/.test(x.mimetype)) {
                        throw ({ message: 'Unsupported file extension! We support jpg/jpeg/png file extensions!' })
                    }
                    if (x.size > 10485760) {
                        throw ({ message: 'File cannot be over 10 MB' });
                    }
                    const [image, imageID] = await uploadImageToCloudinary(x.filepath);
                    response.push({ imageURL: image, imageID: imageID })
                })
            )
        } else {
            if(!files.image) { 
                throw({message : 'Image/s is required!'});
            }

            if (!/image\/(jpg|jpeg|png)$/.test(files.image.mimetype)) {
                throw ({ message: 'Unsupported file extension! We support jpg/jpeg/png file extensions!' });
            }
            if (files.image.size > 10485760) {
                throw ({ message: 'File cannot be over 10 MB' });
            }

            const [image, imageID] = await uploadImageToCloudinary(files.image.filepath);
           
           
            response.push({ imageURL: image, imageID: imageID })

        }
        const data = await menuService.createProduct(JSON.parse(fields['inputs']) , response);

        res.status(200).json([data, response]);
    } catch (error) {
        res.status(400).json(error);
    }
})


router.post('/delete-product/:id' ,  async (req,res) => { 
    try {
        const data = menuService.deleteProduct(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.get('/product/:id' , async (req,res) => { 
    try {
        const data = await menuService.getProductByID(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error)
    }
})


router.post('/edit-product/:id' , async (req,res) => { 
    try {
        const data = await menuService.editProduct(req.params.id , req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})



module.exports = router;