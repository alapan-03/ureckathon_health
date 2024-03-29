const express= require("express");
const app = express()
const cors = require("cors")
const mongoose = require("mongoose");
const authRouter = require("./routers/authRouter")
// const userRouter = require("./Routers/userRouter")
// const commRouter = require("./Routers/communityRouter")
// const postRouter = require("./Routers/postRouter")
// const notiRouter = require("./Routers/notiRouter")


const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));

mongoose.connect("mongodb+srv://karriku03:tzsJnqEiL8Nyqj57@cluster0.hajxusn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
}).then(() => console.log("DB connection successful"))


app.listen(process.env.PORT || 4000, ()=>{
    console.log("App is running...")
})


app.use("/api/v1/auth", authRouter);
// app.use("/api/v1/user", userRouter);
// app.use("/api/v1/community", commRouter);
// app.use("/api/v1/post", postRouter);
// app.use("/api/v1/noti", notiRouter);


module.exports = app;