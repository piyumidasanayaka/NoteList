const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    
    userId: {
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

module.exports= mongoose.model('Note', NoteSchema);