const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5001, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "ericpnormann@gmail.com",
      pass: "MLQ-K6T-cPp-egD",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    let subject = req.body.subject;
    console.log(subject)
    if(subject == "develop") {
      subject = "Development Inquiry"
    } else if (subject == "design") {
      subject = "Design Inquiry"
    }
    const mail = {
      from: name,
      to: "ericpnormann@gmail.com",
      subject: `Portfolio Contact Form: ${subject}`,
      html: `<h2>Name: <span style="font-weight:normal">${name}</span></h2>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });