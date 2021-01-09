## NoteList - REST API backend application to manage personal notes

### Background Requirements
To run the NoteList in your computer, you should have the following dependencies in your computer.
1. node
2. npm
3. mongodb

If you  have not this dependencies in your computer you can install using official documentations.

### How to run the NoteList
 *  Make sure that mongodb is running

 *  Change db host and post if mongodb databasre's host, port and database name are deferent in app.js.

 *  Install npm packages
 ```
  npm install
 ```
 *  Run backend
 ```
 npm start
 ```
 *  Api will be served at 
 ```
 localhost:[port]/notes/
 ```
 ### Assumptions
 1. Each note has a specific author.
 2. Each note contains basic two feilds title and description.
 3. If the user wants to update archived note, user can do it.
 4. User can delete archieved note as well.
 5. When a user wants to archiev a note, he can do it at same time while creating the node.
 
 ### API postman samples
 
 Here I use port 3000.
 
 1. * Add a note
 ```
 localhost:3000/notes/
 ```
    *  Sample body
 ```
 {
	"userId":"1F",
	"title": "Hi, 1F ",
	"description": "This is 1F's note",
	"archive": false
	
 }
 ```
  *  Sample response body
  ```
  {
    "note": {
        "_id": "5ff9cc77f8f0a24b801c11be",
        "userId": "1F",
        "title": "Hi, 1F 11 ",
        "description": "This is 1F's note 11",
        "archive": false,
        "__v": 0
    },
    "message": "Note Added Successfully."
}
  ```
  2. * Get all notes of each user
  ```
  localhost:3000/notes/[userId]
  ```
   * Sample response
   ```
   {
        "_id": "5ff9a13dea7c411cfc57cafc",
        "userId": "1D",
        "title": "Title of 1D's 1st",
        "description": "description of 1D's 1st'",
        "archive": true,
        "__v": 0
    },
    {
        "_id": "5ff9a17fea7c411cfc57cafd",
        "userId": "1D",
        "title": "Title of 1D's 2nd",
        "description": "description 1D's 2nd",
        "archive": true,
        "__v": 0
    },
   ```
  3. * Get a note by using noteId and userId
  ```
  localhost:3000/notes/[noteId]?[userId]
  localhost:3000/notes/5ff9a33601c1b737c43a1909?userId=1D //example
  ```
  * Sample response
   ```
   {
    "_id": "5ff9a33601c1b737c43a1909",
    "userId": "1D",
    "title": "My first part 2 note",
    "description": " This is description",
    "archive": true,
    "__v": 0
}
   ```
  4. Get all archived notes of a user
  ```
  localhost:3000/notes/[userId]&[archive]
  localhost:3000/notes/?userId=1D&archive=true //example
  ```
   * Sample response
   ```
    {
        "_id": "5ff9a17fea7c411cfc57cafd",
        "userId": "1D",
        "title": "Title of 1D",
        "description": "description of 1D",
        "archive": true,
        "__v": 0
    }
   ```
  
  5. Get all unarchived notes of a user
  ```
  localhost:3000/notes/[userId]&[archive]
  localhost:3000/notes/?userId=2T&archive=false // example
  
  ```
  * Sample response
  ```
   {
        "_id": "5ff9a7d0ccf441410c96e3c8",
        "userId": "2T",
        "title": "Title of 2T",
        "description": "description of 2T",
        "archive": false,
        "__v": 0
    },
  ```
  6. Update a note of a user
  ```
  localhost:3000/notes/[noteId]?[userId]
  localhost:3000/notes/5ff9a372ccf441410c96e3c4?userId=1D //example
  ```
  before update
  ```
  _id:5ff9a372ccf441410c96e3c4
userId:"1D"
title:"My first part 2 note"
description:" This is description"
archive:true
__v:0
  ```
  Request Body
  ```
  {
	"userI": "1D",
	"title": "Updated 2nd Title of 1D",
	"description": "Updated 2nd description",
	"archive": false
  }
  ```
  * Sample response
  ```
  {
    "_id": "5ff9a372ccf441410c96e3c4",
    "message": "Note updated"
  }
  ```
 
  7. delete a note of a user
  ```
  localhost:3000/notes/[noteId]?[userId]
  localhost:3000/notes/5ff9a33e07eedd4b04f16e09?userId=1D // example
  ```
  * Sample response
  ```
  {
    "_id": "5ff9a33e07eedd4b04f16e09",
    "message": "Note Deleted"
  }
  ```
  
  8. Archive a note 
  ```
  localhost:3000/notes/[userId]&[archive]
  localhost:3000/notes/5ff9a50fccf441410c96e3c6?userId=1F&archive=true // example
  ```
  
  * Sample response
  ```
  {
    "_id": "5ff9a33e07eedd4b04f16e09",
    "message": "Note archived"
  }
  ```
  
  9. Unarchive a notemon
  ```
  localhost:3000/notes/[userId]&[archive]
  "localhost:3000/notes/5ff9a35fce5628444c636b4b?userId=1D&archive=false" //example

  ```
 
  * Sample response
  ```
  {
    "_id": "5ff9a33e07eedd4b04f16e09",
    "message": "Note unarchieved"
  }
  ```
  
  
   
  
  
  
 
 
 
