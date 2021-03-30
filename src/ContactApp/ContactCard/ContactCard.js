import React, { Component } from 'react'
import './ContactCard.css'

export class ContactCard extends Component {
    render() {
        return (
            <div>
                <h2>Contact card</h2>
                {this.props.selectedContact != null ?
                    <div className='card'>
                        {/* <img src={this.props.selectedContact.picture.large} alt='Img Not Found'/> */}
                        <p>{this.props.selectedContact.userId}</p>
                        <p>{this.props.selectedContact.id}</p>
                        <p>{this.props.selectedContact.title}</p>
                        <p>{this.props.selectedContact.completed}</p>
                    </div>
                    : 'null'}
                
            </div>
        )
    }
}

export default ContactCard
