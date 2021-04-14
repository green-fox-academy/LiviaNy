// const request = require('supertest');
// const app = require('./app');

// request(app)
//   .get('/user')
//   .expect('Content-Type', /json/)
//   .expect('Content-Length', '15')
//   .expect(200)
//   .end(function (err, res) {
//     if (err) throw err;
//   });

const request = require('supertest');
const app = require('./app');
const { expect } = require('chai');

describe('GET /user', () => {
  it('should return a valid user', (done) => {
    request(app)
      .get('/user')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;

        expect(res.body.name).to.equal('tobi');

        done();
      });
  });
});
