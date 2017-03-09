'use strict';

import { expect } from 'chai';
import * as _ from '../src/002_functions';

describe('Test: 002_functions.js', () => {
  it('max should return max data', () => {
    const users = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
    const item = _.max(users, user => user.age);
    expect(item).to.deep.equal({ name: 'curly', age: 60 });
  });
  it('max should return null', () => {
    const item = _.max(null, user => user.age);
    expect(item).to.be.a('null');
  });
  it('max should return null with []', () => {
    const item = _.max([], user => user.age);
    expect(item).to.be.a('null');
  });
});
