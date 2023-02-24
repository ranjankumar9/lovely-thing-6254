const { ProductModel } = require("../../Models/Product.model");

const allProductsRouter = require("express").Router();

allProductsRouter.get("/:type", async (req, res) => {
  try {
    const { type } = req.params;
    const products = await ProductModel.find({ type });
    res.send(products);
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});

allProductsRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await ProductModel.find({ _id: id });
    res.send(products);
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});

module.exports = {
  allProductsRouter,
};
