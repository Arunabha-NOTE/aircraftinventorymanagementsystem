import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <>
                <div>
                    <footer className="">
                        <div className="w-full mx-auto md:py-8">
                            <div className="sm:flex sm:items-center md:pt-0 pt-[2.5vh] sm:justify-between">
                                {/*<a href="/" className="flex text-center justify-center items-center mb-4 sm:mb-0">*/}
                                {/*    <span className="self-center text-center text-2xl font-semibold whitespace-nowrap text-pracula">IC HACK 2.0</span>*/}
                                {/*</a>*/}
                                <a href="/" className="flex items-center align-middle text-center justify-center mb-4 sm:mb-0">
                                    <img src="" alt="" className='w-[128px] lg:w-[192px]'/>
                                    {/*<h1 className='text-2xl'>*/}
                                    {/*  IC HACK 2.0*/}
                                    {/*</h1>*/}
                                </a>

                            </div>
                            <hr className="my-6 border-pracula sm:mx-auto lg:my-2" />
                            <span className="block text-xs text-dracxt font-extralight mt-3 sm:text-center text-center pb-[1vh] md:pb-0">Made with <span className='text-pracula'><a href="https://github.com/Arunabha-NOTE/aircraftinventorymanagementsystem" target="_blank" rel="noreferrer" className="animate-pulse align-middle">💜</a> </span><span>by </span><a href="https://www.linkedin.com/in/arunabha-mukhopadhyay" target='_blank' rel="noreferrer" className="hover:underline text-pracula">Arunabha M.</a></span>
                        </div>
                    </footer>
                </div>
            </>
        );
    }
}

Footer.propTypes = {};

export default Footer;