/**
 * Updates students' grades based on their city and new grade data
 * @param {Array} students - List of student objects
 * @param {String} city - city to filter students by
 * @param {Array} newGrades - Array of grade objects with studentId and grade
 * @returns {Array} Array of updated student objects
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
        const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);

        return {
          id: student.id,
          firstname: student.firstName,
          location: student.location,
          grade: gradeInfo ? gradeInfo.grade : 'N/A',
        };
    });  
}