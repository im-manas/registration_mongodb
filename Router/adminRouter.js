const express=require('express')
const admin_router=express.Router()

const admin_controller=require('../Controller/adminController')

admin_router.get('/',admin_controller.getForm)
admin_router.post('/form',admin_controller.postFormData)
admin_router.get('/formDetails',admin_controller.getFormDetails)
admin_router.post('/search',admin_controller.postSearchDetails)
admin_router.get('/dash',admin_controller.getDashboard)
module.exports=admin_router