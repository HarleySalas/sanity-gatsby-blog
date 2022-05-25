import React, { useRef, useEffect } from "react";
import "./project-contact.scss";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { dynamicSort } from "../../../../../lib/helpers";
import { useTrackedState, useDispatch } from "../../../../../context/store";
import { setSelectedProjectFoundation } from "../../../../../context/selectedProject/selectedProject.actions";
import Button from "../../../../Button/Button";

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
    watch,
    formState: { errors },
  } = useForm();

  //when form select manually changes, change the state to match
  const handleFoundationChange = (e) => {
    if (e.value !== state.selectedProject.foundation.index) {
      dispatch(
        setSelectedProjectFoundation({
          foundation: sortedFoundations[e.value],
          index: e.value,
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
            <form
              className="project-contact__form"
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
            >
              {/* <select
                className="project-contact__form__item project-contact__form__select"
                {...register("foundation")}
                ref={foundationSelect}
                onChange={(e) => handleFoundationChange(e)}
              >
                {sortedFoundations.map((foundation, index) => (
                  <option
                    value={index}
                    className="project-contact__form__item project-contact__form__option"
                    key={index}
                  >
                    {foundation.type.name}
                  </option>
                ))}
              </select> */}
              <Controller
                name="foundation"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    ref={foundationSelect}
                    onChange={(e) => handleFoundationChange(e)}
                    className="project-contact__form__item project-contact__form__select"
                    options={sortedFoundations.map((foundation, index) => ({
                      value: index,
                      label: foundation.type.name,
                    }))}
                  />
                )}
              />
              <input
                type="text"
                className="project-contact__form__item project-contact__form__input"
                {...register("email")}
              />
              <input
                type="phone"
                {...register("phone")}
                className="project-contact__form__item project-contact__form__input"
              />
              {/* {errors.exampleRequired && <span>This field is required</span>} */}
              <textarea
                {...register("message")}
                className="project-contact__form__item project-contact__form__textarea"
              ></textarea>
              {/* <input type="submit" /> */}
              <Button type="submit" btnSize="sm" btnColor="grey">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectContact;
