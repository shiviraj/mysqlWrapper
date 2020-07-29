const request = require('supertest');
const app = require('../src/router');
const { setupDatabase, cleanupDatabase } = require('./fixture/db');

describe('function under test', () => {
  beforeEach(setupDatabase);
  afterEach(cleanupDatabase);
  it('test router', async () => {
    await request(app).post('/addUser/shiviraj').expect(200);
  });
  it('test router', async () => {
    await request(app).get('/user/1').expect(200);
  });
});
