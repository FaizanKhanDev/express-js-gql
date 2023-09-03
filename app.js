import express from 'express';
const app = express()


const port = process.env.PORT || '3000'


app.listen(port, () => {
    console.log(`Server listenning at http://localhost:${port}`)
})