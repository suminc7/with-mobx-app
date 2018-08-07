import React from 'react'
import Page from '../components/Page'
import { observable, action } from 'mobx'
import { observer, inject, Provider } from 'mobx-react'



class CountStore {
    @observable count = 0;

    @action
    increase = () => {
        this.count++;
    }

    @action
    decrease = () => {
        this.count--;
    }
}

const store = new CountStore();

@inject('store')
@observer
class Counter extends React.Component {
    constructor() {
        super();
    }
    render() {
        const { store } = this.props;
        return (
            <div>
                <button onClick={() => store.decrease()}>-</button>
                { store.count }
                <button onClick={() => store.increase()}>+</button>
            </div>
        )
    }
}


export default class Index extends React.Component {
    render () {
        return (
            <div>
                <Page title='Index Page' linkTo='/other' />
                <Provider store={store}>
                    <Counter/>
                </Provider>
            </div>
        )
    }
}
