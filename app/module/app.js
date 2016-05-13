import template from './app.html';
import AppCtrl from './app-ctrl';

import './app.less';

const app = {
  controller: AppCtrl,
  controllerAs: 'vm',
  restrict: 'E',
  template
};

export default () => app;

