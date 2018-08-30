import './chat-message';
import Moment from 'moment';
import './chat-messages.html';

const scrollBottom = () => {
  const messages = document.querySelector('.messages');
  messages.scrollTop = messages.scrollHeight;
};

Template.ChatMessage.onRendered(function () {
  this.autorun(() => scrollBottom());
});

Template.ChatMessageLine.onRendered(function () {
  this.autorun(() => scrollBottom());
});

Template.ChatMessages.helpers({
  date (date) {
    return Moment(date).calendar();
  },

  grouped () {
    return this.messages.reduce((grouped, message, index, self) => {
      const last = grouped[grouped.length - 1];

      if (! last || last.userId != message.userId) {
        grouped.push({
          userId: message.userId,
          username: message.username,
          createdAt: message.createdAt,
          messages: [
            message.body,
          ],
        });
      } else {
        last.messages.push(message.body);
      }

      return grouped;
    }, []);
  },
});

Template.ChatMessages.events({
  'click .leave' (event) {
    this.onLeave();
  },

  'keydown textarea' (event) {
    if (event.key != 'Enter' || event.shiftKey) {
      return;
    }

    event.preventDefault();

    const value = event.target.value;

    this.onMessage(value);

    event.target.value = '';
  },
});
