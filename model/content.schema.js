import mongoose from "mongoose";

const schemaContent = mongoose.Schema({
    title : {
        type : String,
        required : true,
        min : 3,
        unique : true
    },
    thumbnail : {
        type : String,
        required : true,
        min : 3
    },
    description : {
        type : String,
        required : true
    },
    created_at : {
        type : Date,
        default : Date.now()
    }
});

const Content = mongoose.model("content", schemaContent, "content");

export default Content;