/**
 * Handles a promise response with specific behaviors for resolve, reject, and final resolution.
 * @param {Promise} promise - The promise to handle.
 * @returns {Promise<Object|Error>} A promise that resolves to an object or an Error.
 */
export default function handleResponseFromAPI(promise) {
    return promise
      .then(() => {
        console.log('Got a response from the API');
        return {
          status: 200,
          body: 'success',
        };
      })
      .catch(() => {
        console.log('Got a response from the API');
        return new Error();
      });
  }
  