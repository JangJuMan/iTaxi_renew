import { observable,  } from 'mobx';

class ModalControl {
    @observable modalVisible = false;

}

const store = new ModalControl();
export default store;