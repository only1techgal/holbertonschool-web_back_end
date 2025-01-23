const http = require('http');
const fs = require('fs').promises;

async function countStudents(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        const lines = data.split('\n')
            .filter(line => line.trim() !== '')
            .slice(1); // Remove header

        const students = lines.map(line => line.split(','));

        const studentsByField = students.reduce((acc, student) => {
            const field = student[3];
            if (!acc[field]) acc[field] = [];
            acc[field].push(student[0]);
            return acc;
        }, {});

        let response = `Number of students: ${students.length}\n`;
        for (const [field, names] of Object.entries(studentsByField)) {
            response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }

        return response.trim();
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

const app = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        const databasePath = process.argv[2];
        
        try {
            const studentList = await countStudents(databasePath);
            res.end(`This is the list of our students\n${studentList}`);
        } catch (error) {
            res.statusCode = 500;
            res.end(`This is the list of our students\n${error.message}`);
        }
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

app.listen(1245, () => {
    console.log('Server running on port 1245');
});

module.exports = app;
