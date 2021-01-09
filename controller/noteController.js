const mongoose = require("mongoose");
const Note= require('../models/Note');

exports.getNotes= (req, res, next) => {
    const userId= req.query.userId;
    var archived= req.query.archive;

    if (archived === undefined || archived === null) {

        Note.find({ userId: userId })
            .exec()
            .then(notes => {
                 res.status(200).json(notes);
                 })
            .catch(err => {
                res.status(500).json({ error: err });
            });
    }else{
        var boolValue = archived.toLowerCase() == 'true' ? true : false; 
        
        if(boolValue == true){
             Note.find({ userId: userId, archive:boolValue })
                .exec()
                .then(notes => {
                    res.status(200).json(notes);
                 })
                .catch(err => {
                    
                res.status(500).json({ error: err });
              });
        }
        else if(boolValue== false){
             Note.find({ userId: userId, archive:boolValue })
                .exec()
                .then(notes => {
                    res.status(200).json(notes);
                 })
                .catch(err => {
                res.status(500).json({ error: err });
                });
        }
    }
}


exports.getNoteById=(req,res,next) => {
    const userId = req.query.userId;
    const id = req.params.noteId;

    Note.findById(id)
        .exec()
        .then(note => {
            if (!note || note.userId !== userId) {
                 res.json({ message: "No valid entry found for note ID" });
            } else {
                 res.status(200).json(note);
            }
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}


exports.addNote= (req, res, next)=>{

    let note = new Note({
        userId:  req.body.userId,
        title: req.body.title,
        description : req.body.description,
        archive: req.body.archive
    });
    console.log(note)
    note.save()
    .then(result => {
        res.status(200).json({ note, message:'Note Added Successfully.' });
    })
    .catch(err => {
      res.status(500).json({error: err});
    });
}


exports.deleteNote=  (req,res,next) => {
    const id = req.params.noteId;
    const userId = req.query.userId;

    Note.findById(id)
      .exec()
      .then(note => {
        if (!note || note.userId !== userId) {
          res.json({ message: "No valid entry found for note ID" });
        } else {
            note.delete()
            .then
                res.status(200).json({_id:id, message:'Note Deleted' });
            }
      })
      .catch(err => {
        res.status(500).json({error: err});
      });
}


exports.updateNote=(req, res, next) => {
    const id = req.params.noteId;
    const userId = req.query.userId;
    const updateOps = req.body;

    Note.findById(id)
      .exec()
      .then(note => {
            if (!note || note.userId !== userId) {
                 res.json({ message: "No valid entry found for note ID" });
            } else {
                note.update( { $set: updateOps })
                 .exec()
                .then(result => {
                     res.status(200).json(result);
                })
            }   
        })
      .catch(err => {res.status(500).json({error: err});
        });
}  


exports.archiveUnarchive=(req, res, next) => {
    const id = req.params.noteId;
    const userId = req.query.userId;
    const archived = req.query.archive;

    if(archived !== undefined || archived !== null) {
        var boolValue = archived.toLowerCase() == 'true' ? true : false; 

         Note.findById({ _id:id })
        .exec()
         .then(note =>{

            if (!note || note.userId !== userId) {
                res.json({ message: "No valid entry found for note ID" });
           } else {
                if(note.archive == false){
                    if(boolValue == true){
                        note.update({_id:id, $set:{archive:boolValue}})
                            .then(result => {
                                 res.status(200).json(result);
                                 })
                                 .catch(err => {
                                 res.status(500).json({error: err});
                                 })
                        }else{
                            res.status(500).json({message: "Note is already unarchived"});
                        }
                    }else{
                        if(boolValue != true){
                            note.update({_id:id, $set:{archive:boolValue}})
                            .then(result => {
                                 res.status(200).json(result);
                                 })
                                 .catch(err => {
                                 res.status(500).json({error: err});
                                 })
                        }else{
                            res.status(500).json({message:"Note is already archived"}); 
                        }
                    }
                }
                })
                .catch(err => {
                     res.status(500).json({ error: err });
            });
           
         res.status(500).json({error: "Note is already unarchived"});
    }   
} 
