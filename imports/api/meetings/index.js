import { Mongo } from 'meteor/mongo';

class MeetingsCollection extends Mongo.Collection {
  insert (doc, callback) {
    doc.createdAt = doc.createdAt || Date.now();

    return super.insert(doc, callback);
  }

  remove (selector) {
    // delete all messages and users related to meeting

    return super.remove(selector);
  }
};

const collection = new MeetingsCollection('meetings');

collection.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

export default collection;
