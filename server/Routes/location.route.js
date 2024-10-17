import  express  from "express";
import { selectLocation,addLocation,deleteLocation, updateLocation} from "../Controllers/location.controller.js";
const locationRoute = express.Router();

locationRoute
.get("/get-location",selectLocation)
.post('/insert-location',addLocation)
.delete('/delete-location/:id',deleteLocation)
.put('/update-location/:id',updateLocation)

export default locationRoute;