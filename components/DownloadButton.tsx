import React, { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';

const DownloadButton = () => {
    const [downloadLink, setDownloadLink] = useState('');
    const [osName, setOsName] = useState('');

    useEffect(() => {
        const detectOS = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            if (userAgent.indexOf("win") > -1) {
                setOsName('Windows');
                setDownloadLink('https://docs.comfy.org/get_started/pre_package');
            } else if (userAgent.indexOf("mac") > -1) {
                setOsName('macOS');
                setDownloadLink('https://docs.comfy.org/get_started/manual_install');
            } else if (userAgent.indexOf("linux") > -1) {
                setOsName('Linux');
                setDownloadLink('https://docs.comfy.org/get_started/manual_install');
            }
        };

        detectOS();
    }, []);

    return (
        <div className="inline-flex flex-col items-center">

            <Button
                href={downloadLink}
                className="mb-2"
            >
                Download for {osName}
            </Button>
        </div>
    );
};

export default DownloadButton;