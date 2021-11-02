import pool from "../../db/connect.js"


const getAllProducts = async (req, res, next) => {
    try {
        const data = await pool.query('SELECT * FROM products ORDER BY id ASC')

        res.status(200).send({success: true , data: data.rows})

    } catch (error) {
        res.status(400).send({success: false , error: error.message})
    }
}

const postNewProduct = async (req, res) => {
    try {
        const { name , description , brand , price , category } = req.body

        const image_url  = req.file.path
        

        const data = await pool.query('INSERT INTO products(name , description , brand , image_url , price , category) VALUES($1,$2,$3,$4,$5,$6) RETURNING *', 
        [name , description , brand , image_url , price , category]) 

        
        
        res.status(201).send({success: true , data: data.rows[0]})
    } catch (error) {
        res.status(400).send({success: false , error: error.message})
    }
}



const getProductById = async (req, res) => {
    try {

        const data = await pool.query('SELECT * FROM products WHERE id=$1', [req.params.id])

        if(data.rows.length === 0) {
            res.status(400).send({success: false , error: error.message})
        } else {
            res.status(200).send({success: true , data: data.rows[0]})
        }

    } catch (error) {
        res.status(400).send({success: false , error: error.message})
    }
}



const updateProduct = async (req, res) => {
    try {

        const { name , description , brand , price , category } = req.body

        const image_url  = req.file.path

        const data = await pool.query('UPDATE products SET name=$1 , description=$2 , brand=$3 , image_url=$4 , price=$5 , category=$6 WHERE id=$7 RETURNING *', 
        [name, description, brand, image_url, price, category , req.params.id ])

        res.status(200).send({success: true , data: data.rows})
    } catch (error) {
        res.status(400).send({success: false , error: error.message})
    }
}



const deleteProduct = async (req, res) => {
    try {

        const data = await pool.query('DELETE FROM products WHERE id=$1', [req.params.id])

        res.status(204).send()
        
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