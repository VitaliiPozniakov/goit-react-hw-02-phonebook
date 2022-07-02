import React from 'react';
// import { Label, LabelText, Btn, BtnWraper } from './ContactForm.styled';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import styled from "@emotion/styled";
import * as yup from 'yup';




const schema = yup.object().shape({
  name: yup.string().min(2).max(32).required(),
  number: yup.string().min(6).max(16).required(),
 });


 const initialValues = {
   name: "",
   number: "",
 }



 const ContactForm = ({ onSubmitProp }) => {


  const handleSubmit = (values, actions) => {
  const { name, number } = values;
  onSubmitProp(name, number);
    actions.resetForm()
  }



// const handleSubmit = evt => {
//   evt.preventDefault();
//   const { name, number } = this.state;
//   this.props.onSubmitProp(name, number);
//   this.reset();
// };

// reset = () => {
//   this.setState({ name: '', number: '' });
// };


return (
  <Formik
  initialValues={initialValues}
  onSubmit={handleSubmit}
  validationSchema={schema}
  >
  <Form className={css.forma}>
    <label htmlFor='name' className={css.label}>
      <span className={css.labelText}>Name</span>
      <Field
        type="text"
        name="name"
        className={css.input}
      />
        <ErrorMessage name="name" component="span" className={css.error}/>
    </label>
    <label htmlFor='number' className={css.label}>
      <span className={css.labelText}>Number</span>
      <Field
        type="tel"
        name="number"
        className={css.input}
      />
        <ErrorMessage name="number" component="span" className={css.error}/>
    </label>
    <div className={css.btnWraper}><button type="submit" className={css.btn}>
      Add contact
    </button></div>
  </Form>
  </Formik>
);
};

export default ContactForm

ContactForm.prototype = {
  onSubmitProp: PropTypes.func.isRequired,
};








// const Forma = styled(Form)`
// display: flex;
// flex-direction: column;
// border: 1px solid rgba(238, 238, 238, 1);
// width: 100wh;

// @media screen and (min-width: 768px) {
//     width: 700px;
//   }
// `;

