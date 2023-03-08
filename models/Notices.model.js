const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const NoticeSchema = new mongoose.Schema({
  title: { type: String, required: true},
  link: { type: Boolean, required: true},
  src: { type: String},
},
{collection:"my-updates"}
);


const Updates = mongoose.model("updates", NoticeSchema)
module.exports = Updates