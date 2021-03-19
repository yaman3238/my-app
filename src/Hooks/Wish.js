import React, { useState } from 'react';

let Wish = () =>
{
    
    let [wish, setWish] = useState('Hello');

   let  inputHandler=(value) =>
    {
        setWish(value);
    }

    return (
        <>
          <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card mt-5'>
                            <div className='card-header'>
                                {wish}
                            </div>
                            <div className='card-body'>
                                <button className='btn btn-primary mr-5' onClick={inputHandler.bind(this, 'HELLO... GM')}>GM</button>
                                <button className='btn btn-primary' onClick={inputHandler.bind(this, 'BYE... GN')}>GN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}
export default Wish;