export default class AppSvc {

  constructor($http) {

    this.$http = $http;

  }

  getData() {

    return this.$http
      .get('/appName')
      .then(response => response.data);

  }

}
