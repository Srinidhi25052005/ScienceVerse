const mongoose = require('mongoose');
const Story = require('./models/Story');
const Quiz = require('./models/Quiz');
require('dotenv').config();

const stories = [
  {
    title: 'The Falling Apple',
    subject: 'Science',
    topic: 'Gravity',
    content: 'One day, Isaac Newton was sitting under an apple tree. Suddenly, an apple fell from the tree and hit his head. Newton wondered - why did the apple fall DOWN and not UP or sideways? This made him think deeply. He realized that the Earth was pulling the apple towards it. This invisible pulling force is called GRAVITY. Every object with mass pulls other objects towards it. The bigger the object, the stronger its gravity. That is why we stay on the ground and do not float away!',
    stageNumber: 1,
    isLocked: false,
    difficulty: 'easy',
    pointsRequired: 0
  },
  {
    title: 'The Racing Cars',
    subject: 'Science',
    topic: 'Motion',
    content: 'Imagine two cars on a race track. Car A is moving fast and Car B is moving slow. Both cars are in MOTION - which means they are changing their position over time. The speed of an object tells us how fast it is moving. When we also include the direction of movement, it becomes VELOCITY. For example - Car A is moving at 100 km/h towards the North. A change in velocity is called ACCELERATION. When you press the accelerator in a car, it speeds up - that is acceleration!',
    stageNumber: 2,
    isLocked: true,
    difficulty: 'easy',
    pointsRequired: 10
  },
  {
    title: 'The Green Kitchen',
    subject: 'Science',
    topic: 'Photosynthesis',
    content: 'Have you ever wondered how plants make their own food? Plants are like little green kitchens! They take in water from the soil through their roots. They take in carbon dioxide gas from the air through tiny holes in their leaves. They use sunlight as energy. Then inside the leaf, they mix all these ingredients and cook up GLUCOSE - their food! This process is called PHOTOSYNTHESIS. As a bonus, they release OXYGEN into the air - the same oxygen we breathe!',
    stageNumber: 3,
    isLocked: true,
    difficulty: 'medium',
    pointsRequired: 20
  },
  {
    title: 'The Water Journey',
    subject: 'Science',
    topic: 'Water Cycle',
    content: 'Water is always on a journey! When the sun heats up oceans, rivers and lakes, water turns into water vapour and rises up into the sky. This is called EVAPORATION. High up in the sky, the water vapour cools down and turns into tiny water droplets forming clouds. This is called CONDENSATION. When too many droplets collect in a cloud, they fall back down as rain or snow. This is called PRECIPITATION. The water collects back in oceans and rivers and the journey starts again!',
    stageNumber: 4,
    isLocked: true,
    difficulty: 'medium',
    pointsRequired: 30
  },
  {
    title: 'The Electric Circuit',
    subject: 'Science',
    topic: 'Electricity',
    content: 'Electricity powers everything around us - lights, phones, fans! But how does it work? Electricity is the flow of tiny particles called ELECTRONS through a wire. For electricity to flow, it needs a complete path called a CIRCUIT. A circuit needs a power source like a battery, wires to carry the current, and a device like a bulb. If the circuit is broken anywhere, electricity stops flowing and the bulb goes off. That is how a light switch works - it breaks or completes the circuit!',
    stageNumber: 5,
    isLocked: true,
    difficulty: 'hard',
    pointsRequired: 40
  }
];

const quizzes = [
  {
    question: 'What force made the apple fall from the tree?',
    options: ['Magnetic force', 'Gravity', 'Wind force', 'Electric force'],
    correctAnswer: 'Gravity',
    explanation: 'Gravity is the force that pulls all objects towards the Earth. That is why the apple fell down!'
  },
  {
    question: 'Who discovered gravity?',
    options: ['Albert Einstein', 'Galileo Galilei', 'Isaac Newton', 'Marie Curie'],
    correctAnswer: 'Isaac Newton',
    explanation: 'Isaac Newton discovered gravity when he saw an apple fall from a tree!'
  },
  {
    question: 'What is velocity?',
    options: ['Speed only', 'Direction only', 'Speed with direction', 'Weight of object'],
    correctAnswer: 'Speed with direction',
    explanation: 'Velocity includes both the speed of an object AND the direction it is moving!'
  },
  {
    question: 'What is a change in velocity called?',
    options: ['Speed', 'Acceleration', 'Motion', 'Force'],
    correctAnswer: 'Acceleration',
    explanation: 'Acceleration is the rate of change of velocity. When a car speeds up, it is accelerating!'
  },
  {
    question: 'What gas do plants take in for photosynthesis?',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    correctAnswer: 'Carbon Dioxide',
    explanation: 'Plants take in Carbon Dioxide from the air and use it along with water and sunlight to make food!'
  },
  {
    question: 'What do plants release during photosynthesis?',
    options: ['Carbon Dioxide', 'Nitrogen', 'Oxygen', 'Water vapour'],
    correctAnswer: 'Oxygen',
    explanation: 'Plants release Oxygen as a byproduct of photosynthesis - the same oxygen we breathe!'
  },
  {
    question: 'What is evaporation?',
    options: ['Water falling as rain', 'Water turning to vapour', 'Cloud formation', 'Water freezing'],
    correctAnswer: 'Water turning to vapour',
    explanation: 'Evaporation is when water is heated and turns into water vapour that rises into the sky!'
  },
  {
    question: 'What is precipitation?',
    options: ['Water evaporating', 'Cloud formation', 'Rain or snow falling', 'Water freezing'],
    correctAnswer: 'Rain or snow falling',
    explanation: 'Precipitation is when water falls back to Earth as rain, snow or hail!'
  },
  {
    question: 'What do electrons flow through in a circuit?',
    options: ['Air', 'Water', 'Wire', 'Glass'],
    correctAnswer: 'Wire',
    explanation: 'Electrons flow through metal wires to create electric current in a circuit!'
  },
  {
    question: 'What happens when a circuit is broken?',
    options: ['Electricity flows faster', 'Electricity stops flowing', 'Bulb glows brighter', 'Battery charges'],
    correctAnswer: 'Electricity stops flowing',
    explanation: 'Electricity needs a complete path to flow. If the circuit breaks anywhere, electricity stops!'
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected!');

    await Story.deleteMany({});
    await Quiz.deleteMany({});
    console.log('Old data cleared!');

    const savedStories = await Story.insertMany(stories);
    console.log('Stories added!');

    const quizData = [
      { ...quizzes[0], storyId: savedStories[0]._id },
      { ...quizzes[1], storyId: savedStories[0]._id },
      { ...quizzes[2], storyId: savedStories[1]._id },
      { ...quizzes[3], storyId: savedStories[1]._id },
      { ...quizzes[4], storyId: savedStories[2]._id },
      { ...quizzes[5], storyId: savedStories[2]._id },
      { ...quizzes[6], storyId: savedStories[3]._id },
      { ...quizzes[7], storyId: savedStories[3]._id },
      { ...quizzes[8], storyId: savedStories[4]._id },
      { ...quizzes[9], storyId: savedStories[4]._id },
    ];

    await Quiz.insertMany(quizData);
    console.log('Quizzes added!');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.log('Seed Error:', error.message);
    process.exit(1);
  }
};

seedDB();