import React, { Component } from 'react'
import './ContactCard.css'

export class ContactCard extends Component {
    render() {
        return (
            <div>
                <h2>Contact card</h2>
                {this.props.selectedContact != null ?
                    <div className='card'>
                        <img src={this.props.selectedContact.picture.large} alt='Img Not Found'/>
                        <p>{this.props.selectedContact.name.last}</p>
                        <p>{this.props.selectedContact.gender}</p>
                        <p>{this.props.selectedContact.dob.age}</p>
                        <p>{this.props.selectedContact.email}</p>
                        <p>{this.props.selectedContact.location.city}</p>
                    </div>
                    : 'null'}
                
            </div>
        )
    }
}

export default ContactCard
