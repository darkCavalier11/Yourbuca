import express from "express";
import mongoose from "mongoose";
// App config
const app = express();

// Middleware
app.use(express.json());
const PORT = process.env.PORT || 5001;

// DB config
const connectionUrl = "mongodb+srv://yourbuca:G4bXYBC2B6x6hQD@cluster0.0o8zi.mongodb.net/youbuca?retryWrites=true&w=majority";
mongoose.connect(connectionUrl, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});
// Router
app.get('/', (req, res)=>{
    res.send('Hello')
})

// Listen
app.listen(PORT, ()=>{
    console.log('p')
})