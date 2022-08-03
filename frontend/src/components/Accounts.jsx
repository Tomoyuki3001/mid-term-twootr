import React from 'react'
import { useState} from 'react';
import { AccountForm } from './styles/AccountForm';
import { CreateAccountStyles } from './styles/CreateAccountStyle';


export default function Accounts(props) {
    const { account, setAccount} = props;
    const [accountFirstName, setAccountFirstName] = useState('');
    const [accountLastName, setAccountLastName] = useState('');
    const [elements, setElements] = useState("");
    const [accountAvatar, setAvatar] = useState('');
    const newAccount = {
      avatar: accountAvatar,
      name: accountFirstName + " " + accountLastName,
      slug: accountFirstName + "-" + accountLastName
    };
    
      const handleFirstNameChange = (e) => {
        setAccountFirstName(e.target.value);
      };
      const handleLastNameChange = (e) => {
        setAccountLastName(e.target.value)
      };

      const createElements = () => {
        return (
        <div>
        <p>{newAccount.name}</p>
        <p>@{newAccount.slug}</p>
        </div>
      )}
      const handleAvatarChange = (e) => {
        setAccountLastName(e.target.value)
      };
      const submitAccount = (event) => {
        event.preventDefault();
        setAccountFirstName(event.target[0].value)
        setAccountLastName(event.target[1].value)
        setAvatar(event.target[2].value)
        setAccount(newAccount)
        setElements(createElements())
      };
  return (
    <AccountForm>
    <form onSubmit={submitAccount} >
        <img value={accountAvatar} onChange={handleAvatarChange} src="https://avatars.dicebear.com/api/bottts/${newAccount.Slug}.svg" alt="" />
        <CreateAccountStyles>
        <div>
            <input value={accountFirstName} onChange={handleFirstNameChange} />
            <input value={accountLastName} onChange={handleLastNameChange} />
            <button type='submit'>Add new account</button>
            <i class="fas fa-edit"></i>
        </div>
        </CreateAccountStyles>
        {elements}
    </form>
    </AccountForm>
  )
  }
