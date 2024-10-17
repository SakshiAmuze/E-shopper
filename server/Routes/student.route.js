import  express  from "express";
const studentsRoute = express.Router();

 import{ insertStudent,updateStudent,deleteStudent,selectStudent,selectStudentbyid,selectStudentByLocation} from '../Controllers/student.controller.js';

studentsRoute
 .get("/get-student",selectStudent)
 .get("/get-student/:locationId",selectStudentByLocation)
 .post("/add-student",insertStudent)
 .put("/update-student/:studentid",updateStudent) 
 .delete("/delete-student/:uid",deleteStudent)
 .get("/get-student/:studentid",selectStudentbyid)


// .post("/",(req,res)=>{
//     res.send("post route")
// })      

  
// .put("/",(req,res)=>{
//     res.send("put route")
// })  

// .get("/",(req,res)=>{
//     res.send("get route")
// })  

export default studentsRoute;





