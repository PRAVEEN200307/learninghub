import studenDetail from "../schema/schema.js"


// get all the data
export const getAllData = async (req, res) => {
    try {
        const allData = await studenDetail.find();
        return res.status(200).json(allData)
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

// added the data
export const handlePost = async (req, res) => {

    const postedData = new studenDetail({
        name: req.body.name,
        role: req.body.role,
        email: req.body.email,
        phone: req.body.phone,
        course: req.body.course,
        status: req.body.status
    })
    try {
        const addedData = await postedData.save()
        return res.status(200).json(addedData)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
}

export const handleUpdata = (req, res) => {
    res.send('update the data')
}

// update the data
export const handleDelect = async (req, res) => {
    const id = req.params.id;
    try {
        await studenDetail.deleteOne({ _id: id })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    res.send('delete a response');
}

export const handlePlaced = async (req, res) => {

    try {
        const placed = await studenDetail.find( {
            status: "Placed",
        }).exec();

        res.send(placed)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const handleUnPlaced = async (req, res) => {
    try {
        const Unplaced = await studenDetail.find({
            status: "Unplaced",
        }).exec()

        res.send(Unplaced)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
//Unplaced

//Placed