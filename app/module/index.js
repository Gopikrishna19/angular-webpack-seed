import angular from 'angular';

import AppSvc from './app-svc';
import app from './app';

export default angular.module('module', [])
  .directive('app', app)
  .service('AppSvc', AppSvc)
  .name;
