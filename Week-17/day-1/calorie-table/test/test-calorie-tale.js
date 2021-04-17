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
});
