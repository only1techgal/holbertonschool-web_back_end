const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            try {
                const lines = data.trim().split('\n');
                if (lines.length <= 1) {
                    resolve(); // No valid students if only headers or no content
                    return;
                }

                const headers = lines[0].split(',');
                const fieldIndex = headers.indexOf('field');
                const nameIndex = headers.indexOf('firstname');

                if (fieldIndex === -1 || nameIndex === -1) {
                    reject(new Error('Invalid CSV structure'));
                    return;
                }

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

                resolve(); // Successfully finishes processing
            } catch (processingError) {
                reject(new Error('Cannot process the database'));
            }
        });
    });
}

module.exports = countStudents;
