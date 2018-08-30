import './chat-messages.html';

Template.ChatMessages.events({
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
