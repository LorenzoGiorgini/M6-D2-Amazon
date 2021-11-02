import pool from "../../db/connect.js"



const getAllProducts = async (req, res, next) => {
    try {
        const data = await pool.query('SELECT * FROM products ORDER BY id ASC')

        res.status(200).send(data.rows)

    } catch (error) {
        res.status(400).send({success: false , error: error.message})
    }
}

const postNewProduct = async (req, res, next) => {
    try {
        

    } catch (error) {
        res.status(400).send({success: false , error: error.message})
    }
}



const getProductById = async (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(400).send({success: false , error: error.message})
    }
}



const updateProduct = async (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(400).send({success: false , error: error.message})
    }
}



const deleteProduct = async (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(400).send({success: false , error: error.message})
    }
}







const productsHandlers = {
    getAllProducts,
    updateProduct,
    deleteProduct,
    getProductById,
    postNewProduct
}



export default productsHandlers