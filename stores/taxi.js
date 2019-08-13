import { observable, computed } from 'mobx';
import { asyncAction } from 'mobx-utils';
import axios from 'axios';

export default class TaxiStore {

    @observable taxiList = [];
    @observable taxiId;

    @observable state = "pending";
    errorData = "";

    @asyncAction
    * getTaxiList(taxidate) {
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
    * createTaxiList(date, time, d_place, a_place, host_id, name, people, carrier) {
      try {
        let result = yield axios.post("http://203.252.99.145:8282" + "/taxi/" + _id, {
          departure_date: date,
          departure_time: time,
          departure_place: d_place,
          arrival_place: a_place,
          host_id: host_id,
          host_name: name,
          num_people: people,
          num_carrier: carrier
        });
        console.log(result);
        this.taxiList.push(response);
        this.state = 'done';
      }
      catch (error) {
        console.log(error);
        this.errorData = error.message;
        this.state = 'error';
      }
    }



    @asyncAction
    * getTaxiId() {
        this.state = "pending";

        try {
            // let result = yield axios.get("http://203.252.99.145:8282" + "/taxi/5d43f682c67c295d9a48fe4f");
            // this.taxiId = result.data;
            let result = yield axios.get("http://203.252.99.145:8282" + "/taxi/" + _id);
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