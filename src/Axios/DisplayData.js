import React, { Component } from 'react'

export class DisplayData extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='table table-hover table-striped'>
                            <table>
                                <thead>
                                    <tr>
                                        <td>ID</td>
                                        <td>Title</td>
                                        <td>Body</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.Display!=null ? (this.props.Display.map((data) =>
                                    {
                                        return(
                                            <>
                                                <tr>
                                                    <td>{data.postId}</td>
                                                    <td>{data.id}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.email}</td>

                                                    {console.log(this.props.Display)}
                                                </tr>
                                        </>)
                                    })):'null'}
                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default DisplayData
