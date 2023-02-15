const express=require('express');
const mongoose = require('mongoose');


const newaccRoutes=require('./routes/newaccRoutes')
const adminRoutes=require('./routes/adminRoutes');
const creditRoutes=require('./routes/creditRoutes');

const app=express();

mongoose.connect("mongodb://localhost:27017/studentDB", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});
mongoose.set('strictQuery', true);


  // register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));



app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});



// routes
app.get('/', (req, res) => {
    res.render('home',{title:"Home"});
    
});
app.get('/departments',(req,res)=>{
  res.render('departments');
})

app.get('/about', (req, res) => {
  res.render('about',{title:"about"});
  
});


app.use('/creditupdate',creditRoutes);
//new account routes
app.use('/new',newaccRoutes);

app.use("/studenthome",(req,res)=>{
  res.render("home",{title:"Home"});
});

app.use('/admin',adminRoutes);





app.get('/courses',(req,res)=>{
  res.render('courses');
});

app.get('/2020',(req,res)=>{
  res.render('reg2020');
});

app.use('/2018',(req,res)=>{
  res.render('reg2018');
});

app.get('/2022',(req,res)=>{
  res.render('reg2022');
});


app.get('/civil',(req,res)=>{
  res.render('civil');
});





app.listen(3000);


