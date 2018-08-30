import { Mongo } from 'meteor/mongo';

class MessagesCollection extends Mongo.Collection {
  insert (doc, callback) {
    doc.createdAt = doc.createdAt || new Date();

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
