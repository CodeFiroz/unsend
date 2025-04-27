import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    from: { type: String, trim: true },
    to: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
    device: { type: String, trim: true },
    browser: { type: String, trim: true },
    os: { type: String, trim: true },
    ip: { type: String, required: true, trim: true },
    slug: {type: String, required: true, trim: true},
}, { timestamps: true });

const MessageModel = mongoose.model('Message', MessageSchema);
export default MessageModel;
