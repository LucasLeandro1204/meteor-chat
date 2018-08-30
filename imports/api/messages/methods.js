import Messages from './';

/**
 * Create message.
 *
 * @param {string} body
 * @param {string} username
 * @param {string} meetingId
 */
export const create = (body, user, meetingId) => new Promise((resolve, reject) => {
  Messages.insert({
    body,
    userId: user._id,
    username: user.name,
    meetingId,
  }, (error, fields) => error ? reject(error) : resolve(fields));
});
