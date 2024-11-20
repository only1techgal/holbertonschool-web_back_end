/**
 * Updates the grade of students by city.
 *
 * @param {Array} students - List of student objects.
 * @param {String} city - The city to filter students by.
 * @param {Array} newGrades - List of grade objects with `studentId` and `grade`.
 * @returns {Array} - Updated list of students with grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
