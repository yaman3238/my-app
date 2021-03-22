import React, { Component } from 'react'
import Registration from './Interview/Registration/RegistrationFrom'
import DatatablePage from './Interview/Table/Table'


export class App extends Component {
    render() {
        return (
            <div>
                <DatatablePage/>
                <Registration />
            </div>
        )
    }
}

export default App
