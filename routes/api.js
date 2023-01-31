const express = require('express')
const studentsDATA = require('../models/student')
const { findById } = require('../models/student')
const router = express.Router() //routing function
const DATA = require('../models/student')
// to get the students list from db
router.get('/getstudent', async (req, res) => {

    try {

        const list = await DATA.find()
        res.send(list)


    } catch (error) {
        console.log(error)
    }

})
// update student
router.put('/updatestudent', async (req, res) => {
    try {

        let id = req.body._id
        let item = {  //to fetch and save data from front end in server
            
            standard:req.body.standard,
            division:req.body.division,
        }
        let updateData = { $set: item }
       updatestudent1 = await DATA.findByIdAndUpdate({ _id: id }, updateData)
     res.send(updatestudent1)
        console.log(updatestudent1)
    } catch (error) {

        console.log(error)

    }
})
router.post('/addstudent', async (req, res) => {
    try {

        // console.log(req.body)
        let item = {  //to fetch and save data from front end in server
            name: req.body.name,
            rollno: req.body.rollno,
            mobno: req.body.mobno,
            classid: req.body.classid,
            standard: req.body.standard,
            division: req.body.division
        }


        const newstudent= new DATA(item) //to check incoming data
        const savestudent = await newstudent.save() //mongoDB save

        res.send(savestudent)


    } catch (error) {

        console.log(error)
    }
})
router.get('/singlestudent/:id', async (req, res) => {
    try {

        let data = await DATA.findById({ "_id": req.params.id })
        res.send(data)
    }

catch (error) {
    console.log(error)
}

})


// router.get('/addbook1', async (req, res) => {

//     try {

//         const list = await DATA.find()
//         res.send(list)


//     } catch (error) {
//         console.log(error)
//     }

// })





router.delete('/deletestudent/:id', async (req, res) => {
    try {
        let id = req.params._id
        const deletestd = await DATA.deleteOne(({ _id: req.params.id })
        )
        res.send(deletestd)



    } catch (error) {
        console.log(error)

    }
})














module.exports = router
