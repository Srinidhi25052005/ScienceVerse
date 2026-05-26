const mongoose = require('mongoose');
const Story = require('./models/Story');
const Quiz = require('./models/Quiz');
require('dotenv').config();

const stories = [
  // SCIENCE - PHYSICS
  {
    title: 'The Falling Apple',
    subject: 'Science',
    topic: 'Gravity',
    content: 'One day, Isaac Newton was sitting under an apple tree. Suddenly, an apple fell and hit his head. Newton wondered - why did the apple fall DOWN and not UP? He realized the Earth was pulling the apple towards it. This invisible pulling force is called GRAVITY. Every object with mass pulls other objects towards it. The bigger the object, the stronger its gravity. That is why we stay on the ground and do not float away! The Moon stays in orbit around Earth because of gravity too!',
    stageNumber: 1,
    isLocked: false,
    difficulty: 'easy',
    pointsRequired: 0
  },
  {
    title: 'The Racing Cars',
    subject: 'Science',
    topic: 'Motion',
    content: 'Imagine two cars on a race track. Both cars are in MOTION - they are changing position over time. Speed tells us how fast an object moves. When we include direction, it becomes VELOCITY. For example - Car A moves at 100 km/h towards North. A change in velocity is called ACCELERATION. When you press the accelerator, the car speeds up - that is acceleration! When you press the brake, the car slows down - that is negative acceleration or DECELERATION!',
    stageNumber: 2,
    isLocked: true,
    difficulty: 'easy',
    pointsRequired: 10
  },
  {
    title: 'The Magic Mirror',
    subject: 'Science',
    topic: 'Light and Reflection',
    content: 'Have you ever looked in a mirror and seen yourself? That is REFLECTION of light! Light travels in straight lines. When light hits a smooth surface like a mirror, it bounces back. This is called REFLECTION. The angle at which light hits the mirror equals the angle at which it bounces back. This is the LAW OF REFLECTION. When light passes from one material to another like from air to water, it bends. This bending is called REFRACTION. That is why a straw in a glass of water looks bent!',
    stageNumber: 3,
    isLocked: true,
    difficulty: 'easy',
    pointsRequired: 20
  },
  {
    title: 'The Electric Circuit',
    subject: 'Science',
    topic: 'Electricity',
    content: 'Electricity powers everything around us! Electricity is the flow of tiny particles called ELECTRONS through a wire. For electricity to flow, it needs a complete path called a CIRCUIT. A circuit needs a power source like a battery, wires to carry the current, and a device like a bulb. If the circuit is broken anywhere, electricity stops and the bulb goes off. That is how a light switch works - it breaks or completes the circuit! There are two types of circuits - SERIES and PARALLEL.',
    stageNumber: 4,
    isLocked: true,
    difficulty: 'medium',
    pointsRequired: 30
  },
  {
    title: 'The Sound of Music',
    subject: 'Science',
    topic: 'Sound',
    content: 'When you pluck a guitar string, it VIBRATES - moves back and forth very fast. These vibrations create waves in the air called SOUND WAVES. Sound waves travel through air and reach your ears. Your ears detect these waves and your brain understands them as sound. Sound needs a medium to travel - it cannot travel in vacuum or empty space. That is why there is no sound in outer space! Sound travels faster in water than in air, and fastest through solids like metal!',
    stageNumber: 5,
    isLocked: true,
    difficulty: 'medium',
    pointsRequired: 40
  },
  {
    title: 'Hot and Cold',
    subject: 'Science',
    topic: 'Heat and Temperature',
    content: 'What is the difference between heat and temperature? TEMPERATURE measures how hot or cold something is. HEAT is the total energy of all the moving particles in an object. Heat always flows from hotter objects to cooler objects. This is why a hot cup of tea cools down in a cold room. There are three ways heat travels - CONDUCTION through solids like a metal spoon, CONVECTION through liquids and gases, and RADIATION through empty space like heat from the Sun reaching Earth!',
    stageNumber: 6,
    isLocked: true,
    difficulty: 'medium',
    pointsRequired: 50
  },
  {
    title: 'Push and Pull',
    subject: 'Science',
    topic: 'Force',
    content: 'A FORCE is a push or pull on an object. Forces can make objects start moving, stop moving, speed up, slow down or change direction. Newton gave us three laws of motion. First law - an object stays at rest or keeps moving unless a force acts on it. Second law - Force equals mass times acceleration (F=ma). Third law - for every action there is an equal and opposite reaction. That is why a rocket goes up when fire shoots down! Forces are measured in units called NEWTONS!',
    stageNumber: 7,
    isLocked: true,
    difficulty: 'medium',
    pointsRequired: 60
  },
  {
    title: 'Floating and Sinking',
    subject: 'Science',
    topic: 'Buoyancy',
    content: 'Why does a huge ship float but a small coin sinks? The answer is BUOYANCY! When an object is placed in water, the water pushes up on it. This upward force is called BUOYANT FORCE or UPTHRUST. Archimedes discovered that the buoyant force equals the weight of water displaced by the object. If the buoyant force is greater than the object\'s weight, it floats. If less, it sinks. A ship is hollow and displaces a lot of water, so the buoyant force is huge and it floats!',
    stageNumber: 8,
    isLocked: true,
    difficulty: 'hard',
    pointsRequired: 70
  },
  {
    title: 'The Magnet Story',
    subject: 'Science',
    topic: 'Magnetism',
    content: 'Magnets are fascinating objects that attract iron and steel! Every magnet has two poles - NORTH and SOUTH. Like poles repel each other - North pushes away North. Unlike poles attract - North pulls South. The area around a magnet where its force works is called the MAGNETIC FIELD. Earth itself is a giant magnet! That is why a compass needle always points North. ELECTROMAGNETS are made by passing electricity through a coil of wire. They are used in electric motors, speakers and MRI machines!',
    stageNumber: 9,
    isLocked: true,
    difficulty: 'hard',
    pointsRequired: 80
  },
  {
    title: 'The Simple Machines',
    subject: 'Science',
    topic: 'Simple Machines',
    content: 'Simple machines make our work easier! There are 6 types. A LEVER is a rod on a pivot - like a seesaw. A WHEEL AND AXLE is like a car wheel. A PULLEY is a wheel with a rope - used to lift heavy things. An INCLINED PLANE is a ramp - easier to push a box up a ramp than lift it. A WEDGE is two inclined planes together - like an axe. A SCREW is an inclined plane wrapped around a cylinder. All machines work by multiplying force but you always cover more distance!',
    stageNumber: 10,
    isLocked: true,
    difficulty: 'hard',
    pointsRequired: 90
  },

  // SCIENCE - BIOLOGY
  {
    title: 'The Green Kitchen',
    subject: 'Science',
    topic: 'Photosynthesis',
    content: 'Plants are like little green kitchens! They take water from soil through roots, carbon dioxide from air through tiny holes in leaves, and use sunlight as energy. Inside the leaf, they mix all these ingredients and make GLUCOSE - their food! This process is called PHOTOSYNTHESIS. As a bonus, they release OXYGEN into the air - the same oxygen we breathe! The green colour in leaves comes from a substance called CHLOROPHYLL which absorbs sunlight for photosynthesis!',
    stageNumber: 11,
    isLocked: true,
    difficulty: 'easy',
    pointsRequired: 100
  },
  {
    title: 'The Tiny Cell',
    subject: 'Science',
    topic: 'Cells',
    content: 'Every living thing is made of CELLS - the basic unit of life! A cell is like a tiny factory. The CELL MEMBRANE is the outer wall that controls what goes in and out. The NUCLEUS is the control centre that contains DNA and instructions for the cell. The CYTOPLASM is the jelly-like fluid inside. MITOCHONDRIA are the powerhouses that produce energy. Plant cells also have a CELL WALL for extra support and CHLOROPLASTS for photosynthesis. Your body has trillions of cells all working together!',
    stageNumber: 12,
    isLocked: true,
    difficulty: 'medium',
    pointsRequired: 110
  },
  {
    title: 'The Water Journey',
    subject: 'Science',
    topic: 'Water Cycle',
    content: 'Water is always on a journey! When the sun heats oceans and lakes, water turns into vapour and rises - this is EVAPORATION. High up, the vapour cools and forms clouds - this is CONDENSATION. When too many droplets collect, they fall as rain or snow - this is PRECIPITATION. The water collects back in oceans and the journey starts again! Plants also release water vapour through their leaves - this is called TRANSPIRATION. Together these processes keep our planet supplied with fresh water!',
    stageNumber: 13,
    isLocked: true,
    difficulty: 'easy',
    pointsRequired: 120
  },
  {
    title: 'Breathing In Breathing Out',
    subject: 'Science',
    topic: 'Respiration',
    content: 'Every cell in your body needs energy to work. Cells get this energy through RESPIRATION - breaking down glucose using oxygen to release energy. You breathe in oxygen through your lungs. The oxygen goes into your blood and travels to every cell. Cells use oxygen to break down glucose and release energy, carbon dioxide and water. You breathe out the carbon dioxide. This is called AEROBIC RESPIRATION. When you run fast and oxygen is not enough, your muscles do ANAEROBIC RESPIRATION which produces lactic acid causing muscle pain!',
    stageNumber: 14,
    isLocked: true,
    difficulty: 'medium',
    pointsRequired: 130
  },
  {
    title: 'The Food Web',
    subject: 'Science',
    topic: 'Ecosystems',
    content: 'In nature, all living things are connected through food! PRODUCERS like plants make their own food using sunlight. PRIMARY CONSUMERS like rabbits eat plants. SECONDARY CONSUMERS like foxes eat rabbits. TERTIARY CONSUMERS like eagles eat foxes. This chain of eating is called a FOOD CHAIN. When many food chains connect, they form a FOOD WEB. If one animal disappears, it affects the whole web. DECOMPOSERS like bacteria and fungi break down dead organisms and return nutrients to the soil for plants to use again!',
    stageNumber: 15,
    isLocked: true,
    difficulty: 'medium',
    pointsRequired: 140
  },

  // SCIENCE - CHEMISTRY
  {
    title: 'The Building Blocks',
    subject: 'Science',
    topic: 'Atoms and Molecules',
    content: 'Everything around you is made of incredibly tiny particles called ATOMS! Atoms are so small that millions fit on the tip of a pin. An atom has a NUCLEUS at the centre containing PROTONS (positive charge) and NEUTRONS (no charge). ELECTRONS (negative charge) orbit around the nucleus. When atoms join together, they form MOLECULES. Water is H2O - two hydrogen atoms and one oxygen atom joined together. The same atoms can make completely different things depending on how they are arranged!',
    stageNumber: 16,
    isLocked: true,
    difficulty: 'medium',
    pointsRequired: 150
  },
  {
    title: 'Mixing and Changing',
    subject: 'Science',
    topic: 'Chemical Reactions',
    content: 'When substances combine and change into completely new substances, a CHEMICAL REACTION happens! Signs of a chemical reaction include colour change, gas production, heat release or absorption, and formation of a precipitate. REACTANTS are the substances you start with. PRODUCTS are the new substances formed. For example, when iron rusts, iron and oxygen combine to form iron oxide - rust! Burning is a chemical reaction between fuel and oxygen. Cooking food also involves chemical reactions that cannot be reversed!',
    stageNumber: 17,
    isLocked: true,
    difficulty: 'hard',
    pointsRequired: 160
  },
  {
    title: 'Acids and Bases',
    subject: 'Science',
    topic: 'Acids and Bases',
    content: 'Have you tasted lemon juice? It is sour because it is an ACID! Acids have a pH less than 7. BASES feel slippery and have pH greater than 7. Pure water is NEUTRAL with pH 7. We use INDICATORS like litmus paper to test if something is acid or base. Red litmus turns blue in base. Blue litmus turns red in acid. When an acid and base mix, they NEUTRALISE each other and form salt and water. Your stomach has acid to digest food. Baking soda is a base used in cooking!',
    stageNumber: 18,
    isLocked: true,
    difficulty: 'hard',
    pointsRequired: 170
  },
  {
    title: 'States of Matter',
    subject: 'Science',
    topic: 'States of Matter',
    content: 'Everything around us exists in three states - SOLID, LIQUID and GAS! In a SOLID, particles are tightly packed and barely move - that is why solids have fixed shape. In a LIQUID, particles are close but can move around - liquids take the shape of their container. In a GAS, particles move very fast and spread out - gases fill any container. Adding heat makes particles move faster. Ice melts to water at 0°C - this is MELTING. Water boils to steam at 100°C - this is EVAPORATION. Cooling reverses these changes!',
    stageNumber: 19,
    isLocked: true,
    difficulty: 'easy',
    pointsRequired: 180
  },
  {
    title: 'The Periodic Table',
    subject: 'Science',
    topic: 'Elements',
    content: 'The PERIODIC TABLE is like a map of all the basic substances in the universe! There are 118 known ELEMENTS - pure substances made of only one type of atom. Each element has a symbol - H for Hydrogen, O for Oxygen, Fe for Iron, Au for Gold! Elements in the same column have similar properties. METALS like iron and copper conduct electricity and heat. NON-METALS like oxygen and carbon do not. METALLOIDS like silicon are in between. Everything in the universe including you is made of these 118 elements!',
    stageNumber: 20,
    isLocked: true,
    difficulty: 'hard',
    pointsRequired: 190
  },

  // MATHEMATICS
  {
    title: 'The Number Story',
    subject: 'Mathematics',
    topic: 'Number System',
    content: 'Numbers are everywhere! The numbers we use every day 0 to 9 are called DIGITS. NATURAL NUMBERS are counting numbers 1, 2, 3... WHOLE NUMBERS include 0 too. INTEGERS include negative numbers like -1, -2, -3. RATIONAL NUMBERS can be written as fractions like 1/2, 3/4. IRRATIONAL NUMBERS like π (pi) cannot be written as exact fractions. REAL NUMBERS include all of these! The number system we use is called DECIMAL or BASE 10 because we have 10 digits. Computers use BINARY or BASE 2 with only 0 and 1!',
    stageNumber: 21,
    isLocked: true,
    difficulty: 'easy',
    pointsRequired: 200
  },
  {
    title: 'The Shape World',
    subject: 'Mathematics',
    topic: 'Geometry',
    content: 'Geometry is the study of shapes and spaces! A POINT has no size - just a position. A LINE extends forever in both directions. A LINE SEGMENT has two endpoints. An ANGLE is formed when two rays meet at a point. A right angle is 90 degrees. TRIANGLES have 3 sides. QUADRILATERALS have 4 sides - squares, rectangles, parallelograms are all quadrilaterals. CIRCLES have all points equal distance from the centre - this distance is the RADIUS. PERIMETER is the total distance around a shape. AREA is the space inside a shape!',
    stageNumber: 22,
    isLocked: true,
    difficulty: 'easy',
    pointsRequired: 210
  },
  {
    title: 'The Fraction World',
    subject: 'Mathematics',
    topic: 'Fractions',
    content: 'When we divide something into equal parts, we use FRACTIONS! The number on top is the NUMERATOR - how many parts we have. The number on bottom is the DENOMINATOR - total equal parts. In 3/4, we have 3 parts out of 4 equal parts. PROPER fractions have numerator less than denominator like 2/3. IMPROPER fractions have numerator greater than denominator like 5/3. MIXED numbers combine whole numbers and fractions like 1 and 2/3. To add fractions, make denominators equal first. Fractions are everywhere - half a pizza, quarter of an hour!',
    stageNumber: 23,
    isLocked: true,
    difficulty: 'easy',
    pointsRequired: 220
  },
  {
    title: 'The Percentage Game',
    subject: 'Mathematics',
    topic: 'Percentages',
    content: 'PERCENT means "per hundred"! The symbol % means out of 100. So 50% means 50 out of 100 which is half. To convert fraction to percent, multiply by 100. So 3/4 = 75%. To find percentage of a number, multiply the number by the percentage and divide by 100. For example 20% of 50 = (20 × 50)/100 = 10. Percentages are used everywhere - exam scores, discounts in shops, interest on bank accounts, statistics in news! A 30% discount on Rs 200 item saves you Rs 60!',
    stageNumber: 24,
    isLocked: true,
    difficulty: 'medium',
    pointsRequired: 230
  },
  {
    title: 'The Algebra Adventure',
    subject: 'Mathematics',
    topic: 'Algebra',
    content: 'Algebra is like a puzzle where we find missing numbers! Instead of a blank box, we use letters like x, y, z called VARIABLES. An EXPRESSION is a combination of numbers and variables like 2x + 3. An EQUATION has an equals sign like 2x + 3 = 7. To solve this equation, we find what value of x makes it true. Subtract 3 from both sides: 2x = 4. Divide both sides by 2: x = 2. This is called solving the equation! Algebra is used in science, engineering, economics and computer programming!',
    stageNumber: 25,
    isLocked: true,
    difficulty: 'medium',
    pointsRequired: 240
  },
  {
    title: 'The Triangle Secret',
    subject: 'Mathematics',
    topic: 'Pythagoras Theorem',
    content: 'Pythagoras was a Greek mathematician who discovered an amazing secret about RIGHT TRIANGLES! In a right triangle, the longest side opposite the right angle is called the HYPOTENUSE. Pythagoras discovered that the square of the hypotenuse equals the sum of squares of the other two sides! If the sides are a, b and c where c is hypotenuse then a² + b² = c². So if a=3 and b=4, then c² = 9+16 = 25, so c = 5! This is used in construction, navigation, and even video games to calculate distances!',
    stageNumber: 26,
    isLocked: true,
    difficulty: 'medium',
    pointsRequired: 250
  },
  {
    title: 'The Statistics Story',
    subject: 'Mathematics',
    topic: 'Statistics',
    content: 'Statistics helps us make sense of data! MEAN is the average - add all values and divide by count. If scores are 10, 20, 30, the mean is 60/3 = 20. MEDIAN is the middle value when arranged in order. MODE is the most frequently occurring value. RANGE is the difference between highest and lowest values. We use BAR GRAPHS to compare categories. LINE GRAPHS to show change over time. PIE CHARTS to show parts of a whole. Statistics is used in medicine to test drugs, in cricket to analyse player performance, and in weather forecasting!',
    stageNumber: 27,
    isLocked: true,
    difficulty: 'medium',
    pointsRequired: 260
  },
  {
    title: 'The Ratio Race',
    subject: 'Mathematics',
    topic: 'Ratio and Proportion',
    content: 'A RATIO compares two quantities. If a class has 20 boys and 10 girls, the ratio of boys to girls is 20:10 which simplifies to 2:1. This means for every 2 boys there is 1 girl. PROPORTION says two ratios are equal. If 5 pencils cost Rs 10, then 10 pencils cost Rs 20 - this is DIRECT PROPORTION. As one increases, other increases. If 5 workers finish a job in 10 days, then 10 workers finish in 5 days - this is INVERSE PROPORTION. As one increases, other decreases. Ratios are used in cooking recipes, maps, and mixing medicines!',
    stageNumber: 28,
    isLocked: true,
    difficulty: 'medium',
    pointsRequired: 270
  },
  {
    title: 'The Probability Game',
    subject: 'Mathematics',
    topic: 'Probability',
    content: 'What are the chances of getting heads when you flip a coin? That is PROBABILITY! Probability measures how likely an event is to happen. It is always between 0 and 1. Probability 0 means impossible. Probability 1 means certain. For a fair coin, probability of heads = 1/2 = 0.5 = 50%.For a dice,probability of getting 6=1/6.To calculate probability,divide favourable outcomes by total outcomes.Probability is used in weather forecasting,insurance,games,and stock markets.Even doctors use probability to predict patient recovery!',
    stageNumber: 29,
    isLocked: true,
    difficulty: 'hard',
    pointsRequired: 280
  },
  {
    title: 'The Area and Volume Quest',
    subject: 'Mathematics',
    topic: 'Mensuration',
    content: 'MENSURATION is the measurement of geometric shapes! AREA measures the surface inside a 2D shape. Area of rectangle = length × width. Area of triangle = half × base × height. Area of circle = π × radius². PERIMETER is the total boundary length. VOLUME measures the space inside a 3D shape. Volume of cuboid = length × width × height. Volume of cylinder = π × radius² × height. Volume of sphere = 4/3 × π × radius³. These formulas are used in architecture to design buildings, in engineering to make products, and in everyday life to tile floors or fill swimming pools!',
    stageNumber: 30,
    isLocked: true,
    difficulty: 'hard',
    pointsRequired: 290
  },
  {
    title: 'The Speed Distance Time Triangle',
    subject: 'Mathematics',
    topic: 'Speed Distance Time',
    content: 'Speed, Distance and Time are connected by a simple formula! SPEED = DISTANCE divided by TIME. If you travel 100 km in 2 hours, your speed is 50 km/h. DISTANCE = SPEED × TIME. If you drive at 60 km/h for 3 hours, you cover 180 km. TIME = DISTANCE divided by SPEED. If you need to travel 120 km at 40 km/h, it takes 3 hours. AVERAGE SPEED = total distance divided by total time. These calculations are used by pilots, sailors, athletes and engineers. A train travelling at 200 km/h covers 1000 km in just 5 hours!',
    stageNumber: 31,
    isLocked: true,
    difficulty: 'medium',
    pointsRequired: 300
  },
  {
    title: 'The Interest Story',
    subject: 'Mathematics',
    topic: 'Simple and Compound Interest',
    content: 'When you put money in a bank, the bank pays you extra money called INTEREST! SIMPLE INTEREST is calculated on the original amount only. Formula: SI = (Principal × Rate × Time) / 100. If you deposit Rs 1000 at 5% for 2 years, SI = (1000×5×2)/100 = Rs 100. COMPOUND INTEREST is calculated on the amount plus previous interest. It grows much faster! Formula: A = P(1 + r/100)^t. That is why saving money early is so powerful - compound interest makes your money grow exponentially over time. Banks, loans and investments all use these calculations!',
    stageNumber: 32,
    isLocked: true,
    difficulty: 'hard',
    pointsRequired: 310
  }
];

const quizData = [
  { storyIndex: 0, question: 'What force made the apple fall from the tree?', options: ['Magnetic force', 'Gravity', 'Wind force', 'Electric force'], correctAnswer: 'Gravity', explanation: 'Gravity is the force that pulls all objects towards the Earth!' },
  { storyIndex: 0, question: 'Who discovered gravity?', options: ['Albert Einstein', 'Galileo', 'Isaac Newton', 'Marie Curie'], correctAnswer: 'Isaac Newton', explanation: 'Isaac Newton discovered gravity when he saw an apple fall from a tree!' },
  { storyIndex: 1, question: 'What is velocity?', options: ['Speed only', 'Direction only', 'Speed with direction', 'Weight'], correctAnswer: 'Speed with direction', explanation: 'Velocity includes both speed AND direction of movement!' },
  { storyIndex: 1, question: 'What is deceleration?', options: ['Speeding up', 'Moving sideways', 'Slowing down', 'Stopping completely'], correctAnswer: 'Slowing down', explanation: 'Deceleration is negative acceleration - when an object slows down!' },
  { storyIndex: 2, question: 'What is the bending of light called?', options: ['Reflection', 'Refraction', 'Diffraction', 'Absorption'], correctAnswer: 'Refraction', explanation: 'Refraction is the bending of light when it passes from one medium to another!' },
  { storyIndex: 2, question: 'What is reflection?', options: ['Light bending', 'Light bouncing back', 'Light absorbed', 'Light spreading'], correctAnswer: 'Light bouncing back', explanation: 'Reflection is when light bounces back from a surface like a mirror!' },
  { storyIndex: 3, question: 'What do electrons flow through in a circuit?', options: ['Air', 'Water', 'Wire', 'Glass'], correctAnswer: 'Wire', explanation: 'Electrons flow through metal wires to create electric current!' },
  { storyIndex: 3, question: 'What happens when a circuit is broken?', options: ['Faster flow', 'Electricity stops', 'Bulb glows brighter', 'Battery charges'], correctAnswer: 'Electricity stops', explanation: 'Electricity needs a complete path to flow. Break = no flow!' },
  { storyIndex: 4, question: 'What creates sound?', options: ['Light waves', 'Vibrations', 'Heat', 'Electricity'], correctAnswer: 'Vibrations', explanation: 'Sound is created by vibrations that travel as waves through air!' },
  { storyIndex: 4, question: 'Can sound travel in space?', options: ['Yes very fast', 'Yes slowly', 'No it cannot', 'Only sometimes'], correctAnswer: 'No it cannot', explanation: 'Sound needs a medium to travel. There is no air in space so no sound!' },
  { storyIndex: 5, question: 'What is the unit of temperature?', options: ['Newton', 'Celsius', 'Joule', 'Pascal'], correctAnswer: 'Celsius', explanation: 'Temperature is commonly measured in Celsius (°C) or Fahrenheit (°F)!' },
  { storyIndex: 5, question: 'How does heat travel through empty space?', options: ['Conduction', 'Convection', 'Radiation', 'Reflection'], correctAnswer: 'Radiation', explanation: 'Heat travels through empty space by radiation - like heat from the Sun!' },
  { storyIndex: 6, question: 'What is the formula for Force?', options: ['F = m/a', 'F = m+a', 'F = ma', 'F = m-a'], correctAnswer: 'F = ma', explanation: 'Newton\'s second law: Force equals mass times acceleration!' },
  { storyIndex: 6, question: 'What is the unit of Force?', options: ['Joule', 'Watt', 'Newton', 'Pascal'], correctAnswer: 'Newton', explanation: 'Force is measured in Newtons (N) named after Isaac Newton!' },
  { storyIndex: 7, question: 'What is the upward force in water called?', options: ['Gravity', 'Friction', 'Buoyant force', 'Tension'], correctAnswer: 'Buoyant force', explanation: 'Buoyant force or upthrust is the upward force exerted by water on objects!' },
  { storyIndex: 7, question: 'Who discovered buoyancy?', options: ['Newton', 'Einstein', 'Archimedes', 'Galileo'], correctAnswer: 'Archimedes', explanation: 'Archimedes discovered the principle of buoyancy and shouted Eureka!' },
  { storyIndex: 8, question: 'What are the two poles of a magnet?', options: ['East and West', 'North and South', 'Up and Down', 'Plus and Minus'], correctAnswer: 'North and South', explanation: 'Every magnet has a North pole and a South pole!' },
  { storyIndex: 8, question: 'What happens when two same poles meet?', options: ['They attract', 'They repel', 'Nothing happens', 'They combine'], correctAnswer: 'They repel', explanation: 'Like poles repel each other - North pushes away North!' },
  { storyIndex: 9, question: 'Which simple machine is a ramp?', options: ['Lever', 'Pulley', 'Inclined plane', 'Wedge'], correctAnswer: 'Inclined plane', explanation: 'A ramp is an inclined plane - it makes it easier to move objects upward!' },
  { storyIndex: 9, question: 'What simple machine is a seesaw?', options: ['Pulley', 'Lever', 'Screw', 'Wedge'], correctAnswer: 'Lever', explanation: 'A seesaw is a lever - a rod balanced on a pivot point!' },
  { storyIndex: 10, question: 'What gas do plants release during photosynthesis?', options: ['Carbon dioxide', 'Nitrogen', 'Oxygen', 'Hydrogen'], correctAnswer: 'Oxygen', explanation: 'Plants release oxygen as a byproduct of photosynthesis!' },
  { storyIndex: 10, question: 'What gives leaves their green colour?', options: ['Glucose', 'Chlorophyll', 'Water', 'Carbon dioxide'], correctAnswer: 'Chlorophyll', explanation: 'Chlorophyll is the green pigment that absorbs sunlight for photosynthesis!' },
  { storyIndex: 11, question: 'What is the control centre of a cell?', options: ['Membrane', 'Cytoplasm', 'Nucleus', 'Mitochondria'], correctAnswer: 'Nucleus', explanation: 'The nucleus is the control centre containing DNA and instructions!' },
  { storyIndex: 11, question: 'What are the powerhouses of the cell?', options: ['Nucleus', 'Membrane', 'Chloroplast', 'Mitochondria'], correctAnswer: 'Mitochondria', explanation: 'Mitochondria produce energy for the cell - they are the powerhouses!' },
  { storyIndex: 12, question: 'What is evaporation?', options: ['Water falling as rain', 'Water turning to vapour', 'Cloud formation', 'Water freezing'], correctAnswer: 'Water turning to vapour', explanation: 'Evaporation is when water is heated and turns into water vapour!' },
  { storyIndex: 12, question: 'What is precipitation?', options: ['Water evaporating', 'Cloud formation', 'Rain or snow falling', 'Water freezing'], correctAnswer: 'Rain or snow falling', explanation: 'Precipitation is water falling back to Earth as rain or snow!' },
  { storyIndex: 13, question: 'What gas is needed for aerobic respiration?', options: ['Carbon dioxide', 'Nitrogen', 'Oxygen', 'Hydrogen'], correctAnswer: 'Oxygen', explanation: 'Aerobic respiration uses oxygen to break down glucose and release energy!' },
  { storyIndex: 13, question: 'What causes muscle pain during intense exercise?', options: ['Glucose', 'Oxygen', 'Lactic acid', 'Carbon dioxide'], correctAnswer: 'Lactic acid', explanation: 'Anaerobic respiration produces lactic acid which causes muscle soreness!' },
  { storyIndex: 14, question: 'What are plants called in a food chain?', options: ['Consumers', 'Decomposers', 'Producers', 'Predators'], correctAnswer: 'Producers', explanation: 'Plants are producers - they make their own food using sunlight!' },
  { storyIndex: 14, question: 'What do decomposers do?', options: ['Hunt animals', 'Make food', 'Break down dead organisms', 'Eat plants'], correctAnswer: 'Break down dead organisms', explanation: 'Decomposers break down dead organisms and return nutrients to soil!' },
  { storyIndex: 15, question: 'What is the centre of an atom called?', options: ['Electron', 'Nucleus', 'Proton', 'Shell'], correctAnswer: 'Nucleus', explanation: 'The nucleus is at the centre of an atom containing protons and neutrons!' },
  { storyIndex: 15, question: 'What is the chemical formula of water?', options: ['HO', 'H2O', 'H3O', 'HO2'], correctAnswer: 'H2O', explanation: 'Water is H2O - two hydrogen atoms bonded to one oxygen atom!' },
  { storyIndex: 16, question: 'What are the starting materials in a reaction called?', options: ['Products', 'Reactants', 'Elements', 'Compounds'], correctAnswer: 'Reactants', explanation: 'Reactants are the substances you start with before the reaction!' },
  { storyIndex: 16, question: 'What is rust made of?', options: ['Iron only', 'Oxygen only', 'Iron oxide', 'Carbon dioxide'], correctAnswer: 'Iron oxide', explanation: 'Rust is iron oxide - formed when iron reacts with oxygen!' },
  { storyIndex: 17, question: 'What pH is an acid?', options: ['More than 7', 'Equal to 7', 'Less than 7', 'Equal to 14'], correctAnswer: 'Less than 7', explanation: 'Acids have pH less than 7. The lower the pH, the stronger the acid!' },
  { storyIndex: 17, question: 'What is formed when acid and base react?', options: ['More acid', 'More base', 'Salt and water', 'Gas only'], correctAnswer: 'Salt and water', explanation: 'When acid and base neutralise each other, they form salt and water!' },
  { storyIndex: 18, question: 'At what temperature does water boil?', options: ['50°C', '75°C', '100°C', '150°C'], correctAnswer: '100°C', explanation: 'Water boils and turns to steam at 100 degrees Celsius!' },
  { storyIndex: 18, question: 'In which state are particles most spread out?', options: ['Solid', 'Liquid', 'Gas', 'All same'], correctAnswer: 'Gas', explanation: 'In gases, particles move fast and spread out to fill any container!' },
  { storyIndex: 19, question: 'What is the symbol for Gold?', options: ['Go', 'Gd', 'Au', 'Gl'], correctAnswer: 'Au', explanation: 'Gold\'s symbol is Au from the Latin word Aurum meaning gold!' },
  { storyIndex: 19, question: 'How many elements are in the periodic table?', options: ['100', '108', '118', '128'], correctAnswer: '118', explanation: 'There are 118 known elements in the periodic table!' },
  { storyIndex: 20, question: 'Which number system includes negative numbers?', options: ['Natural numbers', 'Whole numbers', 'Integers', 'Digits'], correctAnswer: 'Integers', explanation: 'Integers include positive numbers, negative numbers and zero!' },
  { storyIndex: 20, question: 'What base does the computer use?', options: ['Base 10', 'Base 5', 'Base 2', 'Base 8'], correctAnswer: 'Base 2', explanation: 'Computers use binary (Base 2) with only 0 and 1!' },
  { storyIndex: 21, question: 'What is the area of a rectangle?', options: ['length + width', 'length × width', 'length - width', '2 × length'], correctAnswer: 'length × width', explanation: 'Area of rectangle = length × width. If 5m × 3m, area = 15 square metres!' },
  { storyIndex: 21, question: 'What is the perimeter?', options: ['Space inside shape', 'Total boundary length', 'Height of shape', 'Diagonal length'], correctAnswer: 'Total boundary length', explanation: 'Perimeter is the total distance around the outside of a shape!' },
  { storyIndex: 22, question: 'What is the denominator in a fraction?', options: ['Top number', 'Bottom number', 'Middle number', 'Whole number'], correctAnswer: 'Bottom number', explanation: 'The denominator is the bottom number showing total equal parts!' },
  { storyIndex: 22, question: 'What is 3/4 as a percentage?', options: ['34%', '43%', '75%', '25%'], correctAnswer: '75%', explanation: '3/4 × 100 = 75%. Three quarters equals seventy-five percent!' },
  { storyIndex: 23, question: 'What does percent mean?', options: ['Per thousand', 'Per hundred', 'Per ten', 'Per million'], correctAnswer: 'Per hundred', explanation: 'Percent means per hundred. 50% means 50 out of 100!' },
  { storyIndex: 23, question: 'What is 20% of 50?', options: ['5', '10', '15', '20'], correctAnswer: '10', explanation: '20% of 50 = (20 × 50)/100 = 1000/100 = 10!' },
  { storyIndex: 24, question: 'In 2x + 3 = 7, what is x?', options: ['1', '2', '3', '4'], correctAnswer: '2', explanation: '2x = 7-3 = 4, so x = 4/2 = 2!' },
  { storyIndex: 24, question: 'What is a variable in algebra?', options: ['A fixed number', 'A letter representing unknown', 'An equation', 'A formula'], correctAnswer: 'A letter representing unknown', explanation: 'Variables like x and y represent unknown numbers in algebra!' },
  { storyIndex: 25, question: 'In a right triangle with sides 3 and 4, what is the hypotenuse?', options: ['5', '6', '7', '8'], correctAnswer: '5', explanation: '3² + 4² = 9 + 16 = 25. Square root of 25 = 5!' },
  { storyIndex: 25, question: 'What is the longest side of a right triangle called?', options: ['Base', 'Height', 'Hypotenuse', 'Adjacent'], correctAnswer: 'Hypotenuse', explanation: 'The hypotenuse is the longest side opposite the right angle!' },
  { storyIndex: 26, question: 'What is the mean of 10, 20, 30?', options: ['10', '20', '30', '25'], correctAnswer: '20', explanation: 'Mean = (10+20+30)/3 = 60/3 = 20!' },
  { storyIndex: 26, question: 'What is the most frequently occurring value called?', options: ['Mean', 'Median', 'Mode', 'Range'], correctAnswer: 'Mode', explanation: 'Mode is the value that appears most often in a data set!' },
  { storyIndex: 27, question: 'If 5 pencils cost Rs 10, what do 10 pencils cost?', options: ['Rs 10', 'Rs 15', 'Rs 20', 'Rs 25'], correctAnswer: 'Rs 20', explanation: 'Direct proportion: double the pencils = double the cost = Rs 20!' },
  { storyIndex: 27, question: 'What type of proportion is more workers less time?', options: ['Direct', 'Inverse', 'Simple', 'Complex'], correctAnswer: 'Inverse', explanation: 'Inverse proportion: as workers increase, time decreases!' },
  { storyIndex: 28, question: 'What is the probability of getting heads in a coin flip?', options: ['1/4', '1/3', '1/2', '1/1'], correctAnswer: '1/2', explanation: 'A fair coin has 2 outcomes. Probability of heads = 1/2 = 50%!' },
  { storyIndex: 28, question: 'What is the probability of an impossible event?', options: ['1', '0.5', '0', '2'], correctAnswer: '0', explanation: 'Probability 0 means the event is impossible - it can never happen!' },
  { storyIndex: 29, question: 'What is the volume of a cuboid formula?', options: ['l+w+h', 'l×w+h', 'l×w×h', 'l+w×h'], correctAnswer: 'l×w×h', explanation: 'Volume of cuboid = length × width × height!' },
  { storyIndex: 29, question: 'What does area measure?', options: ['Boundary length', 'Space inside shape', 'Height of shape', 'Weight of shape'], correctAnswer: 'Space inside shape', explanation: 'Area measures the 2D space inside a shape!' },
  { storyIndex: 30, question: 'What is the formula for speed?', options: ['Speed = Distance + Time', 'Speed = Distance × Time', 'Speed = Distance / Time', 'Speed = Time / Distance'], correctAnswer: 'Speed = Distance / Time', explanation: 'Speed = Distance divided by Time. If 100km in 2hrs, speed = 50km/h!' },
  { storyIndex: 30, question: 'If speed is 60km/h and time is 3 hours, what is distance?', options: ['20km', '63km', '180km', '57km'], correctAnswer: '180km', explanation: 'Distance = Speed × Time = 60 × 3 = 180km!' },
  { storyIndex: 31, question: 'What is the formula for Simple Interest?', options: ['SI = PRT', 'SI = PRT/100', 'SI = P+R+T', 'SI = P/RT'], correctAnswer: 'SI = PRT/100', explanation: 'Simple Interest = (Principal × Rate × Time) / 100!' },
  { storyIndex: 31, question: 'Which grows faster - simple or compound interest?', options: ['Simple interest', 'Compound interest', 'Both same', 'Depends on bank'], correctAnswer: 'Compound interest', explanation: 'Compound interest grows faster because interest is added to principal each time!' },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected!');

    await Story.deleteMany({});
    await Quiz.deleteMany({});
    console.log('Old data cleared!');

    const savedStories = await Story.insertMany(stories);
    console.log(`${savedStories.length} Stories added!`);

    const finalQuizData = quizData.map(q => ({
      storyId: savedStories[q.storyIndex]._id,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation
    }));

    await Quiz.insertMany(finalQuizData);
    console.log(`${finalQuizData.length} Quiz questions added!`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.log('Seed Error:', error.message);
    process.exit(1);
  }
};

seedDB();