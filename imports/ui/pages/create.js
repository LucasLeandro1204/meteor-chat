import './create.html';

Template.Create.events({
  submit (event) {
    event.preventDefault();

    Session.set('username', event.target.username.value);

    FlowRouter.go('/' + event.target.slug.value);
  },
});
