import { GOODMORNING, GOODAFTERNOON, GOODNIGHT } from './../action/Action'

let initialState = { Message: 'Hello' }

let Reducer = (state=initialState,action) =>
{
    switch (action.type) {
        case GOODMORNING:
            return { Message: 'Good Morning' }
        
        case GOODAFTERNOON:
            return { Message: 'Good AfterNoon' }
        
        case GOODNIGHT:
            return { Message: 'Good Night' }
        
        default:
            return state;
        
    }
}

export {Reducer}