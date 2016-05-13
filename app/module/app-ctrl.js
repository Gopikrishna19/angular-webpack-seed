export default class AppCtrl {

  constructor(AppSvc) {

    AppSvc.getData()
      .then(response => this.appName = response.appName);

  }

}
