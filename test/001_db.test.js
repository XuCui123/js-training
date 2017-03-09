'use strict';

import { expect } from 'chai';
import DB from '../src/001_db';

describe('Test: 001_db.js', () => {
  it('DB.init should count 0', () => {
    DB.init();
    expect(DB.count()).to.equal(0);
  });

  it('DB.create should insert data into DB', () => {
    DB.create({
      id: 1,
      name: 'foo',
      email: 'foo@test.com',
      phone: '12345678'
    });
    DB.create({
      id: 2,
      name: 'bar',
      email: 'bar@test.com',
      phone: '87654321'
    });
    expect(DB.count()).to.equal(2);
  });

  it('DB.update should update data', () => {
    const item = DB.update(1, {
      name: 'foo name'
    });
    expect(item).to.have.property('name');
    expect(item.name).to.equal('foo name');
  });

  it('DB.find should find data', () => {
    const item = DB.find(2);
    expect(item).to.have.property('name');
    expect(item.name).to.equal('bar');

    const notFound = DB.find(3);
    expect(notFound).to.be.a('undefined');
  });

  it('DB.remove should remove data', () => {
    const item = DB.remove(2);
    expect(item).to.have.property('name');
    expect(item.name).to.equal('bar');

    expect(DB.count()).to.equal(1);
  });
});
