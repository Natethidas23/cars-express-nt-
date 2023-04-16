import {db} from "./connectdb.js"
export async function getCars(req,res){
    const cars= await db.collection ('Cars').find({}).toArray()
    res.send(cars)
};


export async function addNewCar(req,res){
    const newCars=req.body
    console.log('audi',newCars)
    await db.collection('Cars').insertOne(newCars)
    res.status(201).send("added Cars")
};

export async function updateCar(req,res){
    //const newCars=
}

//{getCars,addNewCar,updateCar