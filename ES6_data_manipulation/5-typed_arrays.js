/**
 * Creates a new ArrayBuffer with a Int8 value at a specific position
 * @param {number} length -The length of the ArrayBuffer
 * @param {number} position - The position in the ArrayBuffer where the value is set
 * @param {number} value - The value to store at the specified position
 * @returns {DataView} The Dataview for the Arraybuffer
 * @throw {Error} Throws an error if the position is outside the range of the ArrayBuffer 
 */
export default function createInt8TypedArray(length, position, value) {

    const buffer = new ArrayBuffer(length);

    if (position < 0 || position >= length) {
        throw new Error("Position outside range");
    }

    const dataView = new DataView(buffer);

    dataView.setInt8(position, value);

    return dataView;
}