import { useFormik, yupToFormErrors } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

function LinkCards({ link, editlink, cid, deletelink, cancel }) {
    const [toggle, setToggle] = useState(false);
    const [editToggle, setEditToggle] = useState(link.link == '' ? true : false);
    const formik = useFormik({
        initialValues: {
            link: link.link,
            name: link.name,
        },
        validationSchema: Yup.object({
            link: Yup.string().url().required('Link is required'),
            name: Yup.string().required('name is required'),
        }),
        validateOnChange: false,
        onSubmit: (values) => {
            editlink(cid, values);
        },
    });
    return (
        <div className="w-full mt-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <div className="flex justify-end px-4 pt-4">
                <button
                    onClick={() => setToggle(!toggle)}
                    className="inline-block text-gray-500  hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
                    type="button"
                >
                    <span className="sr-only">Open dropdown</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>
                </button>
                <div
                    onClick={() => setToggle(!toggle)}
                    className={
                        'z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow absolute translate-y-8 ' +
                        (toggle ? '' : 'hidden')
                    }
                >
                    <ul className="py-1" aria-labelledby="dropdownButton">
                        <li>
                            <a
                                onClick={() => setEditToggle(!editToggle)}
                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            >
                                Edit
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => deletelink(cid)}
                                className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 cursor-pointer"
                            >
                                Delete
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col items-center pb-10">
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            disabled={!editToggle}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <span className="font-medium">Oh, snapp!</span> {formik.errors.name}
                            </p>
                        ) : null}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="link" className="block mb-2 text-sm font-medium text-gray-900">
                            Link
                        </label>
                        <input
                            type="text"
                            id="link"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.link}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            disabled={!editToggle}
                        />
                        {formik.touched.link && formik.errors.link ? (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <span className="font-medium">Oh, snapp!</span> {formik.errors.link}
                            </p>
                        ) : null}
                    </div>
                    {editToggle && (
                        <div className="flex space-x-3 mt-2">
                            <a
                                onClick={() => {
                                    setEditToggle(!editToggle);
                                    cancel();
                                }}
                                className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 cursor-pointer"
                            >
                                cancel
                            </a>

                            <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 ">
                                Update
                            </button>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}

export default LinkCards;
