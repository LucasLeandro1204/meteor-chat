import './chat.html';
import '../components/chat-messages';
import '../components/chat-users-list';
import { Meteor } from 'meteor/meteor';
import Users from '/imports/api/users';
import Messages from '/imports/api/messages';

Template.Chat.onCreated(function () {
  this.autorun(() => {
    Meteor.call('meeting', FlowRouter.getParam('slug'), FlowRouter.getQueryParam('username'), function (error, meetingId) {
      if (error || ! meetingId) {
        // meeting locked?
        return;
      }

      Meteor.subscribe('users', meetingId);
      Meteor.subscribe('messages', meetingId);
    });
  });
});

Template.Chat.helpers({
  users () {
    return Users.find();
  },

  messages () {
    return Messages.find();
  },

  ready () {
    return this.subscriptionsReady();
  },

  callback: () => value => console.log(value),
});
