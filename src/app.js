import express from "express";
import './db/connect.js';
import { router } from "./routers/router.js";

const port=process.env.port || 3000;
const app =express();
app.use(express.json())
app.use(router)



app.listen(port,()=>console.log(`Listening at port ${port}`));