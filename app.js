const express = require('express');
const path = require('path');

//init app
const app = express();

//load view engine

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//home route
app.get('/',function(req,res){
  //res.send("hello world");
  // res.render('index'); // pasar una vista para ser renderizada
  // se pueden pasar valores a los views
  let articles = [ // esto vendrá luego de la BD (mongoDB)
    {
      id:1,
      title: 'Article One',
      author: 'Ken Vega',
      body: 'This is article one'
    },
    {
      id:2,
      title: 'Article Two',
      author: 'Ken Vega',
      body: 'This is article two'
    },
    {
      id:3,
      title: 'Article Three',
      author: 'Ken Vega',
      body: 'This is article three'
    }
  ]
  res.render('index', { // se envia un objeto
    title : 'Articles',
    articles : articles
  });
})

//another route
app.get('/articles/add', function(req,res){
  res.render('add_article',{title:'add article'});
});

app.listen(3000,function(){
  console.log("server started on port 3000");
})
