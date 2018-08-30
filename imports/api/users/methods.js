import Users from './';
import { resolve } from 'url';
import { resolveSrv } from 'dns';

/**
 * Update or Create user.
 *
 * @param {object} selector
 * @param {object} modifier
 */
export const updateOrCreate = (selector, modifier) => new Promise(async (resolve, reject) => {
  const user = await Users.findOne(selector);
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
 */
export const deleteByConnection = connectionId => Users.remove({
  connectionId,
});
