import React, { useRef, useEffect } from "react";
import "./project-contact.scss";
import { useForm } from "react-hook-form";
import { dynamicSort } from "../../../../../lib/helpers";
import { useTrackedState, useDispatch } from "../../../../../context/store";
import { setSelectedProjectFoundation } from "../../../../../context/selectedProject/selectedProject.actions";
import Button from "../../../../Button/Button";

import Form from "../../../../Form/Form";
import Select from "../../../../Select/Select";
import TextInput from "../../../../TextInput/TextInput";
import TextArea from "../../../../TextArea/TextArea";
import RadioGroup from "../../../../RadioGroup/RadioGroup";

const defaultValues = {
  foundation: null,
  email: null,
  phone: null,
  contactMethod: "Email",
  message: null,
};

const ProjectContact = ({ options }) => {
  const { foundations } = options;
  const sortedFoundations = foundations.sort(dynamicSort("cost"));
  const state = useTrackedState();
  const dispatch = useDispatch();
  const foundationSelect = useRef();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues });

  //when form select manually changes, change the state to match
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

  //when form submitted, do something with the data (send email)
  const onSubmit = (data) => {
    console.log(data);
  };

  //get value of form from state and when state changes, set the value in the form
  useEffect(() => {
    foundationSelect.current.setValue({
      value: state.selectedProject.foundation.index,
      label: state.selectedProject.foundation.type,
    });
  }, [foundationSelect, state.selectedProject.foundation]);

  return (
    <section className="project-contact">
      <div className="container project-contact__container">
        <h2 className="project-contact__title">Спросите об этом проекте</h2>
        <div className="project-contact__wrapper">
          <div className="project-contact__note-wrapper"></div>
          <div className="project-contact__form-wrapper">
            <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
              <Select
                ref={foundationSelect}
                fieldName="foundation"
                label="Foundation"
                control={control}
                handleChange={handleFoundationChange}
                options={sortedFoundations.map((foundation, index) => ({
                  value: index,
                  label: foundation.type.name,
                }))}
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
              />
              <TextInput
                fieldName="phone"
                register={register}
                control={control}
                errors={errors}
                label="Phone"
                customType="phone"
              />
              <RadioGroup
                fieldName="contactMethod"
                register={register}
                options={[
                  { value: "Email", label: "Email" },
                  { value: "Phone", label: "Phone" },
                ]}
              />
              <TextArea
                fieldName="message"
                label="Message"
                register={register}
                placeholder="Testing 123"
              />
              <br />
              <Button type="submit" btnSize="sm" btnColor="primary">
                Send
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectContact;
