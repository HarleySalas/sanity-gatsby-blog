import React from "react";
import { useForm } from "react-hook-form";
import "./contact-form.scss";

import Form from "../Form/Form";
import TextInput from "../TextInput/TextInput";
import TextArea from "../TextArea/TextArea";
import RadioGroup from "../RadioGroup/RadioGroup";
import Button from "../Button/Button";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  contactMethod: "Email",
  message: "",
  formId: "contact-form",
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ defaultValues });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit = (data, event) => {
    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...data }),
    })
      .then((response) => {
        reset();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  };

  return (
    <section className="contact-form">
      <div className="container contact-form__container">
        <h2 className="contact-form__title">Свяжитесь с нами</h2>
        <p className="contact-form__info">Есть вопрос?</p>
        <div className="contact-form__wrapper">
          <div className="contact-form__form">
            <Form
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              register={register}
            >
              <TextInput
                fieldName="name"
                register={register}
                control={control}
                errors={errors}
                isRequired={true}
                label="Имя"
                width="1"
              />
              <TextInput
                fieldName="email"
                register={register}
                control={control}
                errors={errors}
                isRequired={true}
                type="email"
                customType="email"
                label="Email"
                width="1/2"
              />
              <TextInput
                fieldName="phone"
                register={register}
                control={control}
                errors={errors}
                label="Телефон"
                customType="phone"
                width="1/2"
              />

              <TextArea
                fieldName="message"
                label="Комментарий"
                register={register}
                placeholder=""
              />
              <RadioGroup
                title="Предпочтительный способ связи"
                fieldName="contactMethod"
                register={register}
                options={[
                  { value: "Email", label: "Email" },
                  { value: "Phone", label: "Телефон" },
                ]}
              />
              <Button type="submit" btnSize="sm" btnColor="primary" center>
                Отправить
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
