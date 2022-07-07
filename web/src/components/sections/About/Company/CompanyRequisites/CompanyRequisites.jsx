import React from "react";
import InlineLink from "../../../../InlineLink/InlineLink";
import "./company-requisites.scss";

const List = ({ children, sub, flex }) => {
  return (
    <ul
      className={`company-requisites__ul ${
        sub ? "company-requisites__ul--sub" : null
      }
      ${flex ? "company-requisites__ul--flex" : null}`}
    >
      {children}
    </ul>
  );
};
const ListItem = ({ children, label, sub }) => {
  return (
    <li className="company-requisites__li">
      {sub ? (
        <h4 className="company-requisites__label company-requisites__label--sub">
          {label}
        </h4>
      ) : (
        <h3 className="company-requisites__label">{label}</h3>
      )}
      {sub ? (
        <div className="company-requisites__text company-requisites__text--sub">
          {children}
        </div>
      ) : (
        <div className="company-requisites__text">{children}</div>
      )}
    </li>
  );
};

const CompanyRequisites = ({ data }) => {
  console.log(data);
  return (
    <section className="company-requisites">
      <div className="container company-requisites__container">
        <hr />
        <h2 className="company-requisites__title">Реквизиты компании</h2>
        <List flex>
          <ListItem label="Генеральный директор">
            {data.generalDirector}
          </ListItem>
          <ListItem label="Главный бухгалтер">{data.headAccountant}</ListItem>
          <ListItem label="ИНН">{data.taxNumber}</ListItem>
          <ListItem label="КПП">{data.registrationCode}</ListItem>
          <ListItem label="Юридический адрес">
            {data.registeredAddress.streetAddress}
            <br />
            {data.registeredAddress.city}
            <br />
            {data.registeredAddress.region}
            <br />
            {data.registeredAddress.zipcode}
          </ListItem>
          <ListItem label="Почтовый адрес">
            {data.physicalAddress.streetAddress}
            <br />
            {data.physicalAddress.city}
            <br />
            {data.physicalAddress.region}
            <br />
            {data.physicalAddress.zipcode}
          </ListItem>
          <ListItem label="Телефон">{data.companyPhone}</ListItem>
          <ListItem label="р/сч">{data.bankAccountNumber}</ListItem>
          <ListItem label="Банк">
            <List sub>
              <ListItem label="Назвоние банка" sub>
                {data.bank.name}
              </ListItem>
              <ListItem label="к/с" sub>
                {data.bank.correspondingAccount}
              </ListItem>
              <ListItem label="БИК" sub>
                {data.bank.identificationCode}
              </ListItem>
            </List>
          </ListItem>
          <ListItem label="ОКВЭД">{data.activityClassification}</ListItem>
          <ListItem label="ОКПО">{data.businessClassification}</ListItem>
          <ListItem label="ОКТМО">{data.territoryNumber}</ListItem>
          <ListItem label="ОГРН">{data.stateRegistrationNumber}</ListItem>
          <ListItem label="Контактные email">
            {data.contactEmails.map((email, index) => (
              <div key={index}>
                <InlineLink external linkTo={`mailTo:${email}`} sameWeight>
                  {email}
                </InlineLink>
              </div>
            ))}
          </ListItem>
        </List>
      </div>
    </section>
  );
};

export default CompanyRequisites;
