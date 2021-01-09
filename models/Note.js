const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    user_id: {
        type: String,
        required : true
    },

    title : {
        type: String,
        required : true
    },
    description :{
        type: String,
        required : true
    },
    archive: {
        type: Boolean,
        required : true
    }, 
});

module.exports= mongoose.model('Note',NoteSchema)