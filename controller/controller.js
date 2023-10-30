const Product = require('../models/product');
const Categories = require('../models/categories');

exports.getAllProducts = async (req,res)=>{
    try{
        const products = await Product.find();
        res.json(products);
    }
    catch{
        res.status(500).json({error: err.message})
    }
};

exports.getProductById = async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({message: "Product is not exist."})
        }
        res.json(product);
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.addProduct = async(req,res)=>{
    const{name, description, price, quantity, category} = req.body;
    
    const newProduct = new Product({
        name,
        description,
        price,
        quantity,
        category
    })

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

exports.updateProduct = async(req,res)=>{
    const{name, description, price, quantity, category} = req.body;
    try{
        const updateProduct = await Product.findByIdAndUpdate(req.params.id,{
            name, 
            description,
            price,
            quantity,
            category
        });
        if(!updateProduct){
            return res.status(404).json({message: "Product id is not found."})
        }
        res.json(updateProduct);
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.deleteProduct = async(req,res)=>{
    const{name, description, price, quantity, category} = req.body;
    try{
        const deleteProduct = await Product.findByIdAndRemove(req.params.id);
        if(!deleteProduct){
            return res.status(404).json({message: "Product id is not found."})
        }
        res.json({message : "Product is deleted successfully."});
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.deleteAllProducts = async(req,res)=>{
    try{
        const deleteAllProduct = await Product.deleteMany({});
        res.json({message: "All products are deleted."})
    }
    catch(err){
        res.status(500).json({error : err.message});
    }
}



