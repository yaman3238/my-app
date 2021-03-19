import React from 'react'
import View from './reduxView/View';
import Card from './reduxView/Card';

import { Provider } from 'react-redux';
import { Store } from './redux/Store'


 let App = ()=> {
    return (
        <div>
            <Provider store={Store}>
                <View />
                <Card/>
            </Provider>
        </div>
    )
}

export default App;