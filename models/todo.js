var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    system: {
        type: String,
        required: 'Name cannot be blank!'
    },
    beds: {
      type: Number,
      required: 'not blank'
    },
    census: {
      type: Number,
      required: 'not blank'
    },
    outrev: {
      type: Number,
      required: 'not blank'
    },
    readRate: {
      type: Number,
      required: 'not blank'
    },
    // fte: {
    //   type: Number,
    //   required: 'not blank'
    // },
    // laborCost: {
    //   type: Number,
    //   required: 'not blank'
    // },
    // netRev: {
    //   type: Number,
    //   required: 'not blank'
    // },
    // cash: {
    //   type: Number,
    //   required: 'not blank'
    // },
    // ratio: {
    //   type: Number,
    //   required: 'not blank'
    // },
    // dToC: {
    //   type: Number,
    //   required: 'not blank'
    // },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
