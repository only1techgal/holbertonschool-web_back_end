import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const filePath = process.argv[2];
    try {
      const fields = await readDatabase(filePath);
      let responseText = 'This is the list of our students\n';

      Object.keys(fields)
        .sort((a, b) => a.localeCompare(b))
        .forEach((field) => {
          responseText += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        });

      res.status(200).send(responseText.trim());
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const filePath = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(filePath);
      const students = fields[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

export default StudentsController;
