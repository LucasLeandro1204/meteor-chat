import './chat.html';
import '../components/chat-messages';
import '../components/chat-users-list';
import { Meteor } from 'meteor/meteor';
import Users from '/imports/api/users';

Template.Chat.onCreated(function () {
  this.autorun(() => {
    Meteor.call('meeting', FlowRouter.getParam('slug'), FlowRouter.getQueryParam('username'), function (error, meetingId) {
      if (error || ! meetingId) {
        // alert, retry?...
        return;
      }

      Meteor.subscribe('users', meetingId);
    });
  });
});

Template.Chat.helpers({
  users () {
    return Users.find();
  },

  ready () {
    return this.subscriptionsReady();
  },
});
