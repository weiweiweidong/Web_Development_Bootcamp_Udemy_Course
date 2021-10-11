const express = require("express");
const bodyParser = require("body-parser");

// 导入 date，其实导入的就是 date.js 文件中的 getDate() 方法
const date = require(__dirname + "/date.js");
console.log(date);

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
// 备注： 定义一个空数组为 const 时，可以往空数组中 push 元素，但是不能把另一个数组赋给空数组
// const testArray = [];
// 可以：testArray.push("A");
// 不能：testArray = ["B"];
const workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// -----------------------主路由-----------------------
app.get("/", (req, res) => {
  let day = date.getDate();
  console.log(day);
  res.render("list", {
    listTitle: day,
    newListItems: items,
  });
});

app.post("/", (req, res) => {
  console.log(req.body);

  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
})

// -----------------------Work 路由-----------------------
app.get("/work", (req, res) => {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems,
  })
});

app.post("/work", (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

// -----------------------about 路由-----------------------
app.get("/about", (req, res) => {
  res.render("about");
})




app.listen(3000, () => {
  console.log("Server started on port 3000!");
});
