import { observable, action } from 'mobx';
import { asyncAction } from 'mobx-utils';
import axios from 'axios';


export default class UserStore {

    @observable taxiList = [];
    @observable carpoolList = [];
    @observable taxiId = [];
    @observable carpoolId = [];
    @observable userId = [];
    @observable log = [];

    @observable state = "pending";
    errorData = "";

    @asyncAction
    * getTaxiList() {
        this.state = "pending";

        try {
            let result = yield axios.get("http://203.252.99.145:8080" + "/taxi/<taxi_date>");
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

    @asyncAction
    * getCarpoolList() {
        this.state = "pending";

        try {
            let result = yield axios.get("http://203.252.99.145:8080" + "/carpoollist/<carpool_date>");
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
    * getTaxiId() {
        this.state = "pending";

        try {
            let result = yield axios.get("http://203.252.99.145:8080" + "/taxi/<taxi_id>");
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

    @asyncAction
    * getCarpoolId() {
        this.state = "pending";

        try {
            let result = yield axios.get("http://203.252.99.145:8080" + "/carpool/<carpool_id>");
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

    @asyncAction
    * getUserId() {
        this.state = "pending";

        try {
            let result = yield axios.get("http://203.252.99.145:8080" + "/user/<user_id>");
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
            let result = yield axios.get("http://203.252.99.145:8080" + "/log/<id>/<month>");
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