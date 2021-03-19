import React from 'react' 
import Product from './ReduxCounter/Components/Product'
import { Provider } from 'react-redux';
import store from './ReduxCounter/redux/store';

export default function App() {
    return (
        <React.Fragment>
            <Provider store={store}>
                <Product/>
            </Provider>
        </React.Fragment>
    )
}
