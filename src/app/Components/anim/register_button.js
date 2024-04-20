import {motion} from 'framer-motion';
import ANIM_STATES from '../../anim/header/register_button';
import {useTranslation} from 'react-i18next';
import {faArrowRight, faSheetPlastic} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function RegisterButton({ps_type = false, ps_link}) {
    const {t} = useTranslation();
    return (
        <motion.a
            href={ps_type ? ps_link : "https://forms.gle/iEaNGxkNnmxGAzh78"}
            target="_blank"
            variants={{
                whileHover: {
                    backgroundColor: '#5256a2',
                },
            }}
            initial="initial"
            whileHover="whileHover"
            className="max-w-fit hover:cursor-pointer relative h-10 border border-[#5256a2] flex overflow-hidden bg-slate-100 py-1 gap-2 pr-4 pl-2 shadow-md text-md text-black rounded-full uppercase font-medium leading-loose poppins"
        >
            <motion.div
                variants={ANIM_STATES}
                className="rounded-full h-full w-full bg-[#5256a2] -ml-2 absolute top-0"
            ></motion.div>
            <div className="block relative">
                <motion.div
                    variants={{
                        initial: {
                            y: 0,
                            opacity: 1,
                        },
                        whileHover: {
                            y: -50,
                            opacity: 0,
                        },
                    }}
                    className="flex z-10 items-center gap-2"
                >
                    <FontAwesomeIcon icon={!ps_type ? faArrowRight : faSheetPlastic}/>
                    <span className="z-10">{ps_type ? t("Github") : t('Github')}</span>
                </motion.div>
                <motion.div
                    variants={{
                        initial: {
                            y: 0,
                            opacity: 0,
                        },
                        whileHover: {
                            y: -31.5,
                            opacity: 1,
                        },
                    }}
                    className="flex z-10 items-center gap-2 text-white"
                >
                    <FontAwesomeIcon icon={!ps_type ? faArrowRight : faSheetPlastic}/>
                    <span className="z-10">{ps_type ? t("Github") : t('Github')}</span>
                </motion.div>
            </div>
        </motion.a>
    );
}