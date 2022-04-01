import React from "react";
import { Formik, Form, Field } from "formik";

const NewProduct = () => {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="title" placeholder="title" />
            <Field name="description" placeholder="description" />
            <button type="submit" className=" bg-blue-900 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:shadow-outline shadow-2xl">
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewProduct;
