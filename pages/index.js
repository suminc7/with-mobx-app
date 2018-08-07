import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

class CounterContainer {
    @observable count = 0
}

const store = new CounterContainer();

@observer
class Counter extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => store.count--}>-</button>
                { store.count }
                <button onClick={() => store.count++}>+</button>
            </div>
        )
    }
}


export default class Index extends React.Component {
  render () {
    return (
      <Counter/>
    )
  }
}
