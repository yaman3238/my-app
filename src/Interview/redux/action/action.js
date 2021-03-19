import React from 'react'

const USERNAME='USERNAME'
const AGE='AGE'
const SALARY='SALARY'
const EMAIL = 'EMAIL'
const CREATEDDATE='CREATEDDATE'

let displayAction = () =>
{
    return {
        type: USERNAME,
        type: AGE,
        type: SALARY,
        type: EMAIL,
        type: CREATEDDATE
    }
}

export {displayAction,USERNAME,AGE,SALARY,EMAIL,CREATEDDATE}