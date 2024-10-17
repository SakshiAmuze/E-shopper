import { nameValidation,dobValidation } from '../Middlewares/studentvalidator.js';
import studentModel from '../Models/studentmodel.js';
import multer from "multer";

var timestamp = Date.now()

const filesetting = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets/uploads/')
    },
    filename: function (req, file, cb) {

        cb(null, timestamp + file.originalname)
    }
})

const upload = multer({ storage: filesetting }).single('filepath')


const insertStudent = async (req,res)=>{

   // res.send({msg:"ok"})

   
   upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
          console.log(err)
      } else if (err) {
          console.log(err)
      }

      console.log(req.body)
      console.log(req.file)
      

      var datatoinsert = req.body
      datatoinsert.filepath = req.file.filename
      console.log(datatoinsert)

      var{studentname,studentrollno, studentdob, studentplace,studentgender,studenthobbies} = req.body;
    if (!nameValidation(studentname)){
       res.send({msg:"inValid studentName"})
    }    
 
    else if (!dobValidation(studentdob)){
       res.send({msg:"inValid DOB"})
    }  

    
    var dataToInsert={
     studentname: studentname,     //dusra username, useremail aur userpass yh textbox se data aayega
     studentdob:studentdob,
     studentrollno:studentrollno,
     studentplace:studentplace,
     studentgender:studentgender,
     studenthobbies:studenthobbies

    }
      console.log(dataToInsert);
    
     try{
         var studentModelInstance = studentModel(dataToInsert);
         var ansAfterInsert = await studentModelInstance.save();
         res.status(200).send({msg:"Data Added" , data:ansAfterInsert})
     }
     catch(err){
        res.status(403).send({error:err})
        console.log(err);
     }
  

      // try {
      //     var studentinstance = new studentModel(datatoinsert)
      //     var after_insert = await studentinstance.save()
      //     res.status(200).send({ msg: 'data inserted', data: after_insert })
      // }
      // catch (err) {
      //     res.status(403).send({ msg: "err", data: null })
      // }
  })




   // console.log(req.body);
   // console.log(req.file);
   

    }


const selectStudent = async (req,res)=>{
    try{
       var ansFORMDB = await studentModel.find();
       res.status(200).send({data:ansFORMDB})
    }
    catch(err){
       res.status(403).send({error:err})
    }
}

const selectStudentbyid = async (req,res)=>{
   console.log(req.params.studentid);
   try{
      var ansFORMDB = await studentModel.findById(req.params.studentid);
      res.status(200).send({msg:'Data Shown by id',data:ansFORMDB})
   }
   catch(err){
      res.status(403).send({error:err})
   }
}

const selectStudentByLocation = async (req,res)=>{
   console.log(req.params.locationId)

   try{
      var ansFORMDB1 = await studentModel.find({studentplace:req.params.locationId});
      res.status(200).send({msg:"Data shown by location" ,data:ansFORMDB1})
   }
   catch(err){
      res.status(403).send({error:err})
   }
}





const updateStudent =  async(req,res)=>{
   // console.log(req.params.studentid ,req.body);
   
  try{
     var ansAfterUpdate = await studentModel.findByIdAndUpdate(req.params.studentid ,req.body);
     res.status(200).send({msg:"Data Updated" , data:ansAfterUpdate})
     console.log(req.params.studentid ,req.body);
 
  }
  catch(err){
    
     res.status(403).send({error:err})
     console.log(err);
  }
}

const deleteStudent = async (req,res)=>{

  try{
     var ansAfterDelete = await studentModel.findByIdAndDelete(req.params.uid);
     res.status(200).send({msg:"Data Deleted" , data:ansAfterDelete})
 
  }
  catch(err){
    
     res.status(403).send({error:err})
     console.log(err);
  }

}

export {
   insertStudent,
   selectStudent,
   updateStudent,
   deleteStudent,
   selectStudentbyid,
   selectStudentByLocation
}
