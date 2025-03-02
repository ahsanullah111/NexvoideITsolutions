import React from 'react';
import TechIcons from '../../assets/icons/techIcons.png';
import nexvoide from '../../../public/nexvoide.png'
import '@/index.css'


const HeroContent = () => {
    return (
        <div className='tw-h-auto tw-max-h-96 tw-flex tw-flex-wrap lg:tw-flex-nowrap tw-items-center tw-justify-center lg:tw-justify-between tw-mt-28 tw-mx-16 md:tw-mt-44 md:tw-ms-20 md:tw-me-36'>
            <div className='tw-flex tw-flex-col tw-text-white'>
                <span className='tw-flex tw-flex-1 md:tw-w-[54%] lg:tw-w-full xl:tw-w-[60%] tw-justify-center tw-items-center tw-border tw-border-[var(--secondary-color)] tw-py-2 tw-rounded-full' style={{
                    boxShadow: 'inset 0px 0px 5px var(--secondary-color)'
                }}>
                    <img src={nexvoide} alt="nexVoide png" className='tw-w-7 tw-mr-2' />
                    Your Partner in Digital Innovation
                </span>
                <span className='tw-text-5xl tw-font-bold tw-leading-[60px]'>
                    Transforming
                    <span
                        style={{
                            background: 'linear-gradient(to right, #2642FF, #cccccc, #2642FF)',
                            backgroundSize: '200% auto', // Double the width for smooth animation
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            animation: 'gradientAnimation 5s linear  infinite', // Add animation
                        }}
                    > Ideas into</span> Digital Reality
                </span>
                <br />
                <span className='tw-text-[var(--third-color)]'>
                    At NEXVOIDE, we specialize in turning your digital aspirations into stunning realities. Our team of expert developers, designers, and strategists are dedicated to crafting bespoke solutions that not only meet, but exceed your expectations.
                </span>
            </div>

            <div className='tw-hidden lg:tw-flex tw-justify-center lg:tw-justify-end'>
                <img src={TechIcons} className='lg:tw-w-[65%] xl:tw-w-[72%]' />
            </div>
        </div>
    )
}

export default HeroContent;
