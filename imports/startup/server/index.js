import '/imports/api/users/server';
import '/imports/api/meetings/server';
import '/imports/api/messages/server';

import Users from '/imports/api/meetings';
import Meetings from '/imports/api/meetings';
import Messages from '/imports/api/meetings';

Meteor.startup(() => {
  Users.remove({});
  Meetings.remove({});
  Messages.remove({});
});
