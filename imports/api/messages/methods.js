import Messages from './';

/**
 * Create message.
 *
 * @param {string} body
 * @param {string} userId
 * @param {string} meetingId
 */
export const create = (body, userId, meetingId) => new Promise((resolve, reject) => {
  Messages.insert({
    body,
    userId,
    meetingId,
  }, (error, fields) => error ? reject(error) : resolve(fields));
});
