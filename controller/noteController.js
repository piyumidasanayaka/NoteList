const mongoose = require("mongoose");
const Note= require('../models/Note');

exports.get_notes= (req,res,next) => {
    const user_id= req.query.user_id;
    var archived= req.query.archive;

    if (archived === undefined || archived === null) {

        Note.find({ user_id: user_id })
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
             Note.find({ user_id: user_id, archive:boolValue })
                .exec()
                .then(notes => {
                    res.status(200).json(notes);
                 })
                .catch(err => {
                    
                res.status(500).json({ error: err });
              });
        }
        else if(boolValue== false){
             Note.find({ user_id: user_id, archive:boolValue })
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


exports.get_noteById=(req,res,next) => {
    const user_id = req.query.user_id;
    const id = req.params.noteId;

    Note.findById(id)
        .exec()
        .then(note => {
            if (!note || note.user_id !== user_id) {
                 res.json({ message: "No valid entry found for note ID" });
            } else {
                 res.status(200).json(note);
            }
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}


exports.add_note= (req, res, next)=>{

    let note = new Note({
        user_id:  req.body.user_id,
        title: req.body.title,
        description : req.body.description,
        archive: req.body.archive
    });

    note.save()
    .then(result => {
        res.status(200).json({_id:id, message:'Note Added Successfully.' });
    })
    .catch(err => {
      res.status(500).json({error: err});
    });
}


exports.delete_note=  (req,res,next) => {
    const id = req.params.noteId;
    const user_id = req.query.user_id;

    Note.findById(id)
      .exec()
      .then(note => {
        if (!note || note.user_id !== user_id) {
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


exports.update_note=(req, res, next) => {
    const id = req.params.noteId;
    const user_id = req.query.user_id;
    const updateOps=req.body;

    Note.findById(id)
      .exec()
      .then(note => {
            if (!note || note.user_id !== user_id) {
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


//Archived a note
exports.archive_n_unarchive=(req, res, next) => {
    const id = req.params.noteId;
    const user_id = req.query.user_id;
    const archived = req.query.archive;
    if(archived != undefined || archived != null) {
        var boolValue = archived.toLowerCase() == 'true' ? true : false; 

         Note.find({ user_id: user_id, id:id })
        .exec()
         .then(note =>{
            if(note.archive == false){
                 if(boolValue == true){
                  note.archive = true;

                        note.save
                            .then(result => {
                                // console.log(result);
                                 res.status(200).json(result);
                                 })
                                 .catch(err => {
                                  console.log(err);
                                 res.status(500).json({error: err});
                                 })
                        }else{
                            res.status(500).json({message: "Note is already unarchived"});
                        }
                    }else{
                        if(boolValue){
                            res.status(500).json({message:"Note is already archived"});  
                        }else{
                           // console.log( note.archive);
                           note.archive = false;
                           note.Update({$set:note})

                                .then(result => {
                               // console.log(result);
                                res.status(200).json(result);
                                })
                                .catch(err => {
                                 console.log(err);
                                res.status(500).json({error: err});
                                })
                     }
                    }
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({ error: err });
                 });
        
                
                 
    

        // }
        // if(archive==false && note.archive==true){
        //     note.archive = false;
        //     note.save()
        //     .then(result => {
        //    // console.log(result);
        //     res.status(200).json(result);
        //     })
        //     .catch(err => {
        //      console.log(err);
        //     res.status(500).json({error: err});
        //     });
        // }
        // if(archive==true && note.archive==true ){
        //     res.status(500).json({error: "Note is already archived"});
        // }
        // if(archive==false && note.archive==false ){
        //     res.status(500).json({error: "Note is already unarchived"});
    }  
   
} 
