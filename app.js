const express = require("express")
const app = express()
const port = process.env.PORT || 8082
app.use(express.json())
// app.use(express.urlencoaded({extended:true}))

app.get("/api", function (req, res, next) {
    res.send("hello world")
})
app.get("/api/json", function (req, res) {
    const data={
        name:"rahul"
    }
    res.json(data)
    // res.send({
    //     name:"pihu"
        
    // })
})

app.post("/api/post",function(req,res){
    console.log(req.body);
    const data=req.body.data
    res.json(data)
})
//html pages
app.get("/html",(req,res)=>{
    //we have to send html file
    console.log(__dirname)//gives you path of current directory in which your file is
    res.sendFile(__dirname+"/views/app.html")
})

//template engine
app.set('view engine','ejs')
app.get("/template", function (req, res) {
    res.render('temp',{title:'hey',message:'hello there'})//render method is generally used  when you r rendering any template engine
})



app.listen(port, () => {
    console.log("server running at port" +  port)
})