
const Controller = require('egg').Controller;
class ApiJsonResult {

  //成功
  success(data, ctx) {
    return ctx.body = { code: 'success', data: data }
  }

  error(data, ctx) {
    return ctx.body = { code: 'error', data: data }
  }

  formtTime() {
    let time = new Date();
    let yaer = time.getFullYear();
    let mothons = String(time.getMonth() + 1).padStart(2, '0');
    let days = String(time.getDay()).padStart(2, '0');
    let hours = String(time.getHours()).padStart(2, '0');
    let mints = String(time.getMinutes()).padStart(2, '0');
    return `${yaer}-${mothons}-${days}-${hours}${mints}`;
  }
}

module.exports = new ApiJsonResult();