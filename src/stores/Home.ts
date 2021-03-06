import { observable, action } from 'mobx';
/**
 * @class home
 */
class App {
    @observable public num = 0;
    @observable public list = [];

    @action public addNum = (num: number) => {
        this.list = ['1', '2', '3'];
        this.num = num+1;
    }

    @action public cutNum = (num: number) => {
        this.list = ['1', '2', '3'];
        this.num = num-1;
    }
}

export default new App();
