/**
 * Checks if all elements of an array exist in a set.
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array whose elements will be checked in the set.
 * @returns {boolean} True if all elements in the array are in the set, otherwise false.
 */
export default function hasValuesFromArray(set, array) {
    return array.every(value => set.has(value));
}
