`use strict`;

import request from 'supertest';
import chai from 'chai';
import { app } from '../routes.js';
const expect = chai.expect;

describe('/rocket endpoints', () => {
  it('GET /rocket should return status of the ship', (done) => {
    request(app)
      .get('/rocket')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.shipstatus).to.equal(`empty`);
        expect(res.body.ready).to.equal(false);
        done();
      });
  });

  it('GET /rocket/fill/?caliber=.50&amount=312.5 should return status 40%', (done) => {
    request(app)
      .get('/rocket/fill/?caliber=.50&amount=5000.0')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.shipStatus).to.equal('40%');
        done();
      });
  });

  it('GET /rocket/fill/?caliber=.30&amount=7500 should return status full', (done) => {
    request(app)
      .get('/rocket/fill/?caliber=.30&amount=7500.0')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.shipStatus).to.equal('full');
        expect(res.body.ready).to.equal(true);
        done();
      });
  });

  it('GET /rocket/fill/?caliber=.25&amount=100 should return status overloaded', (done) => {
    request(app)
      .get('/rocket/fill/?caliber=.25&amount=100')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.shipStatus).to.equal('overloaded');
        done();
      });
  });

  it('GET /rocket/fill/ should return status 400', (done) => {
    request(app)
      .get('/rocket/fill/')
      .expect(400)
      .end((err, res) => {
        expect(res.body.error).to.equal('Please feed me some data');
        expect(res.status).to.equal(400);
        done();
      });
  });
});
