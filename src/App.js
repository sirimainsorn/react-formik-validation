import React from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { GlobalAction } from "./store/global/global.action";

export default function App() {
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.globalReducer);

  return (
    <div className="h-full bg-gray-300 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg mx-auto">
        <Formik
          initialValues={formData}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Email cannot be null.";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = "Invalid email address";
            }

            if (!values.firstName) {
              errors.firstName = "First Name cannot be null.";
            }

            if (!values.lastName) {
              errors.lastName = "Last Name cannot be null.";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-6">
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  First Name
                </label>
                <input
                  type="firstName"
                  name="firstName"
                  onChange={(evt) => {
                    handleChange(evt);
                    dispatch(
                      GlobalAction.changeFormCodeData({
                        name: evt.target.name,
                        value: evt.target.value,
                      })
                    );
                  }}
                  onBlur={handleBlur}
                  value={formData.firstName}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none ${errors.firstName && touched.firstName ? "border-red-500" : ""}`}
                />
                {errors.firstName && touched.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
              </div>

              <div className="mb-6">
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Last Name
                </label>
                <input
                  type="lastName"
                  name="lastName"
                  onChange={(evt) => {
                    handleChange(evt);
                    dispatch(
                      GlobalAction.changeFormCodeData({
                        name: evt.target.name,
                        value: evt.target.value,
                      })
                    );
                  }}
                  onBlur={handleBlur}
                  value={formData.lastName}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none ${errors.lastName && touched.lastName ? "border-red-500" : ""}`}
                />
                {errors.lastName && touched.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={(evt) => {
                    handleChange(evt);
                    dispatch(
                      GlobalAction.changeFormCodeData({
                        name: evt.target.name,
                        value: evt.target.value,
                      })
                    );
                  }}
                  onBlur={handleBlur}
                  value={values.email}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none ${errors.email && touched.email ? "border-red-500" : ""}`}
                />
                {errors.email && touched.email && <span className="text-red-500 text-xs">{errors.email}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
