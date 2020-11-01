const Post = require("../models/posts");

exports.getBlogs = async (req, res, next) => {
	const data = await Post.findAll({ attributes: ["title", "content"] });
	return res.status(404).send({ msg: "success", data });
};
