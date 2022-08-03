import React from 'react'
import { useState} from 'react';
import { AccountForm } from './styles/AccountForm';
import { CreateAccountStyles } from './styles/CreateAccountStyle';


export default function Accounts(props) {
    const { account, setAccount } = props;
    const [accountFirstName, setAccountFirstName] = useState('');
    const [accountLastName, setAccountLastName] = useState('');
    const [elements, setElements] = useState("");

    const newAccount = {
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
      const submitAccount = (event) => {
        event.preventDefault();
        setAccount(newAccount)
        setElements(createElements())
      };
  return (
    <AccountForm>
    <form onSubmit={submitAccount}>
        <img src="" alt="" />
        <CreateAccountStyles>
        <div>
            <input value={accountFirstName} onChange={handleFirstNameChange} />
            <input value={accountLastName} onChange={handleLastNameChange} />
            <button>Add new account</button>
        </div>
        </CreateAccountStyles>
        {elements}
    </form>
    </AccountForm>
  )
 }
