export default {
  name: "companyRequisites",
  type: "object",
  title: "Реквизиты компании / Company Requisites",
  fields: [
    {
      name: "generalDirector",
      title: "Генеральный директор / General Director",
      type: "string",
    },
    {
      name: "headAccountant",
      title: "Главный бухгалтер / Head Accountant",
      type: "string",
    },
    {
      name: "taxNumber",
      title: "ИНН / Taxpayer Identification Number",
      type: "string",
    },
    {
      name: "registrationCode",
      title: "КПП / Registration Reason Code",
      type: "string",
    },
    {
      name: "registeredAddress",
      title: "Юридический адрес / Registered Address",
      type: "address",
    },
    {
      name: "physicalAddress",
      title: "Почтовый адрес (фактический) / Mailing/Physical Address",
      type: "address",
    },
    {
      name: "companyPhone",
      title: "Телефон    / Company Phone",
      type: "string",
    },
    {
      name: "bankAccountNumber",
      title: "р/сч / Bank Account Number",
      type: "string",
    },
    {
      name: "bank",
      title: "Банк / Bank",
      type: "bank",
    },
    {
      name: "activityClassification",
      title: "ОКВЭД / Activity Classification",
      type: "string",
    },
    {
      name: "businessClassification",
      title: "ОКПО / Business Classification",
      type: "string",
    },
    {
      name: "territoryNumber",
      title: "ОКТМО / Territory Number",
      type: "string",
    },
    {
      name: "stateRegistrationNumber",
      title: "ОГРН / State Registration Number",
      type: "string",
    },
    {
      name: "contactEmails",
      title: "Contact Emails",
      type: "array",
      of: [{ name: "email", type: "string", title: "Email" }],
    },
  ],
};
