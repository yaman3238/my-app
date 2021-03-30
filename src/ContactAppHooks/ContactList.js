import React from 'react'

let ContactList = (props) =>
{

    let pushdata = (contact) =>
    {
        props.pullData(contact);
    }
    

    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        {/* <pre>{ JSON.stringify(props.contactData)}</pre> */}
                     <table className='table table table-hover table-dark '>

                            <thead className='table-head'>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.contactData != null ? (
                                    <React.Fragment>
                                    {props.contactData.map((contact) => {
                                        return (
                                        <tr key={contact.login.uuid} onClick={pushdata.bind(this,contact)}>
                                            <td>{contact.login.uuid}</td>
                                             <td>{contact.name.last}</td>
                                            <td>{contact.dob.age}</td>
                                            <td>{contact.email}</td>
                                        </tr>
                                        );
                                    })}
                                    </React.Fragment>
                                ) : null}
                                
                            </tbody>
                        </table> 
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default ContactList
