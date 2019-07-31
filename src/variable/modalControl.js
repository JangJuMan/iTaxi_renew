import { observable,  } from 'mobx';

class ModalControl {
    @observable modalVisible_taxi = false;
    @observable modalVisible_carpool = false;
}

const store = new ModalControl();
export default store;