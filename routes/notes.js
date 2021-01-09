const express = require('express');
const router= express.Router();
const Note= require('../models/Note');

const NoteController = require('../controller/noteController');

router.post("/",NoteController.addNote);

/* get all notes of a user
   get all archived notes of a user
   get all notArchived notes of a user
*/
router.get("/", NoteController.getNotes);

// get a note by using id of a user
router.get("/:noteId", NoteController.getNoteById);

router.put("/:noteId", NoteController.updateNote);

 /* archive a note
    unarchive a note
  */
router.patch("/:noteId", NoteController.archiveUnarchive);

router.delete("/:noteId", NoteController.deleteNote);

    
module.exports = router; 
