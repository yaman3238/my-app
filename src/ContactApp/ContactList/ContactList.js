import React, { Component } from 'react';
import './ContactList.css'


export class ContactList extends Component
{
    pushData = (contact) => {
        this.props.pullData(contact);
    };
    
    render() {
        return (
            <div className='contactlist'>
                <h2>Contact List</h2>
 
              <table className='table_list'>
                <thead className='table_head'>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.contactData != null ? (
                    <div className='table-content'>
                      {this.props.contactData.map((contact) => {
                        return (
                          <tr onClick={this.pushData.bind(this, contact)}>
                            <td>{contact.userId}</td>
                            <td>{contact.id}</td>

                            <td>{contact.title}</td>
                            <td>{contact.completed}</td>
                          </tr>
                        );
                      })}
                    </div>
                  ) : null}
                </tbody>
              </table>

                {/* {<pre>{ JSON.stringify(this.props.contactList)}</pre>} */}
                
            </div>
        )
    }
}

export default ContactList
