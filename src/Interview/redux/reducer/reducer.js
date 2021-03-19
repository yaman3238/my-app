import { USERNAME,AGE,SALARY,EMAIL,CREATEDDATE} from './../action/action'

let initialState = {
    userName: 'EmpName',
    age: 20,
    salary: 4,
    email: 'something@something.com',
    createdDate: '21-11-2020',
}

let empReducer = (state = initialState, action) =>
{
    let { type } = action;

    switch (type) {
        case USERNAME:
            return {
                state
            }
        
        case AGE:
            return {
                state
            }
        case SALARY:
            return {
            state
            }
        case EMAIL:
            return {
                state
            }
        case CREATEDDATE:
            return {
                state
            }
        
        default:
            return {
                state
            }
        
    }
            
        
    
}

export { empReducer };