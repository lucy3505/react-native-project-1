import {makeAutoObservable} from 'mobx';

class RootStore {
  constructor() {
    makeAutoObservable(this);
  }
  //observable 表示数据可监控 表示时全局数据,@observable装饰器语法，其实就是用Object.defineProperty来做的

  name = 'hello';
  //action行为 表示changeName时个可以修改全局共享数据的方法

  changeName(name) {
    this.name = name;
  }
}

export default new RootStore();
