const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('Strona Kariny'));
app.use(express.json());

app.get('/', (req, res ) => {
    res.sendFile(__dirname + '/Strona Kariny/contact.html');
})

app.post('/', (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: '',
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'm.zaniewski1995@gmail.com',
        text: req.body.message,
    }
    transporter.sendMail(mailOptions, function(error, info){

        if(error){
            console.log('error');
            res.send('error');
        }

        else{
            console.log('Email wysłany: ' + info.response);
            res.send('success');
        }
    })

})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})