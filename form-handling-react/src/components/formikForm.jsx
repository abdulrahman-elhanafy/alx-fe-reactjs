import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
        .min(6, "Password too short")
        .required("Password is required"),
});

const FormikForm = () => {
    return (
        <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={formSchema}
            onSubmit={(values, { resetForm }) => {
                console.log("Submitted:", values);
                alert("✅ Formik registration successful!");
                resetForm();
            }}>
            <Form className="flex flex-col gap-3 w-80 mx-auto mt-10">
                <h2 className="text-xl font-bold text-center">
                    Formik Registration
                </h2>
                <Field
                    name="username"
                    placeholder="Username"
                    className="border p-2 rounded"
                />
                <ErrorMessage
                    name="username"
                    component="p"
                    className="text-red-500 text-sm"
                />

                <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="border p-2 rounded"
                />
                <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-sm"
                />

                <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="border p-2 rounded"
                />
                <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500 text-sm"
                />

                <button
                    type="submit"
                    className="bg-green-600 text-white p-2 rounded">
                    Register
                </button>
            </Form>
        </Formik>
    );
};

export default FormikForm;
