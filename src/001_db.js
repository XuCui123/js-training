'use strict';

const DB = {
  _data: [],
  init () {
    this._data = [];
  },
  create (obj) {
    this._data.push(obj);
  },
  update (id, obj) {
    const tmp = this.find(id);
    Object.assign(tmp, obj);
    return tmp;
  },
  find (id) {
    return this._data.find(v => v.id === id);
  },
  remove (id) {
    const tmp = this.find(id);
    const i = this._data.indexOf(tmp);
    this._data.splice(i, 1);
    return tmp;
  },
  count () {
    return this._data.length;
  }
};

export default DB;
