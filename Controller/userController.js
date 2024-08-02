const mongoose = require('mongoose');
const { Book, Author, Section, Subsection, Publication, Subject, Issue } = require('../Model/userSchema');

const bookEntry = async (req, res) => {
    try {
        const bookData = req.body; 
        const newBook = new Book(bookData);
        await newBook.save();
        res.send('Book added successfully');
    } catch (error) {
        res.send(error);
    }
};

const getBook = async (req, res) => {
    try {
        const id = req.params.id; 
        const book = await Book.findById(id);
        if (!book) {
            return res.send("Book not found");
        }
        res.json(book);
    } catch (error) {
        res.send(error);
    }
};

const updateBook = async (req, res) => {
    try {
        const id = req.params.id;
        const inputData = req.body;
        const updatedBook = await Book.findByIdAndUpdate(id, inputData, { new: true });
        
        if (!updatedBook) {
            return res.send("Book not found");
        }
        
        res.send("Updated successfully");
    } catch (err) {
        res.json(err);
    }
};

const deleteBook = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.send("Book not found");
        }

        res.send("Book deleted");
    } catch (err) {
        res.send(err);
    }
};

const authorEntry = async (req, res) => {
    try {
        const authorData = req.body; 
        const newAuthor = new Author(authorData);
        await newAuthor.save();
        res.send('Author added successfully');
    } catch (error) {
        res.send(error);
    }
};

const getAuthor = async (req, res) => {
    try {
        const id = req.params.id; 
        const author = await Author.findById(id);
        if (!author) {
            return res.send("Author not found");
        }
        res.json(author);
    } catch (error) {
        res.send(error);
    }
};

const updateAuthor = async (req, res) => {
    try {
        const id = req.params.id;
        const inputData = req.body;
        const updatedAuthor = await Author.findByIdAndUpdate(id, inputData, { new: true });
        
        if (!updatedAuthor) {
            return res.send("Author not found");
        }
        
        res.send("Updated successfully");
    } catch (err) {
        res.json(err);
    }
};

const deleteAuthor = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedAuthor = await Author.findByIdAndDelete(id);

        if (!deletedAuthor) {
            return res.send("Author not found");
        }

        res.send("Author deleted");
    } catch (err) {
        res.send(err);
    }
};

const publicationEntry = async (req, res) => {
    try {
        const publicationData = req.body; 
        const newPublication = new Publication(publicationData);
        await newPublication.save();
        res.send('Publication added successfully');
    } catch (error) {
        res.send(error);
    }
};

const getPublication = async (req, res) => {
    try {
        const id = req.params.id; 
        const publication = await Publication.findById(id);
        if (!publication) {
            return res.send("Publication not found");
        }
        res.json(publication);
    } catch (error) {
        res.send(error);
    }
};

const updatePublication = async (req, res) => {
    try {
        const id = req.params.id;
        const inputData = req.body;
        const updatedPublication = await Publication.findByIdAndUpdate(id, inputData, { new: true });
        
        if (!updatedPublication) {
            return res.send("Publication not found");
        }
        
        res.send("Updated successfully");
    } catch (err) {
        res.json(err);
    }
};

const deletePublication = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedPublication = await Publication.findByIdAndDelete(id);

        if (!deletedPublication) {
            return res.send("Publication not found");
        }

        res.send("Publication deleted");
    } catch (err) {
        res.send(err);
    }
};

module.exports = { 
    bookEntry, getBook, updateBook, deleteBook, 
    authorEntry, getAuthor, updateAuthor, deleteAuthor, 
    publicationEntry, getPublication, updatePublication, deletePublication 
};
