import mongoose from 'mongoose';
const { Schema } = mongoose;

const locationSchema = new Schema({
 locationName:String,
 loaction_id:String
    
 
});

//model create--> schema bind collection
const locationModel = mongoose.model('location', locationSchema);
export default locationModel;