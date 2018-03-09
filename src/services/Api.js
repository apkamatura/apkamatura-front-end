import axios from 'axios';
import config from '../config/config.json';

class Api {
  get(route, params, routeParams, url) {
    return this.xhr(route, params, 'GET', url);
  }

  post(route, params, routeParams, url) {
    const newRoute = route;
    return this.xhr(newRoute, params, 'POST', url);
  }

  xhr(route, params, verb, url = config.API_URL) {
    const uri = `${url}${route}`;
    return axios({
      method: this.verb,
      url: uri,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: 'application/json, text/plain',
      },
      data: this.params,
    });
  }
}

export default new Api();
