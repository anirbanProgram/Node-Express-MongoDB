const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

//For SSL secure server
// const https = require('https')
// const fs = require('fs')

const app = express()

app.use(cors())
dotenv.config()

//SET SERVER PORT
app.set('port', process.env.PORT || 3000)

//Connection to database
mongoose.connect(process.env.DB_CONNECT,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(() => console.log('Connected to mongoDB'))
    .catch(err => console.error('Could not connect to MongoDB..', err))


//Set route to controller
const userRouter = require('./routes/user')
app.use('/user', userRouter)

// **** FOR HTTP SERVER ****
const server = app.listen(app.get('port'), () => {
    console.log('Server started at port ' + app.get('port'))
})


// const options = {
//     cert: fs.readFileSync('fullchain .pem file path here...!'),
//     key: fs.readFileSync('privatekey .pem file path here...!')
// }

// **** FOR HTTPS SERVER ****
// https.createServer(options, app).listen(app.get('port'), () => {
//     console.log("Express https server listening on port " + app.get('port'))
// })

module.exports = app