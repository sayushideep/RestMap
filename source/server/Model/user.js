const mongoose= require('mongoose');

const UserSchema= new mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        profilepic:{
            type:String
        },
        email:{
            type:String
        },
        contact:{
            type:String
        },
        address:{
            type:String
        }

    }
)

module.exports= mongoose.model('User',UserSchema);