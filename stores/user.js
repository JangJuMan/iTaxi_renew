import { observable, computed } from 'mobx';
import { asyncAction } from 'mobx-utils';
import axios from 'axios';
import { DATABASE } from '../info';

export default class UserStore {
    @observable log = [];
    @observable userId;
    errorData = "";

    @asyncAction
    * login(id, password) {
        try {
            let result = yield axios.post(`${DATABASE}/user`, {
                id: id,
                password: password
            });
            this.userId = result._id;
            console.log(result);
            return result._id;
        }
        catch (error) {
            console.log("Error", error);
            this.errorData = error.message;
            throw error;
        }
    }

    @asyncAction
    * updateUser(phone) {
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
            this.user.phone = phone;
        }
        catch (error) {
            console.log(error);
            this.errorData = error.message;
        }
    }

    @asyncAction
    * getUserId() {
        try {
            let result = yield axios.get("http://203.252.99.145:8282" + "/user/cra");
            this.userId = result.data;
        }
        catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
        }
    }

    @asyncAction
    * getLog() {
        try {
            let result = yield axios.get("http://203.252.99.145:8282" + "/log/123/7");
            this.log = result.data;
        }
        catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
        }
    }
}