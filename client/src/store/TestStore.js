import { observable, action, computed } from 'mobx';


export default class TestStore {
  @observable shoes = [];

  @observable text = 'Test test';

  @computed get shoesCount() {
    return this.shoes.length;
  }

  @action addShoe = (shoe) => {
    this.shoes.push(shoe);
  }
}
