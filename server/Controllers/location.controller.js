import locationModel from "../Models/locationmodel.js";

const addLocation =async(req,res)=>{

    var locationName = req.body;

    var dataToInsert = locationName;

    try{
        var locationModelInstance = locationModel(dataToInsert);
        var ansAfterInsert = await locationModelInstance.save();
        res.status(200).send({msg:"Data Added" , data:ansAfterInsert})
    }
    catch(err){
       res.status(403).send({error:err})
       console.log(err);
    }
}

const selectLocation = async (req,res)=>{
    try{
       var ansFORMDB = await locationModel.find();
       res.status(200).send({data:ansFORMDB})
    }
    catch(err){
       res.status(403).send({error:err})
    }
}

const updateLocation =  async(req,res)=>{
    // console.log(req.params.id ,req.body);
    
   try{
      var ansAfterUpdate = await locationModel.findByIdAndUpdate(req.params.id ,req.body);
      res.status(200).send({msg:"Data Updated" , data:ansAfterUpdate})
      console.log(req.params.id ,req.body);
  
   }
   catch(err){
     
      res.status(403).send({error:err})
      console.log(err);
   }
 }

 const deleteLocation = async (req,res)=>{

    try{
       var ansAfterDelete = await locationModel.findByIdAndDelete(req.params.id);
       res.status(200).send({msg:"Data Deleted" , data:ansAfterDelete})
   
    }
    catch(err){
      
       res.status(403).send({error:err})
       console.log(err);
    }
  
  }



export{
    selectLocation,
    updateLocation,
    deleteLocation,
    addLocation
    
}