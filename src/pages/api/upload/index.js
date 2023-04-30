const { cloudinary } = require("../utils/cloudinary");

export default async function (req, res) {
  try {
    const fileStr = req.body.data;

    const uploadResponse = await cloudinary.v2.uploader.upload(fileStr, {
      folder: "test",
    });
    console.log(uploadResponse);
    res.status(200).json({ name: "upload" });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
}
