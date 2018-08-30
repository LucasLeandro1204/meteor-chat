import Moment from 'moment';
import './chat-messages.html';

Template.ChatMessages.helpers({
  date (date) {
    return Moment(date).calendar();
  },

  grouped () {
    return this.messages.reduce((grouped, message, index, self) => {
      const last = grouped[grouped.length - 1];

      if (! last || last[0].userId != message.userId) {
        grouped.push([
          message,
        ]);
      } else {
        last.push(message);
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
