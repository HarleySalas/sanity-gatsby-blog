import React, { useEffect, useRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./contact-form.scss";

import Form from "../Form/Form";
import TextInput from "../TextInput/TextInput";
import Select from "../Select/Select";
import TextArea from "../TextArea/TextArea";
import RadioGroup from "../RadioGroup/RadioGroup";
import Button from "../Button/Button";
import { useTrackedState, useDispatch } from "../../context/store";
import {
  setSelectedProjectFinishing,
  setSelectedProjectFoundation,
} from "../../context/selectedProject/selectedProject.actions";
import { setSharedStateCurrentPageContactSection } from "../../context/sharedState/sharedState.actions";
import { dynamicSort } from "../../lib/helpers";
import InlineLink from "../InlineLink/InlineLink";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  contactMethod: "Email",
  message: "",
};

const ContactForm = ({ location, title, options }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ defaultValues });

  const contactSectionRef = useRef(null);

  const foundations = options ? options.foundations : null;
  const finishes = options ? options.finishes : null;

  const sortedFoundations = foundations
    ? foundations.sort(dynamicSort("cost"))
    : null;

  const sortedFinishes = finishes ? finishes.sort(dynamicSort("cost")) : null;

  const state = useTrackedState();
  const dispatch = useDispatch();
  const foundationSelect = useRef();
  const finishSelect = useRef();

  const paths = location ? location.pathname.split("/").filter(Boolean) : null;
  const isProjectPage = paths
    ? paths[0] === "projects" && paths.length === 2
    : false;

  useEffect(() => {
    if (contactSectionRef.current) {
      dispatch(
        setSharedStateCurrentPageContactSection({
          contactSection: contactSectionRef,
        })
      );
    }
  }, [contactSectionRef, dispatch]);

  const handleFoundationChange = (selectedOption) => {
    if (selectedOption.value !== state.selectedProject.foundation.index) {
      dispatch(
        setSelectedProjectFoundation({
          foundation: sortedFoundations[selectedOption.value],
          index: selectedOption.value,
        })
      );
    }
  };

  const handleFinishChange = (selectedOption) => {
    if (selectedOption.value !== state.selectedProject.finish.key) {
      let selectedFinish = sortedFinishes.find(
        (finish) => finish._key === selectedOption.value
      );
      dispatch(
        setSelectedProjectFinishing({
          finish: {
            _key: selectedFinish._key,
            type: selectedFinish.type,
            cost: selectedFinish.cost,
          },
        })
      );
    }
  };

  const setFoundationSelect = useCallback(() => {
    options &&
      foundationSelect.current &&
      foundationSelect.current.setValue({
        value: state.selectedProject.foundation.index,
        label: state.selectedProject.foundation.type,
      });
  }, [options, foundationSelect, state.selectedProject.foundation]);

  const setFinishSelect = useCallback(() => {
    options &&
      finishSelect.current &&
      finishSelect.current.setValue({
        value: state.selectedProject.finish.key,
        label: state.selectedProject.finish.type,
      });
  }, [options, finishSelect, state.selectedProject.finish]);

  useEffect(() => {
    setFoundationSelect();
  }, [setFoundationSelect]);

  useEffect(() => {
    setFinishSelect();
  }, [setFinishSelect]);

  const onSubmit = async (data, event) => {
    const results = await axios.post(
      "/.netlify/functions/contact",
      {
        formId: "contact-form",
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        preferredMethod: data.contactMethod,
        location: location ? location.pathname : null,
        projectName: isProjectPage
          ? location.pathname.split("/").pop().toUpperCase()
          : null,
        projectFinish: isProjectPage ? data.finish && data.finish.label : null,
        projectFoundation: isProjectPage
          ? data.foundation && data.foundation.label
          : null,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      }
    );
    console.log(results);
    reset();
    setFoundationSelect();
    setFinishSelect();
    event.preventDefault();
  };

  return (
    <section className="contact-form" ref={contactSectionRef}>
      <div className="container contact-form__container">
        {title ? (
          <>
            {title.prefix ? (
              <p className="contact-form__title">{title.prefix}</p>
            ) : null}
            {title.title ? (
              <h2 className="contact-form__info">
                <span className="contact-form__info__span">{title.title}</span>
              </h2>
            ) : null}
          </>
        ) : (
          <>
            <p className="contact-form__title">Свяжитесь с нами</p>
            <h2 className="contact-form__info">Есть вопрос?</h2>
          </>
        )}

        <div className="contact-form__wrapper">
          <div className="contact-form__form">
            <Form
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              register={register}
            >
              {options && options.finishes ? (
                <Select
                  ref={finishSelect}
                  fieldName="finish"
                  label="Отделка"
                  control={control}
                  handleChange={handleFinishChange}
                  options={sortedFinishes.map((finish) => ({
                    value: finish._key,
                    label: finish.type,
                  }))}
                />
              ) : null}
              {options && options.foundations ? (
                <Select
                  ref={foundationSelect}
                  fieldName="foundation"
                  label="Фундамент"
                  control={control}
                  handleChange={handleFoundationChange}
                  options={sortedFoundations.map((foundation, index) => ({
                    value: index,
                    label: foundation.type.name,
                  }))}
                />
              ) : null}
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
              <p className="contact-form__notice">
                Нажимая на кнопку «Отправить», вы соглашаетесь с обработкой
                ваших персональных данных,{" "}
                <InlineLink linkTo="/privacy-policy" sameWeight>
                  политикой конфиденциальности
                </InlineLink>{" "}
                и{" "}
                <InlineLink linkTo="/terms-of-use" sameWeight>
                  пользовательским соглашением
                </InlineLink>
              </p>
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
