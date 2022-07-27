const Controller = require('egg').Controller;

class FileController extends Controller { 
     
  async upload() { 
     //获取文件路径 ,文件名
     let { files } = this.ctx.request;
     let filePath = files[0].filepath;
     let fileName = files[0].filename;
     await this.service.file.upload(filePath,fileName);
  }

}
module.exports = FileController;