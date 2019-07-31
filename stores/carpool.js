import { observable, action } from 'mobx';
import { asyncAction } from 'mobx-utils';
import axios from 'axios';

export default class CarpoolStore {

    @observable carpoolList = [];
    @observable carpoolId = [];

    @observable state = "pending";
    errorData = "";


    @asyncAction
    * getCarpoolList() {
        this.state = "pending";

        try {
            let result = yield axios.get("http://203.252.99.145:8080" + "/carpoollist/190724");
            this.carpoolList = result.data;
            console.log(this.carpoolList);
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
            let result = yield axios.get("http://203.252.99.145:8080" + "/carpool/123");
            this.carpoolId = result.data;
            console.log(this.carpoolId);
            this.state = "done";
          }
          catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
            this.state = "error";
          }
    }




}