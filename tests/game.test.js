const request = require('supertest');
const app = require('../app');
require('dotenv').config()

describe('Games EndPoints', () =>{
  const token = process.env.TOKEN;

    describe('GET /games', () => {
    it('Should fetch all games', async () =>{
      const res = await request(app)
          .get('/games')
          .set('Authorization', `Bearer ${token}`)
        expect(res.statusCode).toEqual(200);
    })
    })

    describe('POST /games', () => {
    it('Should create a new game', async () => {
      const res = await request(app)
          .post('/games')
          .set('Authorization', `Bearer ${token}`)
          .send({"name": "Batman"})
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('name')
    })

        it('Throws error if POST error doesn\'t have correct field', async () => {
      const res = await request(app)
          .post('/games')
          .set('Authorization', `Bearer ${token}`)
          .send({"fakenam": "Mario"})
            expect(res.statusCode).toEqual(400)
        })

        it('Throws error if duplicate game', async () => {
      const res = await request(app)
          .post('/games')
          .set('Authorization', `Bearer ${token}`)
          .send({"name": "Mario"})
            expect(res.statusCode).toEqual(403)
        })
    })
})
