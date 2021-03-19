import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <form className='form-group'>

                                <label>Upload file</label>
                                <input type='file' />
                                
                            </form>
                        </div>

                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Form
