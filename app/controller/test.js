/**
 * Created by Cai Kang Jie on 2017/12/7.
 */
'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async index() {
    this.ctx.body = 'test';
  }
}

module.exports = TestController;
