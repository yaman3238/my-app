import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import ContactList from './ContactList'
import ContactCard from './ContactCard'

let ContactAppHooks = () =>
{
    let [contact, setContact] = useState({
        contacts: [],
        errMsg: null,
        selectedContact:null
    })

    let pullData = (contact) =>
    {
        setContact({selectedContact:contact})
        
    }

    useEffect(() =>
    {
        Axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
            .then((response) =>
        {
            setContact({...contact,contacts:response.data})
        }).catch((err) =>
        {
            setContact({errMsg:err})
        })
    },[contact])

    return <>
         <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <ContactList contactData={contact.contacts} pullData={pullData} />
                    </div>
                    <div className='col-md-4'>
                        <ContactCard selectedContact={contact.selectedContact}/>
                    </div>
                 </div>
        </div>
        
    </>
}

export default ContactAppHooks