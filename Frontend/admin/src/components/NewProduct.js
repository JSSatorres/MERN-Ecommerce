import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { validateYupSchema } from "formik";

import * as yup from "yup";

async function createProduct(values) {
  const request = await fetch("http://localhost:4000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: values.title,
      description: values.description,
    }),
  });
  if (!request.ok) {
    throw new Error("este erro haciendo un post");
  }
  return request.json;
}

const NewProduct = () => {
  const queryClientProducts = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation(
    createProduct,
    {
      onSettled: () => console.log("ejecutado el post"),
    },
    {
      onSuccess: (request) => {
        queryClientProducts.setQueriesData("PRODUCTS", (oldData) => {
          return {
            ...oldData,
            data: [
              ...oldData.data,
              {
                title: request.title,
                description: request.description,
              },
            ],
          };
        });
      },
    },
    {
      onError: () => console.log("error"),
    }
  );

  const handleMutation = () => {
    mutation.mutate();
  };
  return (
    <div className=" flex items-center justify-center ">
      <div className="  p-10 m-10 shadow-lg shadow-black">
        <Formik
          initialValues={{
            title: "",
            description: "",
            // image: null,
          }}
          validationSchema={yup.object({
            title: yup.string().required("title is required"),
            description: yup.string().required("description is required"),
          })}
          onSubmit={async (values, actions) => {
            console.log(values);

            await createProduct(values);
            navigate("/home");
          }}
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <label
                htmlFor="title"
                className="text-sm block font-bold text-gray-700"
              >
                title
              </label>
              <Field
                name="title"
                placeholder="insert title"
                className="px-3 py-2 focus:outline:none rounde bg-gray-100 my-2"
              />
              <ErrorMessage
                name="title"
                className="text-red-400 text-sm"
                component="p"
              />
              <label
                htmlFor="description"
                className="text-sm block font-bold text-gray-700"
              >
                description
              </label>
              <Field
                name="description"
                placeholder="insert description"
                component="textarea"
                className="px-3 py-2 focus:outline:none rounde bg-gray-100 my-2"
              />
              <ErrorMessage
                name="description"
                className="text-red-400 text-sm"
                component="p"
              />
              <label
                htmlFor="title"
                className="text-sm block font-bold text-gray-700"
              >
                image
              </label>
              <input
                type="file"
                name="image"
                className="px-3 py-2 focus:outline:none rounde bg-gray-100 my-2"
                onChange={(e) => console.log(e.target.files[0])}
              />
              <button
                type="submit"
                className="my-5 block bg-blue-900 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:shadow-outline shadow-2xl"
                onClick={handleMutation}
              >
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewProduct;
