import Messages from './';
import { Meteor } from 'meteor/meteor';
import {
  create
} from './methods';
import {
  findOrFail as getUser
} from '/imports/api/users/methods';

Meteor.methods({

  /**
   * Create a new message.
   *
   * @param {string} body
   * @param {string} meetingId
   */
  async message (body, meetingId) {
    try {
      const user = getUser({
        meetingId,
        connectionId: this.connection.id,
      });

      await create(body, user.name, meetingId);
    } catch (e) {
      //
    }
  },
});

Meteor.publish('messages', meetingId => Messages.find({
  meetingId,
}));
