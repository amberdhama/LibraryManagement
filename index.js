const express = require('express');
const connectDB = require('./middleware/DB');  
const userController = require('./Controller/userController');  

const app = express();
app.use(express.json());

connectDB().catch(console.dir);

app.post("/addBook", userController.bookEntry);
app.get("/getBook/:id", userController.getBook);
app.post("/updateBook/:id", userController.updateBook);
app.post("/deleteBook/:id", userController.deleteBook);

app.post("/addAuthor", userController.authorEntry);
app.get("/getAuthor/:id", userController.getAuthor);
app.post("/updateAuthor/:id", userController.updateAuthor);
app.post("/deleteAuthor/:id", userController.deleteAuthor);

app.post("/addPublication", userController.publicationEntry);
app.get("/getPublication/:id", userController.getPublication);
app.post("/updatePublication/:id", userController.updatePublication);
app.post("/deletePublication/:id", userController.deletePublication);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
