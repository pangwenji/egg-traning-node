const Service = require('egg').Service;
const apiJsonResult = require('../utils/apijsonresult');
const path = require('path');
const fs = require('fs');
const console = require('console');
class FileService extends Service {


  //文件上传
  async upload(filePath, fileName) {
    //判断目标目录是否存在如果不存在就创建
    //目录内是否已经存在相同的文件如果存在就删除原来的
    // writeFileSync同步写入文件
      let targetPath = path.resolve(__dirname, '../public');
      const file = fs.readFileSync(filePath)//使用同步方法将文件读成流
      // const base64 = Buffer.from(Buffer.from(file, 'binary').toString('base64'), 'base64');//base64流
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath);
    }
      let temp = fileName.split('.')
      let fileAndTimeName = temp[0]+ '-' + apiJsonResult.formtTime()+'.'+temp[1];
      console.log(fileAndTimeName)
      let readdir = fs.readdirSync(targetPath);
      // if (readdir && readdir.length > 0) {
      //   readdir.forEach(fsName => { 
      //     if (fsName.split['.'][0] === fileAndTimeName) {
      //       fs.unlinkSync(path.join(__dirname, fileAndTimeName));
      //       fs.close();
      //      }
      //   })   
      // }
      try{
      //写入文件
        // let res = await fs.writeFileSync(path.join(targetPath, fileAndTimeName, {}), Buffer.from(file));
        //  fs.createWriteStream(path.join(targetPath, fileAndTimeName)).pipe(fs.createReadStream(file))
        fs.createReadStream(filePath).pipe(fs.createWriteStream(path.join(targetPath, fileAndTimeName)))
        console.log(writeFile, '是否成功')
      } catch (e) {
        fs.close();
      }
  }
}
module.exports = FileService;