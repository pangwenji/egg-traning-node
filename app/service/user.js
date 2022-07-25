const Service = require('egg').Service;

class UserService extends Service { 
  constructor() { }
  //查询
	async select() { 
		return this.app.mysql.select('user') // select * from '表名'
	}
  
	/**
	 * entity
	 */
	async create(entity) { 
		return this.app.mysql.insert('user',entity);//insert  into  （） value()
	}

	async update(entity) {
		return this.app.mysql.update('user',entity)
	}
	
	async delect(id) {
		return this.app.mysql.delect('user', id);
	 }
}
module.exports = new UserService();