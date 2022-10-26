import React, { useRef } from 'react';
import axiosInstance from '../../util/axiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormSettings({ username }) {
    const usernameRef = useRef();
    const uploadImage = async (e) => {
        let image_as_files = e.target.files[0];
        console.log(image_as_files);
        if (image_as_files) {
            const formdata = new FormData();
            formdata.append('data', image_as_files);
            try {
                const res = await axiosInstance.post('api/admin/profile/updateimage', formdata, {
                    headers: {
                        'Content-type': 'multipart/form-data',
                    },
                });
                if (res.status === 200) {
                    toast('image updated');
                } else {
                    toast('check the image and reupload');
                }
            } catch (err) {
                toast('internal server error plz try later');
                console.log(err);
            }
        }
    };
    const updateUsername = async () => {
        const value = usernameRef.current.value;
        // check regex
        const regex = new RegExp(`^[A-Za-z][A-Za-z0-9_]{7,29}$`);
        if (!regex.test(value)) return toast('must contain 8 Characters and only _ & . is allowed');

        // update username
        try {
            const res = await axiosInstance.post('api/admin/profile/username', {
                username: value,
            });
            if (res.status === 200) {
                toast('username updated');
            } else {
                toast('check the username');
            }
        } catch (err) {
            console.log(err.response.status);
            if (err.response.status === 403) return toast('username already exist');
            toast('internal server error plz try later');
            console.log(err);
        }
    };
    return (
        <>
            <ToastContainer />
            <div className="bg-lightbggrape rounded-lg p-10 my-10 shadow-lg w-full flex justify-center">
                <div className="w-full md:w-2/3">
                    <p className="text-3xl font-bold">Image</p>
                    <hr className="my-5 h-px bg-gray-200 border-0 " />
                    <label
                        className="block mb-2 text font-medium text-gray-900 dark:text-gray-300"
                        htmlFor="file_input"
                    >
                        Upload file
                    </label>
                    <input
                        className="block w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none"
                        aria-describedby="file_input_help"
                        id="file_input"
                        type="file"
                        onChange={(e) => uploadImage(e)}
                    />
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                        JPG,PNG (MAX. 5mb).
                    </p>

                    <p className="text-3xl font-bold mt-10">Change Username</p>
                    <hr className="my-5 h-px bg-gray-200 border-0 " />
                    <label
                        htmlFor="website-admin"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Username
                    </label>
                    <div className="flex relative">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">
                            @
                        </span>
                        <input
                            type="text"
                            id="website-admin"
                            className="rounded-none rounded-r-lg text-base bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full border-gray-300 p-2.5"
                            placeholder={username}
                            ref={usernameRef}
                        />
                        <button
                            className="text-white absolute right-2.5 bottom-[5px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                            onClick={() => updateUsername()}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
