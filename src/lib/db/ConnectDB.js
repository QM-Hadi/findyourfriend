


export async function connectDB(){
    try{
        let conncection = await mongoose.connect(process.env.MONGODB_URI)
    }
    catch(err){
        console.log("error in connection ==>" , err)
    }
}