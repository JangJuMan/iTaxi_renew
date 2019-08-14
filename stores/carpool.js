import { observable } from 'mobx';
import { asyncAction } from 'mobx-utils';
import axios from 'axios';
import { DATABASE } from '../info';

export default class CarpoolStore {

    @observable carpoolList = [];
    @observable carpool;
    errorData = "";

    @asyncAction
    * getCarpoolList(date) {
        try {
            let result = yield axios.get(`${DATABASE}/carpoollist/${date}`);
            this.carpoolList = result.data.data;
          }
          catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
          }
    }

    @asyncAction
    * getCarpool(id) {
        try {
            let result = yield axios.get(`${DATABASE}/carpool/${id}`);
            this.carpool = result.data;
          }
          catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
          }
    }


}