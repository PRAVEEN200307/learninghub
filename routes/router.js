import express from "express"
import { getAllData, handleDelect, handlePlaced, handlePost, handleUnPlaced, handleUpdata } from "../controler/controler.js";


const router = express.Router();

// get the all the data
router.get('/', getAllData);

// create the data
router.post('/',handlePost)

// delete the single data
router.delete('/:id',handleDelect)

// update the single data
router.put('/:id',handleUpdata)


router.get('/Placed',handlePlaced);
router.get('/Unplaced',handleUnPlaced);


export default router