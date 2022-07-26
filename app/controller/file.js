const Controller = require('egg').Controller;

class FileController extends Controller { 
     
  async upload() { 
    console.log('是都')
    // let { files} = this.ctx.request;
      console.log(this.ctx.request)
  }

}
module.exports = FileController;