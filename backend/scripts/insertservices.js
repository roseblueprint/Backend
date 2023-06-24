const connectToDatabase = require('../models/db');

const insertService = async () => {
  const services = await connectToDatabase();

  const service1 = {
    name: 'Web Development',
    description: 'We can develop custom web applications for your business needs',
    price: 250,
    duration: '1-2 months',
    available: true
  };
  const service2 = {
    name: 'Database Design and davelopment',
    description: 'I can design and develop the database for your business needs',
    price: 150,
    duration: '1-2 months',
    available: true
  };
  const service3 = {
    name: 'Maintenance',
    description: 'I can maintain all your business needs',
    price: 250,
    duration: '1-2 months',
    available: true
  };

  try {
    const result = await services.insertMany([service1, service2, service3]);
    console.log('Services inserted:', result.insertedCount);
  } catch (error) {
    console.error('Error inserting services:', error);
  }

  services.client.close();
};

insertService();