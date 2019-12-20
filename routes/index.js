var express = require('express');
var router = express.Router();
var db = require('../model/contact')
var dbStartup = require('../model/startup')
var dbProject = require('../model/project')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});



router.post('/contact', function(req, res, next) {
  const data={
    name:req.body.name,
    email:req.body.email,
    message:req.body.message,
  }
  db.Contact.create(data).then((r)=>{
    res.send('Your Message Has Been Submmitted');

  }).catch((r)=>{
    res.send('There Was Some Problem');

  })
});

router.get('/contact/msg', function(req, res, next) {
  
  db.Contact.find({}).then((r)=>{
    res.send(r);

  }).catch((r)=>{
    res.send('There Was Some Problem');

  })
});



router.get('/startup-inquiry',(req,res)=>{
  res.render('startup')
})

router.get('/startup-inquiry/msg',(req,res)=>{
  dbStartup.Startup.find({}).then((r)=>{
    res.send(r);

  }).catch((r)=>{
    res.send('There Was Some Problem');

  })
})

router.post('/startup-inquiry',(req,res)=>{
  const data={
    name:req.body.name,
    email:req.body.email,
    project:req.body.project,
    role:req.body.role,
    message:req.body.message,
  }
  dbStartup.Startup.create(data).then((r)=>{
    res.send('Your Message Has Been Submmitted');

  }).catch((r)=>{
    res.send('There Was Some Problem');

  })
})

router.get('/project-planner',(req,res)=>{
  res.render('project')
})


router.get('/project-planner/msg',(req,res)=>{
  dbProject.Project.find({}).then((r)=>{
    res.send(r);

  }).catch((r)=>{
    res.send('There Was Some Problem');

  })
})
router.post('/project-planner',(req,res)=>{
  console.log(req.body)
  const data={
    name:req.body.name,
    email:req.body.email,
    project:req.body.project ,
    budget:req.body.budget,
    message:req.body.detail,
  }
  dbProject.Project.create(data).then((r)=>{
    res.send('Your Message Has Been Submmitted');

  }).catch((r)=>{
    res.send('There Was Some Problem');

  })
})
module.exports = router;
