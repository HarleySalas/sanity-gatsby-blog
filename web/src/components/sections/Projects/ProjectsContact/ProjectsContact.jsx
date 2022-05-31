import React from "react";
import { useForm } from "react-hook-form";
import "./projects-contact.scss";

import Form from "../../../Form/Form";
import TextInput from "../../../TextInput/TextInput";
import TextArea from "../../../TextArea/TextArea";
import RadioGroup from "../../../RadioGroup/RadioGroup";
import Button from "../../../Button/Button";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  contactMethod: "Email",
  message: "",
};

const ProjectsContact = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="projects-contact">
      <div className="container projects-contact__container">
        <div className="projects-contact__text-wrapper">
          <div className="projects-contact__title">Свяжитесь с нами</div>
          <div className="projects-contact__info">
            Не нашли, что искали?
            <br />
            Мы также вносим изменения в существующие проекты и разрабатываем
            индивидуальные!
          </div>
        </div>
        <div className="projects-contact__wrapper">
          <div className="projects-contact__form">
            <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
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
              <RadioGroup
                title="Предпочтительный способ связи"
                fieldName="contactMethod"
                register={register}
                options={[
                  { value: "Email", label: "Email" },
                  { value: "Phone", label: "Телефон" },
                ]}
              />
              <TextArea
                fieldName="message"
                label="Комментарий"
                register={register}
                placeholder="Расскажите о ваших пожеланиях к проекту."
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

export default ProjectsContact;
