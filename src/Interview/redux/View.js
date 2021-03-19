import React from 'react'
import { sayGMAction, sayGAAction, sayGNAction } from './../redux/action/Action';
import { useSelector, useDispatch } from 'react-redux';


let View=()=>
{
    const dispatch = useDispatch();

    let message = useSelector((state) =>
    {
        return state.WishMessage
    })


    let sayGM=() =>
    {
        return dispatch(sayGMAction())
    }

    let sayGA=() =>
    {
        return dispatch(sayGAAction())
    }

    let sayGN=() =>
    {
        return dispatch(sayGNAction())
    }

    return (
        <div>
            <nav className='navbar text-white bg-dark '>Redux</nav>
            <div className='container'>
                <div className='card m-4 text-center'>
                    <div className='card-header'>
                        <h1>Message : { message.Message}</h1>
                        <div className='card-body'>
                            <button className='btn btn-primary mr-2' onClick={sayGM}>GM</button>
                            <button className='btn btn-info mr-2' onClick={sayGA}>GA</button>
                            <button className='btn btn-warning mr-2' onClick={sayGN}>GN</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default View;