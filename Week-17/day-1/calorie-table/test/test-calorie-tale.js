`use strict`;

import request from 'supertest';
import chai from 'chai';
import { app } from '../routes.js';
const expect = chai.expect;

describe('/drax endpoints', () => {
  it('GET /drax should return status 200', (done) => {
    request(app)
      .get('/drax')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('POST /drax/?name=snail&amount=1&calorie=100 should return status 200', (done) => {
    request(app)
      .post('/drax/?name=snail&amount=1&calorie=100')
      .expect(200)
      .send({ name: 'snail', amount: '1', calorie: '100' })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        expect(res.body[4].name).to.equal('snail');
        expect(res.body[4].amount).to.equal(`1`);
        expect(res.body[4].calorie).to.equal(`100`);
        done();
      });
  });

  it('DELETE /drax/5', (done) => {
    request(app)
      .delete('/drax/5')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body[4]).to.be.undefined;
        done();
      });
  });

  it('PUT /drax/1 should return status 200', (done) => {
    request(app)
      .put('/drax/1')
      .expect(200)
      .send({ amount: '1000' })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        expect(res.body[0].amount).to.equal('1000');
        done();
      });
  });
});
