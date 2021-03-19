import React, { Component } from 'react'
import { displayAction } from './redux/action/action';
import { useDispatch, useSelector } from 'react-redux';



let  View = () =>
{

    let dispatch = useDispatch();
    let emp = useSelector((state) =>
    {
        return state.emp;
    })

    let displayHandler = () =>
    {
        dispatch(displayAction());
    }




        return (
            <div>
                <div className='container' >
                    <div className='row'>
                        <div className='col-md-8'>
                            <table className='table table-hover table-striped' onLoad={displayHandler}>
                                <thead>
                                    <tr>
                                        <th>User Name</th>
                                        <th>Age</th>
                                        <th>Salary</th>
                                        <th>Email</th>
                                        <th>Created-Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{ this.state.userName}</td>
                                        <td>{ this.state.age}</td>
                                        <td>{ this.state.salary}</td>
                                        <td>{ this.state.email}</td>
                                        <td>{ this.state.createdDate}</td>
                                    </tr>
                                    <tr>
                                        <td>{ this.state.userName}</td>
                                        <td>{ this.state.age}</td>
                                        <td>{ this.state.salary}</td>
                                        <td>{ this.state.email}</td>
                                        <td>{ this.state.createdDate}</td>
                                    </tr>
                                    <tr>
                                        <td>{ this.state.userName}</td>
                                        <td>{ this.state.age}</td>
                                        <td>{ this.state.salary}</td>
                                        <td>{ this.state.email}</td>
                                        <td>{ this.state.createdDate}</td>
                                    </tr>
                                    <tr>
                                        <td>{ this.state.userName}</td>
                                        <td>{ this.state.age}</td>
                                        <td>{ this.state.salary}</td>
                                        <td>{ this.state.email}</td>
                                        <td>{ this.state.createdDate}</td>
                                    </tr>
                                    <tr>
                                        <td>{ this.state.userName}</td>
                                        <td>{ this.state.age}</td>
                                        <td>{ this.state.salary}</td>
                                        <td>{ this.state.email}</td>
                                        <td>{ this.state.createdDate}</td>
                                    </tr>
                                    <tr>
                                        <td>{ this.state.userName}</td>
                                        <td>{ this.state.age}</td>
                                        <td>{ this.state.salary}</td>
                                        <td>{ this.state.email}</td>
                                        <td>{ this.state.createdDate}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default View
