import mongoose from 'mongoose';

async function dbconnection(){
    // return await mongoose.connect('mongodb://127.0.0.1:27017/viralproject');
    return await mongoose.connect('mongodb+srv://admin:sakshi30@cluster0.lckswxe.mongodb.net/student');
    
   
    // mongodb+srv://admin:w359iGQLeqLw2HZ3@cluster0.ithwlin.mongodb.net/mamtadb
}

export default dbconnection;