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
            let result = yield axios.get("http://203.252.99.145:8282" + "/taxilist/20190801");
            this.taxiList = result.data.data;
            this.state = "done";
          }
          catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
            this.state = "error";
          }

    }



    @asyncAction
    * getTaxiId() {
        this.state = "pending";

        try {
            let result = yield axios.get("http://203.252.99.145:8282" + "/taxi/20190801");
            this.taxiId = result.data.data;
            this.state = "done";
          }
          catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
            this.state = "error";
          }
    }

}