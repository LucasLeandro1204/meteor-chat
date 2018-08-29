import Meetings from './';
import { resolve } from 'url';

/**
 * Find or create meetings by slug and returns the id.
 *
 * @param {string} slug Meeting slug.
 * @returns {Promise} Resolves meeting id.
 */
export const findOrCreateBySlug = (slug) => new Promise((resolve, reject) => {
  const meeting = Meetings.findOne({
    slug,
  });

  if (meeting) {
    return resolve(meeting._id);
  }

  Meetings.insert({
    slug,
  }, (error, id) => error ? reject() : resolve(id));
});
