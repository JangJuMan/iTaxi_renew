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
    * updateUser(phone_number) {
        try {
            let result = yield axios.patch(`${DATABASE}/user/${user_id}`, {
                // student_id: student_id,
                // name: name,
                // user_id: user_id,
                phone_number: phone_number,
            });
            // this.userId.student_id = student_id;
            // this.userId.name = name;
            // this.userId.user_id = user_id;
            this.userId.phone_number = phone_number;
        }
        catch (error) {
            console.log(error);
            this.errorData = error.message;
        }
    }

    @asyncAction
    * getUserId() {
        try {
            let result = yield axios.get(`${DATABASE}/user/cra`);
            console.log("Result: ", result);
            this.userId = result.data;
        }
        catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
        }
    }

    @asyncAction
    * getLog(user_id) {
        try {
            let result = yield axios.get(`${DATABASE}/log/${user_id}`);
            this.log = result.data;
        }
        catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
        }
    }
}