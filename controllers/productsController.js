const Products = require("../models/productModel");

const AllProducts = async (req,res) => {
 

     try {
        const products = await Products.find();

        res.send(products)
        
     } catch (error) {

        console.log({msg:'une erreur lors de la recupération des products'})
        
     }
        
   
}
//  post - a product create
const CreateProduct =  (req, res) => {
    const newProduct = new Products({
        name: req.body.name,
        price: req.body.price,
        categories: req.body.categories
    });
    newProduct.save();

    res.send({msg:"Produit crée avec succes",newProduct});
}
// get - get a product by id

const GetOneProduct = async (req, res) => {
    const id = req.params.product_id;

  

    try {
        
        const product = await Products.findById({_id:id})

        res.send({msg:'getting product successfull',product})

    } catch (error) {
        
    }
}

const UpdateProduct = async (req,res) =>{

    const id = req.params.product_id;

    const productData = {
        name: req.body.name,
        price: req.body.price,
        categories:req.body.categories
    };

    try {

        const product = await Products.findByIdAndUpdate({_id:id}, productData);

        res.send({msg:'produit mise à jour avec success ', product})
        
    } catch (error) {

        console.log({msg:'une erreur lors de la modification du produit'})
        
    }

}

// delete product
const DeleteProduct = async (req,res) => {
    const id = req.params.product_id;

    try {
        const product = Products.deleteOne({_id:id});

        res.send({msg:"Produit supprimé avec success !", product})
        
    } catch (error) {
        
    }

}

module.exports = {AllProducts, CreateProduct,GetOneProduct,UpdateProduct,DeleteProduct}