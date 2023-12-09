const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const colors=require('colors')



const app=express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


app.get('/',(req,res)=>{
    res.status(200).send({
        message:"hello",
    })
})

app.listen(8080,()=>{
    console.log("server is running on port 8080".bgCyan.white)
})