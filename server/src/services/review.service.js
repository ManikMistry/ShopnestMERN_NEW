const Review = require("../models/review.modal.js");
const productService = require("../services/product.service.js");

// Create Review by user
async function createReview(reqData, user) {
  const product = await productService.findProductById(reqData.productId);

  const review = new Review({
    user: user._id,
    product: product._id,
    review: reqData.review,
    createAt: new Date(),
  });
  await product.save();
  return await review.save();
}

// get all reviews
async function getAllReview(productId) {
  const product = await productService.findProductById(reqData.productId);

  return await Review.find({ product: productId }).populate("user");
}

module.exports = {
  createReview,
  getAllReview,
};
