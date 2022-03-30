import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import { v4 as uuid } from "uuid";
import Input from "../../components/Input";
import Button from "../../components/Button";
import loginAdmintSchema from "./loginAdminSchema";

const addCheckout = (checkout) => {
  return {
    id: uuid(),
    ...checkout,
  };
};


const LoginAdmin = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [newAccount, setNewAccount] = useState("");
  console.log(newAccount);

  const formik = useFormik({
    initialValues: {
      name: (newAccount) ? newAccount.name : "",
      lastName: (newAccount) ? newAccount.lastName : "",
      email: (newAccount) ? newAccount.email : "",
      password: (newAccount) ? newAccount.password : "",
    },
    validationSchema: loginAdmintSchema,
    onSubmit: (values, { setSubmitting }) => {
      const newAccountTemp = addCheckout(values);
      setNewAccount(newAccountTemp);
      setSubmitting(true);

      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });
  return (


    <div className="col-8 pr-5 ">
    <form onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        name="name"
        id="name"
        label="Name"
        value={formik.values.name}
        placeholder="name"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.name}
        errorMessage={formik.errors.name}
      />
      <Input
        type="text"
        name="lastName"
        id="lastName"
        label="Last name"
        value={formik.values.lastName}
        placeholder="last name"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.lastName}
        errorMessage={formik.errors.lastName}
      />
      <Input
        type="email"
        name="email"
        id="email"
        label="Email"
        value={formik.values.email}
        placeholder="email"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.email}
        errorMessage={formik.errors.email}
      />
      <Input
        type="password"
        id="password"
        name="password"
        label="Password"
        value={formik.values.password}
        placeholder="password"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.password}
        errorMessage={formik.errors.password}
      />
      <div className="d-flex">
        <div className="col-10 d-flex  justify-content-center">
          <Button
            className="col-5 btn btn-primary  p-1 mt-3"
            submitButton
            block
            disabled={formik.isValidating || !formik.isValid}
          >
            {formik.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </div>
    </form>
    {/* {hasSubmitted && <Redirect to="/checkout/step-2" />} */}
  </div>


    // <div class="grid min-h-screen place-items-center">
    //   <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
    //     <form class="mt-6">
    //       <div class="flex justify-between gap-3">
    //         <span class="w-1/2">
    //           <label
    //             for="firstname"
    //             class="block text-xs font-semibold text-gray-600 uppercase"
    //           >
    //             Firstname
    //           </label>
    //           <input
    //             id="firstname"
    //             type="text"
    //             name="firstname"
    //             placeholder="John"
    //             autocomplete="given-name"
    //             class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    //             required
    //           />
    //         </span>
    //         <span class="w-1/2">
    //           <label
    //             for="lastname"
    //             class="block text-xs font-semibold text-gray-600 uppercase"
    //           >
    //             Lastname
    //           </label>
    //           <input
    //             id="lastname"
    //             type="text"
    //             name="lastname"
    //             placeholder="Doe"
    //             autocomplete="family-name"
    //             class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    //             required
    //           />
    //         </span>
    //       </div>
    //       <label
    //         for="email"
    //         class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
    //       >
    //         E-mail
    //       </label>
    //       <input
    //         id="email"
    //         type="email"
    //         name="email"
    //         placeholder="john.doe@company.com"
    //         autocomplete="email"
    //         class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    //         required
    //       />
    //       <label
    //         for="password"
    //         class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
    //       >
    //         Password
    //       </label>
    //       <input
    //         id="password"
    //         type="password"
    //         name="password"
    //         placeholder="********"
    //         autocomplete="new-password"
    //         class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    //         required
    //       />
    //       <label
    //         for="password-confirm"
    //         class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
    //       >
    //         Confirm password
    //       </label>
    //       <input
    //         id="password-confirm"
    //         type="password"
    //         name="password-confirm"
    //         placeholder="********"
    //         autocomplete="new-password"
    //         class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    //         required
    //       />
    //       <button
    //         type="submit"
    //         class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
    //       >
    //         Sign up
    //       </button>
    //       <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
    //         Already registered?
    //       </p>
    //     </form>
    //   </div>
    // </div>
  );
};

export default LoginAdmin;
