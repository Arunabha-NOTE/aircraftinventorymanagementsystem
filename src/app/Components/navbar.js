import {useTranslation} from 'react-i18next';
import {motion} from 'framer-motion';
import {PATH1_VARIANTS, PATH2_VARIANTS, PATH3_VARIANTS} from '../anim/menu';
import {useEffect, useRef, useState} from 'react';
import {Image} from 'next/image';
import links from '../utils/links';
import ANIM_STATES from './../anim/menu/underMenu';
import NavLink from './anim/nav_link';
import RegisterButton from './anim/register_button';
import ANIM_STATES_MC from './../anim/menu/menuChild';
import ANIM_STATES_MCW from './../anim/menu/menuChildWrapper';
import ANIM_STATES_LINK_U from './../anim/nav/link_underline';


export default function Navbar() {
    const {t} = useTranslation();
    const [menuState, setMenuState] = useState('open');
    const [menuOpen, setMenuOpen] = useState('open');
    const [ps_link, setPsLink] = useState(null);

    useEffect(() => {
        fetch("/api/proxy").then(res => res.json()).then(data => {
            setPsLink(data.__hcp_out);
        })
    })

    const handleMenuState = () => {
        setMenuState('int');
        const nextState = menuState === 'open' ? 'close' : 'open';
        setMenuOpen(nextState);
        setTimeout(() => {
            setMenuState(nextState);
        }, 500);
    };
    useEffect(() => {
        let onhashchange = () => {
            setMenuOpen('open')
            setMenuState('open')
        }
        window.onscroll = () => {
            if (window.scrollY > 400) {
                if (!document.querySelector('#navbar').classList.contains("bg-gray-600")) document.querySelector('#navbar').classList.add('bg-gray-600');
            } else if (window.scrollY < 400) {
                if (document.querySelector('#navbar').classList.contains("bg-gray-600")) document.querySelector('#navbar').classList.remove('bg-gray-600');
            }
        }
        window.addEventListener('hashchange', onhashchange)
    }, []);

    return (
        <>
            <motion.div initial={{
                opacity: 0
            }} animate={{
                opacity: 1
            }} transition={{
                duration: 0.5,
                delay: 1
            }}

                        className="h-12 w-full flex py-14 px-8 fixed text-white align-middle select-none items-center z-30">
                <div
                    id="navbar"
                    className="opacity-30 drop-shadow-lg absolute right-4 left-4 h-20 rounded-[33px] transition-colors"/>
                <motion.span className="text-xl poppins font-bold z-10">{t('Aircraft Inventory')}</motion.span>
                <motion.div
                    className="h-6 w-0.5 bg-white mx-4 hidden lg:block"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                ></motion.div>
                <div className="gap-5 hidden lg:flex">
                    {links.map((link, index) => {
                        return <NavLink href={link.path} heading={t(link.name)} key={index} _key={index}/>;
                    })}

                </div>
                <div className="ml-auto flex">
                    <div className="hidden md:flex gap-2">
                        <RegisterButton/>
                        {ps_link && <RegisterButton ps_type={true} ps_link={ps_link}/>}
                    </div>
                    <button className="py-1 px-2 rounded-full lg:hidden z-10" onClick={handleMenuState}>
                        {/*<FontAwesomeIcon icon={faBars}/>*/}
                        <motion.svg width="24" height="24" viewBox="0 0 24 24">
                            <motion.path
                                strokeLinecap="round"
                                strokeWidth={4}
                                stroke="#ffffff"
                                variants={PATH1_VARIANTS}
                                animate={menuState}
                                initial="open"
                            />
                            <motion.path
                                strokeLinecap="round"
                                strokeWidth={4}
                                stroke="#ffffff"
                                variants={PATH2_VARIANTS}
                                animate={menuState}
                                initial="open"
                            />
                            <motion.path
                                strokeLinecap="round"
                                strokeWidth={4}
                                stroke="#ffffff"
                                variants={PATH3_VARIANTS}
                                animate={menuState}
                                initial="open"
                            />
                        </motion.svg>
                    </button>
                </div>
            </motion.div>

            <motion.div
                className="fixed overflow-hidden top-0  bottom-0 w-full h-0 bg-[#5256a2] z-20"
                variants={ANIM_STATES}
                initial={'open'}
                animate={menuOpen}
                transition={{duration: 0.3, type: 'easeIn'}}
            >
                <motion.div variants={ANIM_STATES_MCW}
                            className="flex-row gap-10 top-1/2 relative -translate-y-1/2 p-5 w-fit">
                    {links.map((link, index) => {
                        return (
                            <div className="mb-10" key={index}>
                                <motion.a
                                    variants={ANIM_STATES_MC}
                                    className="block text-3xl font-bold text-white poppins w-fit uppercase"
                                    href={link.path}
                                >
                                    {link.name}
                                    <motion.div
                                        variants={ANIM_STATES_LINK_U}
                                        className="block h-1 w-0 rounded-full bg-blue-400"
                                    ></motion.div>
                                </motion.a>
                            </div>
                        );
                    })}
                    <motion.a
                        variants={ANIM_STATES_MC}
                        className="block text-3xl font-bold text-white poppins w-fit"
                        href='/register'
                    >
                        {t('Github')}
                        <motion.div
                            variants={ANIM_STATES_LINK_U}
                            className="block h-1 w-0 rounded-full bg-blue-400"
                        ></motion.div>
                    </motion.a>
                </motion.div>
            </motion.div>
        </>
    );
}