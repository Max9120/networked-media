//  1. library imports
const express = require('express')
const parser = require('body-parser')
const multer = require('multer')

// 2. app setting
const app = express()
const encodedParser = parser.urlencoded({extended: true})
const uploadProcessor = multer({dest: "public/upload"})

app.use(express.static('public'))
app.use(encodedParser)
app.set("view engine", "ejs")

let generalPosts = []
let advicePosts = []
let mournPosts = []

// 3. routes
app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/newGen', (req, res) => {
    res.render('newGen.ejs');
});
app.get('/newAd', (req, res) => {
    res.render('newAd.ejs');
});
app.get('/newM', (req, res) => {
    res.render('newM.ejs');
});

app.get('/general', (req, res)=>{
		res.render('general.ejs', { genPosts: generalPosts })
})
app.get('/advice', (req, res)=>{
		res.render('advice.ejs', { adPosts: advicePosts })
})
app.get('/mourning', (req, res)=>{
    res.render('mourning.ejs', { mPosts: mournPosts })
})

app.post('/genSubmit', uploadProcessor.single("img"), (req, res) => {  
    let newPost = {
        title: req.body.title,
        text: req.body.text,
        url: req.body.url
    }
    if(req.file){
        newPost.imgUrl = "upload/" + req.file.filename
    }

    generalPosts.unshift(newPost)
    res.redirect('/general')
})
app.post('/adSubmit', uploadProcessor.single("img"), (req, res) => {
    let newPost = {
        title: req.body.title,
        text: req.body.text,
        url: req.body.url
    }
    if(req.file){
        newPost.imgUrl = "upload/" + req.file.filename
    }

    advicePosts.unshift(newPost)
    res.redirect('/advice')
})
app.post('/mournSubmit', uploadProcessor.single("img"), (req, res) => {
    let newPost = {
        title: req.body.title,
        text: req.body.text,
        url: req.body.url
    }
    if(req.file){
        newPost.imgUrl = "upload/" + req.file.filename
    }

    mournPosts.unshift(newPost)
    res.redirect('/mourning')
})

// 4. listen 
app.listen(3339, ()=>{
    console.log('server is live at http://127.0.0.1:3339')
})