import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import LinkCards from './linkCards';
import axiosInstance from '../../util/axiosInstance';
function Links(props) {
    const [links, setLinks] = useState(props.links || []);
    const editlinks = (cid, link) => {
        let newarr = [...links];
        newarr[cid] = link;
        updatelinks(newarr);
        setLinks(newarr);
    };
    const addlink = () => {
        let newarr = [...links];
        newarr.push({ link: '', name: '' });
        setLinks(newarr);
        scrollToBottom();
    };
    const canceladdlink = () => {
        let newarr = [...links];
        if (newarr[newarr.length - 1].link === '') {
            newarr.pop();
            setLinks(newarr);
        }
    };
    const deletelinks = (cid) => {
        let newarr = [...links];
        newarr.splice(cid, 1);
        updatelinks(newarr);
        setLinks(newarr);
    };
    const updatelinks = async (links) => {
        try {
            const responce = await axiosInstance.post('api/admin', { links: links });
            if (responce.data) Router.reload();
        } catch (err) {
            if (axios.isCancel(err)) {
                Router.push('/signin');
            }
            Router.push('/signin');
        }
    };
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'auto',
        });
    };

    return (
        <>
            <h1 className="text-2xl text-center font-semibold mt-40">Your Links</h1>
            <button
                onClick={addlink}
                type="button"
                className=" focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
            >
                Add link
            </button>
            <div className="grid grid-cols-1 place-items-center md:grid-cols-3 md:gap-4 items-center">
                {links.map((link, id) => (
                    <LinkCards
                        key={id}
                        link={link}
                        editlink={editlinks}
                        cid={id}
                        deletelink={deletelinks}
                        cancel={canceladdlink}
                    />
                ))}
            </div>
        </>
    );
}

export default Links;
