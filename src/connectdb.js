import { MongoClient } from "mongodb"
import {mongoUri} from "../secrets.js"
console.log(mongoUri)
const client = new MongoClient (mongoUri)
export const db = client.db("Natevehicle");