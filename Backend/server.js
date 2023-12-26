const express= require('express')
const mongoose= require('mongoose')
const bookRouter=require("./routes/Book/Book-routes")
const reviewRouter=require("./routes/Review/Review-routes")
const userRouter= require('./routes/User/User-routes')

require('dotenv').config()

const app = express();

app.use(express.json());

app.use('/book/', bookRouter)
app.use('/review/',reviewRouter)
app.use('/',userRouter)

const DB_url=process.env.MONGO_URI

mongoose.connect(DB_url).then(()=>{
    console.log('mongoDB connected')
}).catch((err)=>console.log(err))


app.listen(8080,()=>{
    console.log("App is running on port 8080")
})