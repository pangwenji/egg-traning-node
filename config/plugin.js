'use strict';

/** @type Egg.EggPlugin */

//基本配置
let config = {}
config.mysql = {
  enable: true,
  package:'egg-mysql'
}
module.exports = config;
// module.exports = {
  
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };
