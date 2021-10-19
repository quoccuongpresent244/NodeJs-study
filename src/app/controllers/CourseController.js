const Course = require('../models/Course')
const {mongooseToObject} = require('../../util/mongoose')

class CourseController{
    
    //[GET] /courses/:slug
    show(req, res, next){
        Course.findOne({slug : req.params.slug})
            .then(course => 
                res.render('courses/show', {course : mongooseToObject(course)})
            )
            .catch(next)
    }

    create(req, res){
        res.render('courses/create')
    }

    store(req, res, next){
        const course = new Course(req.body)
        course.save()
            .then(() => res.redirect('/'))
            .catch(next) 
    }

    edit(req, res, next){
        Course.findById(req.params.id)
            .then(courses => 
                res.render('courses/edit', {courses : mongooseToObject(courses)})
            )
            .catch(next)
    }

    update(req, res, next){
        Course.updateOne({_id : req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    delete(req, res, next){
        Course.deleteOne({_id : req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new CourseController()