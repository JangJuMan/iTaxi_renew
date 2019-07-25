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

    @asyncAction
    * getUserId() {
        this.state = "pending";

        try {
            let result = yield axios.get("http://203.252.99.145:8080" + "/user/123");
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
            let result = yield axios.get("http://203.252.99.145:8080" + "/log/123/7");
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