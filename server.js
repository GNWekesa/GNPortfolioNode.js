const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from root directory
app.use(express.static(__dirname)); // This serves ALL files in your root directory

// Explicit root route (optional but recommended)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'codinguser',
  password: '$$77Gabi',
  database: 'myportfolio_db'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Contact form route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const sql = 'INSERT INTO contact_form (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error('Failed to insert data:', err);
      res.status(500).send('Error saving message');
    } else {
      res.status(200).send('Message saved successfully!');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
