import { Mongo } from 'meteor/mongo';

class MessagesCollection extends Mongo.Collection {
  insert (doc, callback) {
    doc.createdAt = doc.createdAt || Date.now();

    return super.insert(doc, callback);
  }
};

const collection = new MessagesCollection('messages');

collection.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

export default collection;
