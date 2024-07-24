import React, { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';

const DownloadButton = () => {
    // const [downloadLink, setDownloadLink] = useState('');
    // const [osName, setOsName] = useState('');

    // TODO: detect OS to change the button color
    // useEffect(() => {
    //     const detectOS = () => {
    //         const userAgent = window.navigator.userAgent.toLowerCase();
    //         if (userAgent.indexOf("win") > -1) {
    //             setOsName('Windows');
    //             // setDownloadLink();
    //         } else if (userAgent.indexOf("mac") > -1) {
    //             setOsName('macOS');
    //             // setDownloadLink('https://docs.comfy.org/get_started/manual_install');
    //         } else if (userAgent.indexOf("linux") > -1) {
    //             setOsName('Linux');
    //             // setDownloadLink();
    //         }
    //     };

    //     detectOS();
    // }, []);

    return (
        <div className="inline-flex flex-row gap-2 items-center">
            <Button
                href='https://docs.comfy.org/get_started/pre_package'
                className="mb-2"
            >
                Download for Windows
            </Button>
            <Button
                href='https://docs.comfy.org/get_started/manual_install'
                className="mb-2"
            >
                Setup for MacOS
            </Button>
            <Button
                href='https://docs.comfy.org/get_started/manual_install'
                className="mb-2"
            >
                Setup for Linux
            </Button>
        </div>
    );
};

export default DownloadButton;