const Experience = require('./models/experience');

const experiences = [
  { title: 'Experience 1', description: 'Description 1', date: new Date() },
  { title: 'Experience 2', description: 'Description 2', date: new Date() },
  { title: 'Experience 3', description: 'Description 3', date: new Date() },
  { title: 'Experience 4', description: 'Description 4', date: new Date() },
];

Experience.insertMany(experiences)
  .then((savedExperiences) => {
    console.log(`Saved ${savedExperiences.length} experiences to the database`);
    mongoose.disconnect();
  })
  .catch((error) => {
    console.error(error);
    mongoose.disconnect();
  });