const express = require('express')
const Blog = require('../models/blog')

const router = express.Router()

router.get("/userBlog", function(req,res){
    if(!loggedIn){
        
        res.redirect("/loginProceed")
      
    }
    else{
    res.render("blogForm")
    }
});

router.get("/blogs", function(req, res){

    if(!loggedIn){
        
        res.redirect("/loginProceed")
      
    }
    else{
    Blog.find().sort({ createdAt: -1})
    .then((result) => {
        res.render("blogs", {
            displayBlogs: result
            });
        })
    .catch((err) => {
        console.log(err);
    });
}});

router.get("/blogs/:blogId", function(req, res){
    const requestedBlogId = req.params.blogId;
    Blog.findOne({_id: requestedBlogId}, function(err, blog){
        res.render("blog", {
            title: blog.title,
            intro: blog.intro,
            body1: blog.body1,
            body2: blog.body2,
            body3: blog.body3,
            conclusion: blog.conclusion,
        });
      });
});


router.post("/userBlog", function(req, res){
    const newBlog = new Blog({
        title: req.body.blogTitle,
        intro: req.body.blogIntro,
        body1: req.body.blogBody1,
        body2: req.body.blogBody2,
        body3: req.body.blogBody3,
        conclusion: req.body.blogConclusion,
        
    })
 
    newBlog.save(function(err){
     if (!err){
         res.redirect("/blogs");
         console.log("Data saved to database")
     }
   });
 
 
 });


 module.exports = router