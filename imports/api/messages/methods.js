import Messages from './';

/**
 * Create message.
 *
 * @param {string} body
 * @param {string} username
 * @param {string} meetingId
 */
export const create = (body, username, meetingId) => new Promise((resolve, reject) => {
  Messages.insert({
    body,
    username,
    meetingId,
  }, (error, fields) => error ? reject(error) : resolve(fields));
});
