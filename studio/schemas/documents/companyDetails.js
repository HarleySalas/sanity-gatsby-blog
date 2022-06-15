export default {
  name: "companyDetails",
  type: "document",
  title: "Company Details",
  liveEdit: false,
  __experimental_actions: ["update", /* "create", /* 'delete', */ "publish"],
  fields: [
    {
      name: "companyName",
      type: "string",
      title: "Имя компании / Official Company Name",
    },
    {
      name: "workHours",
      title: "Часы работы / Work Hours",
      type: "string",
    },
    {
      name: "companyPhone",
      title: "Контактный телефон / Company Phone",
      type: "string",
    },
    {
      name: "businessAddress",
      title: "Адрес компании / Business Address",
      type: "address",
    },
    {
      name: "companyEmail",
      title: "Email компании / Primary Communication Email",
      type: "string",
    },
    {
      name: "companyRequisites",
      title: "Реквизиты компании / Company Requisites",
      type: "companyRequisites",
    },
    {
      name: "termsOfUse",
      title: "Пользовательское соглашение / Terms of Use",
      type: "simplePortableText",
    },
    {
      name: "privacyPolicy",
      title: "Политика обработки персональных данных / Privacy Policy",
      type: "simplePortableText",
    },
  ],
};
