import './chat.html';
import '../components/chat-messages';
import '../components/chat-users-list';
import { Meteor } from 'meteor/meteor';
import Users from '/imports/api/users';
import Messages from '/imports/api/messages';

Template.Chat.onCreated(function () {
  this.autorun(() => {
    Meteor.call('meeting', FlowRouter.getParam('slug'), Session.get('username'), function (error, meetingId) {
      if (error || ! meetingId) {
        // meeting locked?
        return;
      }

      Session.set('joinedAt', Date.now());
      Session.set('meetingId', meetingId);

      Meteor.subscribe('users', meetingId);
      Meteor.subscribe('messages', meetingId);
    });
  });
});

Template.Chat.helpers({
  users () {
    return Users.find({
      meetingId: Session.get('meetingId'),
    }).fetch();
  },

  messages () {
    return Messages.find({
      meetingId: Session.get('meetingId'),
    }).fetch();
  },

  ready () {
    return this.subscriptionsReady();
  },

  createCallback: () => value => Meteor.call('message', value, Session.get('meetingId')),

  leaveCallback: () => () => FlowRouter.go('/' + FlowRouter.getParam('slug') + '/leave'),
});
