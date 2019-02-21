const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send' , function(req , res) {
  //  let userObj = JSON.parse(req.query.data);
  let sObj = {
    name: req.body.Name,
    email: req.body.Email,
    phone: req.body.Phonenumber,
    num: req.body.nPeople,
    dot: req.body.DOT,
    remarks: req.body.remarks
};
    console.log(sObj);
  //  console.log(userObj);
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port:465,
        secure: true,
        auth: {
            user: 'noreplymytourguru@gmail.com',
            pass: 'Mukherjee@12'
        }
    });
    let helperOptions ={
        from:"noreplymytourguru@gmail.com",
        to:'info@mytourguru.com',
        subject:'tour',
        html: '<h1>Andaman Package Details :- </h1> '+ '<br>' + '<b> Email ID is :-  ' + req.body.Email + '<br />Name :- ' + req.body.Name + '<br />Phone Number :- ' + req.body.Phonenumber + '<br />number Of People ' + req.body.nPeople + '<br />Date Of Travel :- ' + req.body.DOT + '<br />Remarks :-  ' + req.body.remarks
    };
    transporter.sendMail(helperOptions,(error,info) => {
        if(error) {
            return console.log(error);
        } 
        else
        {
            // res.send('sent');
            console.log(info);
        }
    });

    // console.log(JSON.parse(req.query.data).email1);

});

module.exports = router;