import React from 'react'
import { useState} from 'react';
import { AccountForm } from './styles/AccountForm';
import { CreateAccountStyles } from './styles/CreateAccountStyle';


export default function Accounts(props) {
    const { account, setAccount } = props;
    const [accountFirstName, setAccountFirstName] = useState('');
    const [accountLastName, setAccountLastName] = useState('');
    const newAccount = {
      name: accountFirstName + " " + accountLastName,
      slug: "@" + accountFirstName + "-" + accountLastName
    };
    
      const handleFirstNameChange = (e) => {
        setAccountFirstName(e.target.value);
      };
      const handleLastNameChange = (e) => {
        setAccountLastName(e.target.value)
      };
      const submitAccount = (event) => {
        event.preventDefault();
        setAccountFirstName(event.target[0].value)
        setAccountLastName(event.target[1].value)
        setAccount(newAccount)
        // console.log("account", account);
      };
  return (
    <AccountForm>
    <form onSubmit={submitAccount} >
        <img src="" alt="" />
        <CreateAccountStyles>
        <div>
            <input value={accountFirstName} onChange={handleFirstNameChange} />
            <input value={accountLastName} onChange={handleLastNameChange} />
            <button type='submit'>Add new account</button>
        </div>
        </CreateAccountStyles>
        <p>{account.name}</p>
        <p>{account.slug}</p>
    </form>
    </AccountForm>
  )
}
