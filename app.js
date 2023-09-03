import express from 'express';
import myLogger from './middleware/logger-middleware.js';
import web from "./routes/web.js";
import student from "./routes/student.js"

const app = express()
const port = process.env.PORT || "3000"
app.set('views engine', "ejs")


app.use('/', web)
app.use('/', student)


app.listen(port, () => {
    console.log(`server listening http://localhost:${port}`)
})
