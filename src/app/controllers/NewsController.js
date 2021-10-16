class NewsController{
    
    //[GET] /news
    index(req, res){
        res.render('news')
    }

    show(req, res){
        res.send('Minh Thu Beo')
    }
}

module.exports = new NewsController