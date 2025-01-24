import fs from 'fs/promises';

export async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n');
    const students = lines.slice(1).map((line) => line.split(','));

    const fields = {};
    for (const [firstname, , , field] of students) {
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    }
    return fields;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
