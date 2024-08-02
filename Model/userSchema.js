const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id: { type: Number, unique: true, required: true },
    name: { type: String, default: '' },
    author: { type: String, required: true },
    subjectCode: { type: Number, unique: true, required: true },
    available: { type: Boolean, default: false }
});

const authorSchema = new mongoose.Schema({
    name: { type: String, default: '' }
});

const sectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, default: '' }
});

const subsectionSchema = new mongoose.Schema({
    sectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Section', required: true },
    name: { type: String, required: true },
    description: { type: String, default: '' }
});

const publicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    year: { type: Number, required: true }
});

const subjectSchema = new mongoose.Schema({
    code: { type: Number, unique: true, required: true },
    name: { type: String, required: true }
});

const issueSchema = new mongoose.Schema({
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    issueDate: { type: Date, required: true },
    returnDate: { type: Date, required: true }
});

module.exports = {
    Book: mongoose.model('Book', bookSchema),
    Author: mongoose.model('Author', authorSchema),
    Section: mongoose.model('Section', sectionSchema),
    Subsection: mongoose.model('Subsection', subsectionSchema),
    Publication: mongoose.model('Publication', publicationSchema),
    Subject: mongoose.model('Subject', subjectSchema),
    Issue: mongoose.model('Issue', issueSchema)
};
