import React from "react";
import { useState, useEffect } from "react";

export default function Accounts(props) {
  const { account, setAccount } = props;
  const [accountValue, setAccountValue] = useState(true);

  const handleFirstNameChange = (e) => {
    setAccount({
      ...account,
      firstName: `${e.target.value}`,
      slug: `${e.target.value}-${account.lastName}`,
    });
  };
  const handleLastNameChange = (e) => {
    setAccount({
      ...account,
      lastName: `${e.target.value}`,
      slug: `${account.firstName}-${e.target.value}`,
    });
  };

  const changeValue = (event) => {
    event.preventDefault();
    account.firstName = "";
    account.lastName = "";
    account.slug = "";
    setAccountValue(!accountValue);
  };

  const submitAccount = (event) => {
    event.preventDefault();
    setAccountValue(!accountValue);
  };

  useEffect(() => {
    account.firstName = "Default";
    account.lastName = "Name";
    account.slug = "Default-Name";
  }, []);

  const defaultElement = (
    <div className="account-form">
      <img
        className="create-account-image"
        src={`https://avatars.dicebear.com/api/bottts/${account.slug}.svg`}
        alt=""
      />
      <div className="create-account-box">
        <p className="create-account-name">
          {account.firstName} {account.lastName}
        </p>
        <button
          className="create-account-button"
          type="submit"
          onClick={changeValue}
        >
          <i class="fas fa-edit"></i>
        </button>
      </div>
      <p className="ceate-account-slug">@{account.slug}</p>
    </div>
  );

  const changedElement = (
    <div className="account-form">
      <img
        className="create-account-image"
        src={`https://avatars.dicebear.com/api/bottts/${account.slug}.svg`}
        alt=""
      />
      <form className="create-account-clicked">
        <div className="account-input-box">
          <input
            type="text"
            className="create-account-input"
            onChange={handleFirstNameChange}
          />
          <input
            type="text"
            className="create-account-input"
            onChange={handleLastNameChange}
          />
          <button
            className="create-account-button"
            type="submit"
            onClick={submitAccount}
          >
            <i class="fas fa-edit"></i>
          </button>
        </div>
        <div className="create-account-name-box">
          <p className="ceate-account-name">
            {account.firstName} {account.lastName}
          </p>
          <p className="ceate-account-slug">@{account.slug}</p>
        </div>
      </form>
    </div>
  );

  return <form>{accountValue ? defaultElement : changedElement}</form>;
}
