`use strict`;

import request from 'supertest';
import chai from 'chai';
import { app } from '../routes.js';
const expect = chai.expect;

describe('yondu endpoints', () => {
  it('GET /yondu/?distance=100.0&time=10.0 should return response object', (done) => {
    request(app)
      .get('/yondu/?distance=100.0&time=10.0')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        expect(res.body.distance).to.equal(100.0);
        expect(res.body.time).to.equal(10.0);
        expect(res.body.speed).to.equal(10.0);
        done();
      });
  });

  it('GET /youndu/ without parameter status should be not ok', (done) => {
    request(app)
      .get('/yondu/')
      .expect(400)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal('distance and time required');
        done();
      });
  });
});
