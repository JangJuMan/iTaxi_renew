import { observable, computed } from 'mobx';
import { asyncAction } from 'mobx-utils';
import axios from 'axios';

export default class CarpoolStore {

    @observable carpoolList = [];
    @observable carpoolId;

    @observable state = "pending";
    errorData = "";


    @asyncAction
    * getCarpoolList() {
        this.state = "pending";

        try {
            let result = yield axios.get("http://203.252.99.145:8282" + "/carpoollist/190724");
            this.carpoolList = result.data.data;
            this.state = "done";
          }
          catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
            this.state = "error";
          }
    }

    @asyncAction
    * getCarpoolId() {
        this.state = "pending";

        try {
            let result = yield axios.get("http://203.252.99.145:8282" + "/carpool/123");
            this.carpoolId = result.data.data;
            this.state = "done";
          }
          catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
            this.state = "error";
          }
    }

    @computed get carpool() {
      return this.carpoolList;
    }

}