import { observable, computed } from 'mobx';
import { asyncAction } from 'mobx-utils';
import axios from 'axios';

export default class UserStore {

    @observable userId = [];
    @observable log = [];

    @observable state = "pending";
    errorData = "";

   
    @asyncAction
    * getUserId() {
        this.state = "pending";

        try {
            let result = yield axios.get("http://203.252.99.145:8282" + "/user/cra");
            this.userId = result.data;
            console.log(this.userId);
            this.state = "done";
          }
          catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
            this.state = "error";
          }
    }

    @asyncAction
    * getLog() {
        this.state = "pending";

        try {
            let result = yield axios.get("http://203.252.99.145:8282" + "/log/123/7");
            this.log = result.data;
            console.log(this.log);
            this.state = "done";
          }
          catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
            this.state = "error";
          }
    }

  
}