import { Router } from "express";
import reviewsHandler from "../reviews/reviewsEndpoints.js"

const router  = Router();


router.get("/", reviewsHandler.getReviews)

router
    .route("/:product_id")
        .post(reviewsHandler.postReviews)
        .get(reviewsHandler.getReviewsById)



router
    .route("/:review_id")
        .put(reviewsHandler.updateReview)
        .delete(reviewsHandler.deleteReview)
        .get(reviewsHandler.getReviewsById)

export default router