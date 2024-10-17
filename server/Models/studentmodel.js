import mongoose from 'mongoose';
const { Schema } = mongoose;

const studentSchema = new Schema({

    studentname:String,
    studentdob:String,
    studentplace:String,
    studentgender:String,
    studenthobbies:String,
    filepath:String
 
});

//model create--> schema bind collection
const studentModel = mongoose.model('students', studentSchema);
export default studentModel;