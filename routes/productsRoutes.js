const { AllProducts, CreateProduct, GetOneProduct, UpdateProduct, DeleteProduct } = require("../controllers/productsController");

const router = require('express').Router()

router.get('/',AllProducts) 
router.post('/',CreateProduct) 
router.get('/:product_id',GetOneProduct) 
router.put('/:product_id',UpdateProduct) 
router.delete('/',DeleteProduct) 

module.exports = router;