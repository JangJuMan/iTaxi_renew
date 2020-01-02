import { observable, computed } from 'mobx';
import { asyncAction } from 'mobx-utils';
import axios from 'axios';
import Moment from 'moment-timezone';

import { DATABASE } from '../info';

export default class TaxiStore {

    @observable taxiList = [];
    @observable taxi;
    errorData = "";

    @asyncAction
    * getTaxiList(date) {
        try {
            let result = yield axios.get(`${DATABASE}/taxilist/${date}`);
            this.taxiList = result.data;
        }
        catch (error) {
            throw error
        }
    }

    @asyncAction
    * createTaxiList(date, time, d_place, a_place, user_id, people, carrier) {
        try {
            console.log(date, time, d_place, a_place, user_id, people, carrier)
            let response = yield axios.post(`${DATABASE}/taxilist/${date}`, {
                departure_date: date,
                departure_time: time,
                departure_place: d_place,
                arrival_place: a_place,
                user_id: user_id,
                num_people: people,
                num_carrier: carrier
            });
            this.taxiList.push(response.data);
            this.taxi = response.data
            console.log("\n=====\nKO!")
            console.log(response.data)
            console.log("\n=====\nOK!")
            console.log("\n", this.taxiList)
        }
        catch (error) {
            console.log(error);
            this.errorData = error.message;
        }
    }

    @asyncAction
    * getTaxi(id) {
        try {
            let result = yield axios.get(`${DATABASE}/taxi/${id}`);
            this.taxi = result.data;
        }
        catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
        }
    }
}