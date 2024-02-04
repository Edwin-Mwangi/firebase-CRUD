const express = require('express')
const { addAssembly, getAllAssemblies, updateAssembly, getAssembly, deleteAssembly } = require('../controllers/inventoryController')

const router = express.Router()

router.post('/assembly', addAssembly)
router.get('/assemblies', getAllAssemblies)
router.get('/assembly/:id', getAssembly)
router.put('/assembly/:id', updateAssembly)
router.delete('/assembly/:id', deleteAssembly)

module.exports = {
    router
}