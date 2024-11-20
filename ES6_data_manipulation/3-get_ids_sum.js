/**
 * calculates the sum of all student IDs
 * @param {Array} students - List of student objects
 * @returns {Number} Sum of all student IDs
 */
export default function getStudentIdsSum(students) {
    return students.reduce((accumulator, student) => accumulator + student.id, 0);
}
