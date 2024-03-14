import mongoose  from "mongoose";

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "MERN_STACK_JOB_SEEKING",
    }).then(()=>{
        console.log("Connect to database")
    }).catch((err)=>{
        console.log(`Error while connecting to database: ${err}`)
    })
}

// jobseeking
// Password