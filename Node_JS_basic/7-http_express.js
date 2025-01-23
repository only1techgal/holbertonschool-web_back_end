const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseFile = process.argv[2]; // Read the database file from command-line arguments
  if (!databaseFile) {
    res.status(400).send('Database file is missing');
    return;
  }

  fs.readFile(databaseFile, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Cannot load the database');
      return;
    }

    const lines = data.trim().split('\n');
    const headers = lines.shift(); // Remove the header line
    const students = lines.map(line => line.split(',')).filter(fields => fields.length === 4);

    const csStudents = students.filter(fields => fields[3] === 'CS').map(fields => fields[0]);
    const sweStudents = students.filter(fields => fields[3] === 'SWE').map(fields => fields[0]);

    const response = [
      'This is the list of our students',
      `Number of students: ${students.length}`,
      `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`,
      `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`,
    ];

    res.send(response.join('\n'));
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
