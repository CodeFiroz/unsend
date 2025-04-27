import express from "express"
import { AllMessages, findMessage, newMsg } from "../controller/NotesController.js";

const router = express.Router();

router.post('/', newMsg)
router.get('/:msgSlug', findMessage)
router.get('/', AllMessages)

export default router;