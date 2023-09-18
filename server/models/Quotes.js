import mongoose from 'mongoose'
const quoteSchema = new mongoose.Schema({
   quote:{
       type:String,
       required:true
   },
   postedBy:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"User"
   }
    
})

mongoose.model("Quote",quoteSchema)