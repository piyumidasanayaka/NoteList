const express = require('express');
const router= express.Router();
const Note= require('../models/Note');

const NoteController = require('../controller/noteController')

// add a new note
router.post("/add",NoteController.add_note)

/* get all notes of a user
   get all archived notes of a user
   get all notArchived notes of a user
*/
router.get("/notes",NoteController.get_notes)

// get a note by using id of a user
router.get("/notes/:noteId",NoteController.get_noteById)

// update a note
router.put("/update/:noteId",NoteController.update_note)

 /* archive a note
    unarchive a note
  */
router.patch("/archiveunarchive/:noteId",NoteController.archive_n_unarchive)

// delete a note
router.delete("/delete/:noteId",NoteController.delete_note)

    
module.exports = router; 
