
const Controller = require('egg').Controller;
class ApiJsonResult extends Controller { 
   
  //成功
  success(data) { 
    return this.ctx.body = {code:'success',data:data}
  }
   
  error(data) { 
    return this.ctx.body =  {code:'error',data:data}
  }
}

module.exports =ApiJsonResult;