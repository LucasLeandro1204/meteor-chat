import Users from './';
import { Meteor } from 'meteor/meteor';

Meteor.publish('users', meetingId => Users.find({
  meetingId,
}));
