import mongoose from "mongoose";
const MONGODB_URI='mongodb+srv://admin:admin@cluster0.ou6o4bi.mongodb.net/?retryWrites=true&w=majority'

const connection={};

async function connect(){
  if(connection.isConnected){
    return;
  }
  const db = await mongoose.connect(MONGODB_URI)

  connection.isConnected= db.connections[0].readyState;
}

export default connect;