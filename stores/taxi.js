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
            this.taxiList = result.data.data.filter(item => {
                if ((Moment.tz(`${item.departure_date} ${item.departure_time}`, 'Asia/Seoul').diff(Moment())) < 0)
                    return false;
                return true;
            });
        }
        catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
        }
    }

    @asyncAction
    * createTaxiList(date, time, d_place, a_place, host_id, name, people, carrier) {
      try {
        let response = yield axios.post(`${DATABASE}/taxi/${_id}`, {
          departure_date: date,
          departure_time: time,
          departure_place: d_place,
          arrival_place: a_place,
          host_id: host_id,
          host_name: name,
          num_people: people,
          num_carrier: carrier
        });
        this.taxiList.push(response);
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