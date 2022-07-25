const Controll = require('egg').Controller;

class BaseControll extends Controll { 
  //成功
  success(data) { 
    let { ctx } = this;
    ctx.body = {
      code: 'SUCCESS',
      data
    }
  }
  //失败
  error(data) { 
    let { ctx } = this;
    ctx.body = {
      code: 'ERROR',
      data
    }
  }
}

module.exports = new BaseControll();