import { uploadPhoto, createUser } from './utils';

/**
 * Handles profile signup by resolving promises for photo upload and user creation.
 * Logs the photo body, first name, and last name on success.
 * Logs an error message on failure.
 */
export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
