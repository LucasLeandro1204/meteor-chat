import './leave.html';
import Moment from 'moment';
import { Meteor } from 'meteor/meteor';

Template.Leave.onCreated(function () {
  if (! Session.get('meetingId')) {
    FlowRouter.redirect('/');
  } else {
    Meteor.disconnect();
  }
});

Template.Leave.helpers({
  time () {
    return Moment(Session.get('joinedAt')).fromNow(true);
  },
});
