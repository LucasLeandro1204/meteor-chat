import '../../ui/layouts/app';
import '../../ui/pages/create';

FlowRouter.route('/', {
  name: 'index',
  action () {
    BlazeLayout.render('App', {
      main: 'Create',
    });
  },
});
