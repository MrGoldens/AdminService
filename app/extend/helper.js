/**
 * Created by Cai Kang Jie on 2017/12/13.
 */
'use strict';


const moment = require('moment');
exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();
