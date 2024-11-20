/**
 * Updates a map by setting the quantity to 100 for all items with an initial quantity of 1.
 *
 * @param {Map} map - The map containing item quantities.
 * @throws {Error} Throws an error if the input is not a map.
 */
export default function updateUniqueItems(map) {
    if (!(map instanceof Map)) {
      throw new Error('Cannot process');
    }
  
    for (const [key, value] of map.entries()) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
  }
  