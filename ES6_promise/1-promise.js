/**
 * Returns a promise based on the boolean parameter `success`.
 * @param {boolean} success - Determines whether the promise should resolve or reject.
 * @returns {Promise<Object>} A promise that resolves or rejects with the specified value.
 */
export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({
          status: 200,
          body: 'Success',
        });
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    });
  }
  