'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Send } from '@mui/icons-material';
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
            // Handle form submission here
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
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            />
            <div className='py-[30px]'>
                <TextField
                    className='bg-[#EBEBEB] rounded-xl text-[#616161] text-[18px] '

                    fullWidth
                    id="email"
                    name="email"
                    label="Email Address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                /></div>

            <TextField
                className='bg-[#EBEBEB] rounded-xl text-[#616161] text-[18px]'

                fullWidth
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />
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
                    error={formik.touched.textarea && Boolean(formik.errors.textarea)}
                    helperText={formik.touched.textarea && formik.errors.textarea}
                /></div>
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
