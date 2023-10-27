const express = require('express');
const mysql = require('mysql2'); // Import the mysql2 package.
const app = express();
const port = 8080;

app.use(express.urlencoded());
app.use(express.json());

// Create a MySQL connection.
const connection = mysql.createConnection({
  host: 'localhost', // Replace with your MySQL host.
  user: 'root',
  password: 'bannu@1703',
  database: 'XYZ',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/api', (req, res) => {
  const { name, age } = req.body;

  // Create a SQL query to insert data into a table (replace 'your_table_name' with the actual table name).
  const sql = 'INSERT INTO sample (name, age) VALUES (?, ?)';

  // Execute the query with the data from the form.
  connection.query(sql, [name, age], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log('Data inserted into the database:', results);
      res.json({ message: 'Data inserted successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server Started on port: http://localhost:${port}`);
});

// Handle graceful shutdown and close the MySQL connection.
process.on('SIGINT', () => {
  connection.end();
  console.log('MySQL connection closed');
  process.exit();
});
