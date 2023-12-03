import React from 'react';
import { CallsContacts } from '../../data/calls';
import ContactCard from './contact-card';
import "./right-fold.css";

function RightFold() {
    const contactList = CallsContacts;
    return (
        <div className='rightFold'>
            <label className="teams-title">Contacts</label>
            <div className='rightFold-heading'>
            </div>
            <div className='rightFold-options'>
                <div className='contact-search'>
                    <input type="text" placeholder='Find a Contact'/>
                    <div className='contact-search-icon'>
                        <i className='fi-rr-search'></i>
                    </div>
                </div>
                <div className='add-button'>
                    <div className='add-icon'>
                        <i className='fi-rr-user-add'></i>
                    </div>
                    <label className="add-label">Add Contact</label>
                </div>
            </div>
            <div className='contact-list'>
                {contactList.map((contact => {
                    return <ContactCard contact={contact} />
                }))}
            </div>
        </div>
    )
}

export default RightFold