const express = require('express')
const router = express.Router()

const courseController = require('../app/controllers/CourseController')

router.get(`/create`, courseController.create)
router.post('/store', courseController.store)
router.get(`/:slug`, courseController.show)
router.get(`/:id/edit`, courseController.edit)
router.patch(`/:id/restore`, courseController.restore)
router.put(`/:id`, courseController.update)
router.delete(`/:id/force`, courseController.force)
router.delete(`/:id`, courseController.delete)




module.exports = router;