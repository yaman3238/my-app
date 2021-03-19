import React, { Component } from 'react'
import Pagination from 'react-js-pagination'
import View from './Interview/View'
import store from './Interview/store'
import { Provider } from 'react-redux';


export class App extends Component
{
    
    constructor(props)
    {
        super(props);
        this.state = {
        
            activePages:10
        }
    }

    handleChange = (pageNumber) =>
    {
        <pre>{JSON.stringify(pageNumber)}</pre>
        this.setState({activePage:pageNumber})
        
    }
    

    render() {
        return (
            <>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    onChange={this.handleChange.bind(this)}
                />

                <Provider store={store}>
                    <View/>
                </Provider>

                
                
            </>
        )
    }
}

export default App
