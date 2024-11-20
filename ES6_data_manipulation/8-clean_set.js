/**
 * Returns a string of all set values that start with a specific string
 * appending only the rest of the string after the startString
 * 
 * @param {set} set - The set containing string values
 * @param {string} startString - The string to check as a prefix
 * @returns {string} Astring with matched values separated by '-'
 */
export default function cleanSet(set, startString) {
    if (typeof startString !== 'string' || startString.length === 0) {
        return '';
    }

    return Array.from(set)
    .filter(value => typeof value === 'string' && value.startsWith(startString))
    .map(value => value.slice(startString.length))
    .join('-');
}