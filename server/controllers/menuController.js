const { Router } = require('express');
const router = Router();
const menuService = require('../services/menuService');
const formidable = require('formidable');
const { parseForm } = require('../utils/parseForm');
const { uploadImageToCloudinary , deleteImageFromCloudinary, deleteImageByPublicID } = require('../services/cloudinaryService');

router.get('/:category', async (req, res) => {
    try {
        console.log(req.query.page)
        
        const data = Number(req.query.page) ? await menuService.getNext( req.params.category , Number(req.query.page)) : await menuService.getProductsByMenuCategory(req.params.category);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.post('/create-product', async (req, res) => {
    try {
        const form = formidable({ multiples: true });
        const [fields, files] = await parseForm(req, form);
        
        const data = await menuService.createProduct(JSON.parse(fields['inputs']) , files);
        res.status(200).json([data, [files]]);
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

router.post('/delete-image/:id' , async (req,res) => { 
    try {
        const data = await deleteImageFromCloudinary(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.patch('/update-product/:id' ,  async (req,res) => { 
    try {
        const data = await menuService.updateProduct(req.params.id , req.body[0]);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.get('/pagination' , async (req,res) => { 
    // const items = [...Array(150).keys()].map(i => ({ id: (i + 1), name: 'Item ' + (i + 1) }));
    // const page = parseInt(req.query.page) || 1;
    // const pageSize = 5;
    // const pager = paginate(items.length, page, pageSize);
});



module.exports = router;