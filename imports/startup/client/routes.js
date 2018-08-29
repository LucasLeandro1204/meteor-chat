import '../../ui/pages/chat';
import '../../ui/layouts/app';
import '../../ui/pages/leave';
import '../../ui/pages/create';

BlazeLayout.setRoot('body');

FlowRouter.route('/', {
  name: 'index',
  action () {
    BlazeLayout.render('App', {
      main: 'Create',
    });
  },
});

FlowRouter.route('/chat', {
  name: 'chat',
  action () {
    BlazeLayout.render('App', {
      main: 'Chat',
    });
  },
});

FlowRouter.route('/chat/leave', {
  name: 'leave',
  action () {
    BlazeLayout.render('App', {
      main: 'Leave',
    });
  },
});