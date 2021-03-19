import React, { useState}from 'react'

let Counter = () =>
{

    let [count, setCount] = useState(0);

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card mt-5'>
                            <div className='card-header'>
                                {count}
                            </div>
                            <div className='card-body'>
                                <button className='btn btn-primary mr-5' onClick={
                                    () =>
                                    {
                                        setCount(count + 1);
                                    }
                                }>Increment</button>
                                <button className='btn btn-primary' onClick={
                                    () =>
                                    {
                                        setCount(count - 1);
                                    }
                                }>Decrement</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
}

export default Counter;