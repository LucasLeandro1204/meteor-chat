import Users from './';

/**
 * Update or Create user.
 *
 * @param {object} selector
 * @param {object} modifier
 */
export const updateOrCreate = (selector, modifier) => new Promise(async (resolve, reject) => {
  const user = Users.findOne(selector);
  const data = Object.assign({}, user, selector, modifier);
  const callback = (error, fields) => error ? reject(error) : resolve(fields);

  if (! user) {
    Users.insert(data, callback);
  } else {
    // use schema
    data.createdAt = user.createdAt;

    Users.update(selector, data, callback);
  }
});

/**
 * Delete user by connection id.
 *
 * @param {string} connectionId
 */
export const deleteByConnection = connectionId => Users.remove({
  connectionId,
});

/**
 * Find or fail.
 *
 * @param {object} selector
 */
export const findOrFail = selector => new Promise((resolve, reject) => {
  const user = Users.findOne(selector);

  if (! user) {
    reject();
  } else {
    resolve(user);
  }
});
