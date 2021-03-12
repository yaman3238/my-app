import React, { Component } from 'react';
import ContactList from '../ContactList/ContactList';
import ContactCard from "../ContactCard/ContactCard";
import './ContactApp.css';
import Axios from 'axios';

export class ContactApp extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            contacts: [],
            errMsg: null,
            selectedContact: null
        }
    }

    pullData = (contact) => {
        this.setState({
          selectedContact: contact,
        });
      };
    
    componentDidMount()
    {
        let URL = "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
        Axios.get(URL).then((response) =>
        {
            this.setState({
                contacts: response.data
            })
            
        }).catch((err) =>
        {
            this.setState({ errMsg : err})
        })
    }



    render()
    {
        return (
            <div>
                 <div className='container'>
                    <div className='row'>
                        <div className='col'>
                             <h2 className='bg-primary'>Contact App</h2>
                        </div>
                        
                    </div>
                </div>
                
                
                {/* <pre>{ JSON.stringify(this.state.contacts)}</pre> */}
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9'>
                            <ContactList contactData={this.state.contacts} pullData={this.pullData} />
                        </div>
                        
                        <div className='col-md-3'>
                        <ContactCard selectedContact={this.state.selectedContact} />
                        </div>

                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default ContactApp
