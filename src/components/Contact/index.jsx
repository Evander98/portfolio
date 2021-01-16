import React, { useState } from 'react'
import { ContactContainer, ContactWrapper, Title, ContactItem, ItemWrapper, ContactInput, FormItem, FormItemWrapper, NameWrapper, NameInput, FormNameWrapper, Message } from './ContactElements'
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { ContactMeButton } from '../../config/buttons'
import { urlAPI } from '../../config/urlAPI'
import Axios from 'axios'
import Swal from 'sweetalert2'
const Contact = () => {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const submitHandler = () => {
        let data = {
            fName,
            lName,
            email,
            subject,
            message
        }
        if(fName=='' || lName=='' || email=='' || subject=='' || message==''){
            alert('Fill all the fields!')
        } else{
            Axios.post(urlAPI + '/mail/send-mail', data)
            .then((res) => {
                Swal.fire(
                    'Thank you!',
                    'Your email has been sent!',
                    'success'
                )
                setFName('')
                setLName('')
                setEmail('')
                setSubject('')
                setMessage('')
            })
            .catch((err) => {
                console.log(err)
                Swal.fire(
                    'Sorry!',
                    'Server Error!',
                    'error'
                )
            })
        }
    }
    return (
        <ContactContainer>
            <Title>
                Contact Me
            </Title>
            <ContactWrapper>
                <ItemWrapper>
                    <ContactItem>
                        <FaMapMarkerAlt/>
                    </ContactItem>
                    <ContactItem>
                        Banggai Laut, Central Sulawesi, Indonesia
                    </ContactItem>
                </ItemWrapper>
                <ItemWrapper>
                    <ContactItem>
                        <FaPhone/>
                    </ContactItem>
                    <ContactItem>
                        +62 822 9330 1798
                    </ContactItem>
                </ItemWrapper>
                <ItemWrapper>
                    <ContactItem>
                        <MdEmail/>
                    </ContactItem>
                    <ContactItem>
                        evanderkristalino@gmail.com
                    </ContactItem>
                </ItemWrapper>
            </ContactWrapper>
            <ContactWrapper>
                <NameWrapper>
                    <FormNameWrapper>
                        <FormItem>
                            First Name
                        </FormItem>
                        <NameInput type='text' value={fName} onChange={e => setFName(e.target.value)}/>
                    </FormNameWrapper>
                    <FormNameWrapper>
                        <FormItem>
                            Last Name
                        </FormItem>
                        <NameInput type='text' value={lName} onChange={e => setLName(e.target.value)}/>
                    </FormNameWrapper>
                </NameWrapper>
                <FormItemWrapper>
                    <FormItem>
                        Email
                    </FormItem>
                    <ContactInput type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                </FormItemWrapper>
                <FormItemWrapper>
                    <FormItem>
                        Subject
                    </FormItem>
                    <ContactInput type='text' value={subject} onChange={e => setSubject(e.target.value)}/>
                </FormItemWrapper>
                <FormItemWrapper>
                    <FormItem>
                        Message
                    </FormItem>
                    <Message rows='8' value={message} onChange={e => setMessage(e.target.value)}/>
                </FormItemWrapper>
                <ContactMeButton onClick={submitHandler}>Send Message</ContactMeButton>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact
