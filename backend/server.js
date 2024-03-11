const express = require('express');
const multer = require('multer');
const cors = require('cors')

const app = express();
app.use(cors());
const uploads =multer({dest: __dirname + "uploads"});

app.post("/uploads", uploads.array('files'), (req,res) =>{
  console.log(req.body),
  console.log(req.files),
  res.json({status : 'file recieved successfully'})
})














app.listen(5000, function(){
  console.log("server runnning")
})

// Set up Multer for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// const upload = multer({
//   storage: storage,
//   fileFilter: function (req, file, cb) {
//     if (file.mimetype !== 'application/pdf') {
//       return cb(new Error('Only PDF files are allowed.'));
//     }
//     cb(null, true);
//   }
// });

// Serve static files
// app.use(express.static('public'));

// Handle form submission
// app.post('/submit-form', upload.single('cv'), (req, res) => {
//   const { name, email, phone, message } = req.body;
//   const cvFile = req.file;

//   if (!name || !email || !phone || !message || !cvFile) {
//     return res.status(400).send('Please fill out all fields and upload your CV.');
//   }

//   // Send email to admin
//   sendEmailToAdmin(name, email, phone, message, cvFile, (err) => {
//     if (err) {
//       console.error('Error sending email to admin:', err);
//       return res.status(500).send('Error sending email to admin.');
//     }

//     res.status(200).send('Form submitted successfully.');
//   });
// });

// Function to send email to admin
// function sendEmailToAdmin(name, email, phone, message, cvFile, callback) {
//   // Create a Nodemailer transporter
//   let transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'your-email@gmail.com',
//       pass: 'your-password'
//     }
//   });

//   // Email content
//   let mailOptions = {
//     from: 'your-email@gmail.com',
//     to: 'admin@example.com', // Admin email address
//     subject: 'New Contact Form Submission',
//     html: `
//       <p>Name: ${name}</p>
//       <p>Email: ${email}</p>
//       <p>Phone: ${phone}</p>
//       <p>Message: ${message}</p>
//     `,
//     attachments: [
//       {
//         filename: cvFile.originalname,
//         path: cvFile.path
//       }
//     ]
//   };

//   // Send email
//   transporter.sendMail(mailOptions, callback);
// }

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
