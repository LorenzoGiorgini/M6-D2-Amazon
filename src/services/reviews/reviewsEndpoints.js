import pool from "../../db/connect.js"


//All the endpoints
const postReviews = async (req, res) => {
    try {

        const { comment , rate } = req.body

        const data = await pool.query(`INSERT INTO reviews (product_id , comment, rate) 
                                            VALUES ($1 , $2, $3) RETURNING *;` , 
                                                [req.params.product_id , comment, rate])
        

        res.status(201).send({success: true , data: data.rows[0]});
    } catch (error) {
        res.status(400).send({success: false, message: error.message})
    }
}


const getReviews = async (req, res) => {
    try {

        const data = await pool.query('SELECT * FROM reviews')
        

        res.status(201).send({success: true , data: data.rows});
    } catch (error) {
        res.status(400).send({success: false, message: error.message})
    }
}


const updateReview = async (req, res) => {
    try {

        const data = await pool.query('UPDATE ')
        

        res.status(201).send({success: true , data: data.rows});
    } catch (error) {
        res.status(400).send({success: false, message: error.message})
    }
}


const deleteReview = async (req, res) => {
    try {

        const data = await pool.query('DELETE FROM reviews WHERE id_review=$1', [req.params.review_id])
        

        res.status(204).send({success: true , message: "Review deleted successfully"});
    } catch (error) {
        res.status(400).send({success: false, message: error.message})
    }
}


const getReviewsById = async (req, res) => {
    try {

        const data = await pool.query('SELECT * FROM reviews WHERE product_id=$1', [req.params.product_id])


        if(data.rows.length === 0) {
            res.status(400).send({success: false , error: error.message})
        } else {
            res.status(200).send({success: true , data: data.rows})
        }

    } catch (error) {
        res.status(400).send({success: false, message: error.message})
    }
}







const reviewsHandler = {
    postReviews,
    getReviews,
    updateReview,
    deleteReview,
    getReviewsById
}


export default reviewsHandler