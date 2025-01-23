const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8').trim(); // Read the file synchronously
        if (!data) throw new Error('Empty file'); // Handle empty file case

        const lines = data.split('\n');
        if (lines.length <= 1) throw new Error('Only headers or no valid rows');

        const headers = lines[0].split(',');
        const fieldIndex = headers.indexOf('field');
        const nameIndex = headers.indexOf('firstname');
        if (fieldIndex === -1 || nameIndex === -1) throw new Error('Invalid CSV structure');

        const students = lines.slice(1).map((line) => line.split(','));
        const validStudents = students.filter(
            (student) => student[fieldIndex] && student[nameIndex]
        );

        console.log(`Number of students: ${validStudents.length}`);

        const fields = {};
        validStudents.forEach((student) => {
            const field = student[fieldIndex];
            const name = student[nameIndex];
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(name);
        });

        for (const [field, names] of Object.entries(fields)) {
            console.log(
                `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
            );
        }
    } catch (err) {
        console.error(`Error details: ${err.message}`);
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
