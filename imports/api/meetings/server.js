import Meetings from './';
import { Meteor } from 'meteor/meteor';
import {
  // isUserAllowed,
  findOrCreateBySlug as getMeeting
} from './methods';
import {
//   deleteByConnection,
//   findOrFailByConnection,
  updateOrCreate as addUser
} from '/imports/api/users/methods';

Meteor.methods({
  /**
   * Find or create the meeting.
   * User should already be "registered". If not for some reason, create it.
   *
   * @returns {?string}
   */
  async meeting (slug, username) {
    try {
      const id = await getMeeting(slug);

      /**
       * (Maybe) user can join another meeting having the same connection.
       */
      await addUser({
        meetingId: id,
        connectionId: this.connection.id,
      }, {
        username,
      });

      return id;
    } catch (e) {
      //
    }

    return null;
  },
});

Meteor.onConnection(({ id }) => {
  // connection.onClose(async () => {
  //   await deleteByConnection(id);

  // });
});
