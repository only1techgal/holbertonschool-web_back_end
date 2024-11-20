/**
 * Filters a list of students by location
 * @param {Array} students - List of student object
 * @param {String} city - the city to filter by
 * @returns {Array} Filtered list of students in the specified city 
 */
export default function getStudentsByLocation(students, city) {
    if (!Array.isArray(students)) {
        return [];
    }
    return students.filter((student) => student.location === city);
}