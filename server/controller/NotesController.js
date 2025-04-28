import MessageModel from "../model/NotesModel.js";
import useragent from "useragent";

function createSlug(text) {
    const randomStr = Math.random().toString(36).substring(2, 8); // 6 random chars

    const slug = text
        .toString()
        .normalize('NFKD')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');

    return `${slug}-${randomStr}`;
}


export const newMsg = async (req, res) => {
    try {

        const { to, from, message } = req.body;

        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        let clientIp = ip;
        if (clientIp === '::1') clientIp = '127.0.0.1';

        const agent = useragent.parse(req.headers['user-agent']);

        if (!to || !from || !message) {
            console.log('all fields are required');

            return res.status(400).json({
                success: false,
                message: `All fields are required.`,
            });
        }


        let Msgslug =  createSlug(to);

        const findSlug = await MessageModel.findOne({ slug: Msgslug });

        let updateslug = Msgslug; 

        if (findSlug) {
            // Slug exists, make a unique one
            Msgslug = `${Msgslug}-${Math.floor(Math.random() * 10000)}`;
          }


        const usermessage = new MessageModel({
            from,
            to,
            message,
            device: agent.device.toString(),
            browser: agent.toAgent(),
            os: agent.os.toString(),
            ip: clientIp,
            slug: Msgslug
        })

        const newMsg = await usermessage.save();

        return res.status(201).json({
            success: true,
            message: `Message Saved`,
        });

    } catch (error) {
        console.log("Error while saving message", error);
        return res.status(400).json({
            success: false,
            message: `Error while saving message`,
        });
    }
}

export const findMessage = async (req, res) => {
    try {

        const { msgSlug } = req.params;

        const msg = await MessageModel.find({ slug: msgSlug }).select("-ip -os -device -browser");

        if (!msg) {
            return res.status(400).json({
                success: false,
                message: `No Message Found`,
            });
        }

        return res.status(200).json({
            success: true,
            message: `Message found`,
            Note: msg,
        });

    } catch (error) {
        console.log("Error while finding message", error);
        return res.status(400).json({
            success: false,
            message: `Error while finding message`,
        });
    }
}


export const AllMessages = async (req, res) => {
    try {


        const msg = await MessageModel.find().sort({ createdAt: -1 }).select("-ip -os -device -browser");

        if (!msg) {
            return res.status(400).json({
                success: false,
                message: `No Message Found`,
            });
        }

        return res.status(200).json({
            success: true,
            message: `All Message Founds`,
            data: msg,
        });

    } catch (error) {
        console.log("Error while finding all message", error);
        return res.status(400).json({
            success: false,
            message: `Error while finding all message`,
        });
    }
}