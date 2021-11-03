const { Router } = require('express');
const router = Router();
const menuService = require('../services/menuService');
const formidable = require('formidable');
const { parseForm } = require('../utils/parseForm');
const { uploadImageToCloudinary } = require('../utils/cloudinaryUpload');
const { replaceOne } = require('../models/menuModel');

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
                    if (x.mimetype != 'image/jpeg') {
                        throw ({ message: 'Unsupported file extension! We support jpeg and jpg file extensions!' })
                    }
                    if (x.size > 1024 * 1024) {
                        throw ({ message: 'File cannot be over 1GB' });
                    }
                    const [image, imageID] = await uploadImageToCloudinary(x.filepath);
                    response.push({ imageURL: image, imageID: imageID })
                })
            )
        } else {
            if(!files.image) { 
                throw({message : 'Image/s is required!'});
            }
            const [image, imageID] = await uploadImageToCloudinary(files.image.filepath);
           
            if (files.image.mimetype != 'image/jpeg') {
                throw ({ message: 'Unsupported file extension! We support jpeg and jpg file extensions!' });
            }
            if (files.image.size > 1024 * 1024) {
                throw ({ message: 'File cannot be over 1GB' });
            }
            response.push({ imageURL: image, imageID: imageID })

        }
        const data = await menuService.createProduct(JSON.parse(fields['inputs']) , response);

        res.status(200).json([data, response]);
    } catch (error) {
        res.status(400).json(error);
    }
})


module.exports = router;