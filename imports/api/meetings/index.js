import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class MeetingsCollection extends Mongo.Collection {
  insert (doc, callback) {
    doc.createdAt = doc.createdAt || new Date();

    return super.insert(doc, callback);
  }

  update (selector, modifier) {
    const result = super.update(selector, modifier);
    incompleteCountDenormalizer.afterUpdateTodo(selector, modifier);
    return result;
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

collection.schema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  text: {
    type: String,
    max: 100,
    optional: true,
  },
  // createdAt: {
  //   type: Date,
  //   denyUpdate: true,
  // },
});

// collection.attachSchema(collection.schema);

export default collection;
