const db = require('./db');

async function insertServices() {
  const database = await db.connect();
  try {
    const result = await database.collection('services').insertMany([
      { name: 'Web Development', description: 'We offer custom web development solutions tailored to your business needs.', price: 50 },
      { name: 'Database Design and Development', description: 'We design and develop efficient and scalable databases that meet your business requirements.', price: 75 },
      { name: 'Maintenance', description: 'We provide ongoing maintenance and support for your web applications and databases.', price: 25 },
    ]);
    console.log(`${result.insertedCount} services inserted`);
  } catch (err) {
    console.error('Failed to insert services', err);
  } finally {
    await database.close();
  }
}

insertServices();