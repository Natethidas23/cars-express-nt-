import  express  from "express";
import cors from "cors";
import {getCars,addNewCar,updateCar} from "./src/cars.js"


const PORT = 3032
const app = express();
app.use (cors());
app.use(express.json());//mising the change 

app.get("/cars",getCars)//the read 
app.post("/cars",addNewCar)//put something
app.patch("/cars",updateCar)//update


app.listen(PORT,()=>{
    console.log(`listening on http://localhost:${PORT}...`)
}); 