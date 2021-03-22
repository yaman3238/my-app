import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { Store } from './Interview/Redux/Store';
import View from './Interview/Redux/View'


export class App extends Component {
    render() {
        return (
            <div>
                <Provider store={Store}>
                <View />
            </Provider>
            </div>
        )
    }
}

export default App;
