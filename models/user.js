const mongoose =  require('mongoose');


const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    phone:Number,
    // gender:{          // iss tarike se hum gender assign karte hai
    //     type:String,
    //     enum:['male' , 'female']
    // }
})

const userModel = mongoose.model('user',userSchema);

module.exports = userModel