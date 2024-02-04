const firebase = require('../db')
const Assembly = require('../models/inventory')
const firestore = firebase.firestore();

//add assembly line
const addAssembly = async(req, res, next) => {
    try{
        const data = req.body
        await firestore.collection('assemblies').doc().set(data)
        res.send('Record added successfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

//get all assemblies in the industry
const getAllAssemblies = async(req, res, next) => {
    try{
        const assemblies = await firestore.collection('assemblies')
        const data = await assemblies.get()
        const assemblyArray = []

        if(data.empty) {
            res.status(404).send('No assembly record found')
        } else {
            data.forEach( doc => {
                const assembly = new Assembly(
                    doc.id,
                    doc.data().worker,
                    doc.data().task,
                    doc.data().schedule,
                    doc.data().pay,
                )
                assemblyArray.push(assembly)
            })
            res.send(assemblyArray)
        }
        res.send('Assembly added successfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

//get single assembly line
const getAssembly = async(req, res, next) => {
    try{
        const id = req.params.id
        const assembly = await firestore.collection('assemblies').doc(id)
        const data = await assembly.get()

        // ! used to negate so if data doesn't exist
        if(!data.exists){
            res.status(404).send('Assembly line with that ID does not exist')
        } else {
            res.send(data.data())
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

//update assembly line
const updateAssembly = async(req, res, next) => {
    try{
        const id = req.params.id
        const data = req.body;
        const assembly = await firestore.collection('assemblies').doc(id)
        await assembly.update(data)
        res.send('Item updated successfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

//delete assembly line in an industry
const deleteAssembly = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('assemblies').doc(id).delete()
        res.send('Item deleted successfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports = {
    addAssembly,
    getAllAssemblies,
    getAssembly,
    updateAssembly,
    deleteAssembly
}

