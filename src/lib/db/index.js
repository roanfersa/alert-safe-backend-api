const sqlite3 = require('better-sqlite3');
const path = require('path');

class Database {
  constructor() {
    this.db = new sqlite3(path.join(process.cwd(), 'data/disaster_monitor.db'));
    this.db.pragma('foreign_keys = ON');
  }
  
  query(sql, params = []) {
    return this.db.prepare(sql).all(params);
  }
  
  get(sql, params = []) {
    return this.db.prepare(sql).get(params);
  }
  
  run(sql, params = []) {
    return this.db.prepare(sql).run(params);
  }
}

module.exports = new Database(); 