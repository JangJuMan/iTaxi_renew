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
<<<<<<< HEAD
            this.taxiList = result.data;
=======
            this.taxiList = result.data.data;
            console.log(this.taxiList);
>>>>>>> 47064f31bbf0cb7cdcfce6146398f33211e43dd1
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
<<<<<<< HEAD
            let result = yield axios.get("http://203.252.99.145:8282" + "/taxilist/20190801");
            this.taxiId = result.data;
=======
            let result = yield axios.get("http://203.252.99.145:8282" + "/taxi/20190801");
            this.taxiId = result.data.data;
            console.log(this.taxiId);
>>>>>>> 47064f31bbf0cb7cdcfce6146398f33211e43dd1
            this.state = "done";
          }
          catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
            this.state = "error";
          }
    }

}