import { observable, computed } from 'mobx';
import { asyncAction } from 'mobx-utils';
import axios from 'axios';

export default class UserStore {

    @observable userId = [];
    @observable log = [];
    @observable user;

    @observable state = "pending";
    errorData = "";

    @asyncAction
    * updateUser(phone) {
      this.state = 'pending';
  
      try {
        let result = yield axios.patch("http://203.252.99.145:8282" + '/user/cra' , {
          // student_id: student_id,
          // name: name,
          // user_id: user_id,
          phone: phone,
        });
        // this.userId.student_id = student_id;
        // this.userId.name = name;
        // this.userId.user_id = user_id;
        this.userId.phone = phone;
        this.state = 'done';
      }
      catch (error) {
        console.log(error);
        this.errorData = error.message;
        this.state = 'error';
      }
    }


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