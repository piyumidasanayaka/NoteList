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
	"userId":"1F",
	"title": "Hi, 1F ",
	"description": "This is 1F's note",
	"archive": false
  }
  {}
  ```
  2. * Get all notes of each user
  ```
  localhost:3000/notes/[userId]
  ```
   * Sample response
   ```
   ```
  3. * Get a note by using noteId and userId
  ```
  localhost:3000/notes/[noteId]?[userId]
  ```
  * Sample response
   ```
   ```
  4. Get all archived notes of a user
  ```
  localhost:3000/notes/[userId]&[archive]
  ```
  
  5. Get all archived notes of a user
  ```
  localhost:3000/notes/[userId]&[archive]
  
  ```
  6. Update a note of a user
  ```
  localhost:3000/notes/[noteId]?[userId]
  ```
  
  
  
  
  
  7. delete a note of a user
  ```
  localhost:3000/notes/[noteId]?[userId]
  ```
  
  8. Archive a note 
  ```
  localhost:3000/notes/[userId]&[archive]
  ```
  
  9. Unarchive a notemon
  ```
  localhost:3000/notes/[userId]&[archive]
  ```
  
  
   
  
  
  
 
 
 
