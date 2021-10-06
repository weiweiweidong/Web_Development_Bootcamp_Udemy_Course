
const express = require("express");
const app = express();
const port = 3000;

//默认request时，返回hello World
app.get('/', (req,res)=>{
  res.send("<h1>Hello H1</h1>");
});

// 当request 为 /aaa 时，返回Hello aaa
app.get('/aaa', (req,res)=>{
  res.send('Hello boy');
});

app.get("/contact", (req,res)=>{
  res.send("Contact me at: aaa@123.com");
});

app.get("/about", (req,res)=>{
  res.send("My name is Dong!");
})

app.get("/sb", (req,res)=>{
  res.send("You are a SB!");
})

app.listen(port, ()=>{
  console.log(`Example app listening at http://localhost:${port}`);
});
