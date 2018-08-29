import Meetings from './';
import { Meteor } from 'meteor/meteor';
import { findOrCreateBySlug } from './methods';

/**
 * Find or create the meeting.
 * Create the user with
 */
Meteor.publish('meeting', async (slug, username = 'Anonymous') => {
  try {
    const [id, user] = await Promise.all([
      findOrCreateBySlug(slug),
      createUser(username, this.connection.id),
    ]);
    const meeting = Meetings.findOne(id);

    if (! meeting.allow(user)) {
      throw new Meteor.Error('user.not.allowed', 'Usuário não ')
    }
  } catch (e) {
    //
  }

  return this.ready();
});
