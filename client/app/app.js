/**
 * Created by youngmoon on 5/20/15.
 */

'use strict';

require('jquery');
var angular = require('angular');

var app = angular.module('HRApp',[
  'ngRoute'
]);

require('./main/main.controller');
require('./router');