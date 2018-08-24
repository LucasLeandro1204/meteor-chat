import '../../ui/layouts/app';
import '../../ui/pages/home';

FlowRouter.route('/', {
  name: 'home',
  action () {
    BlazeLayout.render('App', {
      main: 'Home',
    });
  },
});
