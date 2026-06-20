// import mongoose from "mongoose";

// const connectDB = async () => {
//    try {  
//      const mongoURI = `${process.env.MONGODB_URI}/photolytics`;
//      await mongoose.connect(mongoURI);
//      console.log("Database Connected");
//      console.log(process.env.MONGODB_URI);
//     } 
//     catch (error) {
//          console.log(error);
//     }
// }

// export default connectDB;


import mongoose from "mongoose";
import dns from "dns";

// Set custom DNS servers to bypass Node.js querySrv ECONNREFUSED issue when resolving MongoDB Atlas SRV records
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
  try {
    console.log("URI =", process.env.MONGODB_URI);

    const mongoURI = `${process.env.MONGODB_URI}/photolytics`;

    console.log("Connecting to:", mongoURI);

    await mongoose.connect(mongoURI);

    console.log("Database Connected");
  } catch (error) {
    console.error("MongoDB Error:", error);
  }
};

export default connectDB;