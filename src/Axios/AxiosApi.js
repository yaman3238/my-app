import React, { Component } from 'react';
import Axios from 'axios';
import DisplayData from './DisplayData'

export class AxiosApi extends Component
{
    
    state={
        data:null,
        errMsg:null
    }
    
    componentDidMount()
    {
        let URL = 'https://jsonplaceholder.typicode.com/comments';
        Axios.get(URL).then((response) =>
        {
            this.setState({
                data:response.data
            })
        }).catch(error =>
        {
            this.setState({
                errMsg:error
            })
            
        })
    }

    render() {
        return (
            <div>
                
                <DisplayData Display={ this.state.data}/>
            </div>
        )
    }
}

export default AxiosApi;
