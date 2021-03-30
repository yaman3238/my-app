import React from 'react'

let ContactCard = (props) =>
{
    
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        
                        {props.selectedContact != null ?
                            <>
                                <div className='card'>
                                    <div className='card-header'>
                                        <h3>Employee Info </h3>
                                    </div>
                                    {console.log(props.selectedContact)}
                                    <div className='card-body'>
                                        <ul>
                                            <li>
                                                <img src={props.selectedContact.picture.medium} alt="NAN"/>
                                            </li>
                                            <li>{props.selectedContact.name.last}</li>
                                            <li>{props.selectedContact.gender}</li>
                                            <li>{props.selectedContact.dob.age}</li>
                                            <li>{props.selectedContact.email}</li>
                                            <li>{props.selectedContact.location.city}</li>
                                        </ul>
                                    </div>
                            </div>
                            </>
                            
                            :null
                        }
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default ContactCard