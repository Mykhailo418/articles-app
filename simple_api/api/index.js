var router = require('express').Router();
var mocks = require('./mock');
var assign = require('object-assign');

var server_timeout = 1500;

router.get('/article', function (req, res, next) {
    var articles = mocks.articles.map(function (article) {
            return assign({}, article, {
                text: undefined
            })
        }),
        limit = Number(req.query.limit) || articles.length,
        offset = Number(req.query.offset) || 0;
    res.header('Access-Control-Allow-Origin','*');
    //res.header('Access-Control-Allow-Headers','X-Requested-With');
    setTimeout(function(){
        res.json(articles.slice(offset, limit + offset));
    },server_timeout);
});

router.get('/article/:id', function (req, res, next) {
    var article = mocks.articles.filter(function (article) {
        return article.id == req.params.id
    })[0];
    res.header('Access-Control-Allow-Origin','*');

    if(article){
        setTimeout(function(){
            return res.json(article);
        },server_timeout);
    }else{
        res.status(404).json({error: "not found"});
    }
});

router.post('/article', function (req, res, next) {
    var body = req.body;
    var article = {
        text: body.text,
        id: Date.now().toString(),
        user: body.user,
        date: new Date()
    };
    mocks.articles.push(article);

    res.json(article)
});

router.get('/comment', function (req, res, next) {
    var aid = req.query.article;
    
    if (aid) {
        var article = mocks.articles.find(function(article) {
            return article.id == aid
        });
        setTimeout(function(){
            res.header('Access-Control-Allow-Origin','*');
            return res.json((article.comments || []).map(function(id) {
                return mocks.comments.find(function(comment) {
                    return comment.id == id
                })
            }));

        },server_timeout);
    }else{

        var limit = Number(req.query.limit) || mocks.comments.length,
            offset = Number(req.query.offset) || 0;
        
        setTimeout(function(){
            res.header('Access-Control-Allow-Origin','*');
            res.json({
                total: mocks.comments.length,
                records: mocks.comments.slice(offset, limit + offset)
            });
        },server_timeout);
    }
});

router.post('/comment', function (req, res, next) {
    var comment = {
        id : Date.now().toString(),
        text : req.body.text,
        date: new Date(),
        user: req.body.user,
        article : req.body.article
    };
    mocks.comments.push(comment);
    res.json(comment)
});

router.post('/report', function (req, res) {
    res.json({})
})

module.exports = router;
