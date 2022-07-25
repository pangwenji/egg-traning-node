const BaseController = require('./baseController');
class ApiController extends BaseController {
    async index() {
    let {ctx,service}=this;
    let list=await service[this.entity].select();
    ctx.body = list;
  }

  async create() {
    let {ctx,service}=this;
    let user=ctx.request.body;
    await service[this.entity].create(user);
    ctx.body={
      code: 0,
      data:'success!'
    }
  }

  async update() {
    let {ctx,service}=this;
    let user=ctx.request.body;
    user.id=ctx.params.id;
    await service[this.entity].update(user);
    ctx.body={
      code: 0,
      data:'success!'
    }
  }
  async destroy() {
    let {ctx,service}=this;
    let id=ctx.params.id;
    await service[this.entity].delete(id);
    ctx.body={
      code: 0,
      data:'success!'
    }
  }
}
module.exports=new ApiController();