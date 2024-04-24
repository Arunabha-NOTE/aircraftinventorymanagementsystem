import DImage from 'next/image';
import {useTranslation} from 'react-i18next';

import Typewriter from 'typewriter-effect/dist/core';
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

export default function Hero() {
    const [ps_link, setPsLink] = useState(null);
    useEffect(() => {
        new Typewriter('#typewriter', {
            strings: ['Aircraft Inventory', 'Create.', "Read.", 'Update.', "Delete."],
            autoStart: true,
            loop: true,
        });
        fetch("/api/proxy").then(res => res.json()).then(data => {
            setPsLink(data.__hcp_out);
        })
    })
    const {t} = useTranslation();
    return (
        <motion.div
            whileInView={{opacity: 1}}
            initial={{opacity: 0}}
            className="h-full rounded-[33px] py-24 justify-center mb-8 mx-auto w-full bg-gradient-31 from-header-left to-header-right flex items-center flex-col overflow-hidden md:flex-row">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Airplane_silhouette_blue.svg/400px-Airplane_silhouette_blue.svg.png"
                alt="logo" className="w-64 md:w-72 mb-10" width={1960}
                height={1080}/>
            <div
                className=" flex flex-col text-wrap break-words md:px-8 px-2 py-12 mt-5 max-w-72 min-w-72 md:max-w-[50rem]">
                <span id="typewriter"
                      className="text-[#d6d5e3] lg:text-[4rem] md:text-3xl text-2xl font-bold poppins"></span>
            </div>
        </motion.div>
    );
}