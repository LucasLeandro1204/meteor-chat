import '../../ui/layouts/app';
import '../../ui/pages/create';
import '../../ui/pages/chat';

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
