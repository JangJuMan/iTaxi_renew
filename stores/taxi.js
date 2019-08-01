import { observable, computed } from 'mobx';
import { asyncAction } from 'mobx-utils';
import axios from 'axios';

export default class TaxiStore {

    @observable taxiList = [];
    @observable taxiId;

    @observable state = "pending";
    errorData = "";

    @asyncAction
    * getTaxiList() {
        this.state = "pending";

        try {
            let result = yield axios.get("http://203.252.99.145:8080" + "/taxilist/190724");
            this.taxiList = result.data;
            console.log(this.taxiList);
            this.state = "done";
          }
          catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
            this.state = "error";
          }

    }

    @computed get taxi() {
      return this.taxiList;
    }


    @asyncAction
    * getTaxiId() {
        this.state = "pending";

        try {
            let result = yield axios.get("http://203.252.99.145:8080" + "/taxi/123");
            this.taxiId = result.data;
            console.log(this.taxiId);
            this.state = "done";
          }
          catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
            this.state = "error";
          }
    }

  

}