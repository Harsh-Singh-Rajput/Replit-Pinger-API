import mongoose from "mongoose";
const { Schema } = mongoose;

const UrlSchema = new Schema(
  {
    fullUrl: {
      type: String,
      required: true,
    },

    date:{
      type:String,
      default: new Date(Date.now())
    }
  },
  { timestamps: true }
);

export default new mongoose.model("URL", UrlSchema);
