import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userData } from './UserAction'
import { MDBDataTable } from 'mdbreact';

let  View= ()=> {
  const user = useSelector(state => state.userData);
  
  let dispatch = useDispatch();
    let userHandler = () =>
    {
      console.log('test from View')
    dispatch(userData());
  };

    return (
  <>
            <button onClick={userHandler}>Click Me</button>
            <MDBDataTable
      striped
      bordered
      small
      data={user}
    />

  </>
  );
}

export default View;
