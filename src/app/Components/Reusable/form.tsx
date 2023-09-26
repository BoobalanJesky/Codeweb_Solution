'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string()
        .matches(/^\d{10}$/, 'Invalid phone number')
        .required('Phone number is required (10 digits)'),
    textarea: Yup.string().required('Textarea is required'),
});
function MyForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
            textarea: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                className='bg-[#EBEBEB] rounded-xl text-[#616161] text-[18px] '
                fullWidth
                id="name"
                name="name"
                label="Your Name"
                value={formik.values.name}
                onChange={formik.handleChange}
            />
            {formik.touched.name && formik.errors.name && (
                <div className="text-xs text-red-500 font-semibold">{formik.errors.name}</div>
            )}
            <div className='py-[30px]'>
                <TextField
                    className='bg-[#EBEBEB] rounded-xl text-[#616161] text-[18px] '

                    fullWidth
                    id="email"
                    name="email"
                    label="Email Address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                    <div className="text-xs text-red-500 font-semibold">{formik.errors.email}</div>
                )}</div>

            <TextField
                className='bg-[#EBEBEB] rounded-xl text-[#616161] text-[18px]'

                fullWidth
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <div className="text-xs text-red-500 font-semibold">{formik.errors.phoneNumber}</div>
            )}
            <div className='py-[30px]'>
                <TextField
                    className='bg-[#EBEBEB] rounded-xl text-[#616161] text-[18px]'
                    fullWidth
                    id="textarea"
                    name="textarea"
                    label="Enter Your Message"
                    multiline
                    rows={4}
                    value={formik.values.textarea}
                    onChange={formik.handleChange}
                />
                {formik.touched.textarea && formik.errors.textarea && (
                    <div className="text-xs text-red-500 font-semibold">{formik.errors.textarea}</div>
                )}</div>
            <div className='pt-[30px] flex justify-center'>
                <Button
                    className='bg-[#005CFF] text-[#fff] rounded font-medium px-[25px]'
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Submit
                </Button>
            </div>
        </form>

    );
}

export default MyForm;