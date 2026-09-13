const mongoose = require('mongoose');
require('dotenv').config();

const Grade = require('../models/Grade');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const Lesson = require('../models/Lesson');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('MongoDB connected for seeding');

    // Clear existing learning content
    await Lesson.deleteMany({});
    await Topic.deleteMany({});
    await Subject.deleteMany({});
    await Grade.deleteMany({});

    // Create Grade
    const grade6 = await Grade.create({
      name: 'Grade 6'
    });

    // Create Subjects
    const mathematics = await Subject.create({
      name: 'Mathematics',
      grade: grade6._id
    });

    const science = await Subject.create({
      name: 'Science',
      grade: grade6._id
    });

    // Create Topics
    const algebra = await Topic.create({
      name: 'Algebra',
      subject: mathematics._id
    });

    const fractions = await Topic.create({
      name: 'Fractions',
      subject: mathematics._id
    });

    const matter = await Topic.create({
      name: 'Matter',
      subject: science._id
    });

    // Create Lessons
    await Lesson.create([
      {
        title: 'Introduction to Algebra',
        content: 'Learn the basic concepts of algebra.',
        topic: algebra._id
      },
      {
        title: 'Simple Equations',
        content: 'Learn how to solve simple equations.',
        topic: algebra._id
      },
      {
        title: 'Understanding Fractions',
        content: 'Learn the basics of fractions.',
        topic: fractions._id
      },
      {
        title: 'States of Matter',
        content: 'Learn about solids, liquids, and gases.',
        topic: matter._id
      }
    ]);

    console.log('Seed data inserted successfully');

  } catch (error) {
    console.error('Seeding error:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
};

seedData();