import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import '@/index.css'

import Svg0 from '../../assets/icons/0';
import Svg1 from '../../assets/icons/1';
import Svg2 from '../../assets/icons/2';
import Svg3 from '../../assets/icons/3';
import Svg4 from '../../assets/icons/4';
import Svg5 from '../../assets/icons/5';
import Svg6 from '../../assets/icons/6';
import Svg7 from '../../assets/icons/7';
import Svg8 from '../../assets/icons/8';
import Svg9 from '../../assets/icons/9';
import Svg10 from '../../assets/icons/10';
import Svg11 from '../../assets/icons/11';
import Svg12 from '../../assets/icons/12';
import Svg13 from '../../assets/icons/13';
import Svg14 from '../../assets/icons/14';
import Svg15 from '../../assets/icons/15';
import Svg16 from '../../assets/icons/16';
import Svg17 from '../../assets/icons/17';
import Svg18 from '../../assets/icons/18';
import Svg19 from '../../assets/icons/19';
import Svg20 from '../../assets/icons/20';
import Svg21 from '../../assets/icons/21';
import Svg22 from '../../assets/icons/22';
import Svg23 from '../../assets/icons/23';
import Svg24 from '../../assets/icons/24';
import Svg25 from '../../assets/icons/25';
import Svg26 from '../../assets/icons/26';
import Svg27 from '../../assets/icons/27';


const ClientsSpotlight = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const size = "tw-size-48";

    return (
        <>
            <div className='tw-text-white tw-text-2xl lg:tw-text-4xl tw-text-center tw-font-semibold'>
                Clients{" "}
                <span
                    style={{
                        background: 'linear-gradient(to right, #2642FF, #cccccc, #2642FF)',
                        backgroundSize: '200% auto', // Double the width for smooth animation
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'gradientAnimation 5s linear  infinite', // Add animation
                    }}
                >
                    Spotlight
                </span>{" "}
                Feature
            </div>

            <div className='tw-mb-[-60px]'>
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    infinite={true}
                    arrows={false}
                    pauseOnHover={false}
                >
                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg0 />
                        </div>
                    </div>


                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg1 />
                        </div>
                    </div>

                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg2 />
                        </div>
                    </div>

                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg3 />
                        </div>
                    </div>


                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg4 />
                        </div>
                    </div>

                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg5 />
                        </div>
                    </div>

                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg6 />
                        </div>
                    </div>
                </Carousel>
            </div>

            <div className='tw-mb-[-60px]'>
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    infinite={true}
                    arrows={false}
                    rtl={true}
                    pauseOnHover={false}
                >
                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg7 />
                        </div>
                    </div>


                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg8 />
                        </div>
                    </div>

                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg9 />
                        </div>
                    </div>

                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg10 />
                        </div>
                    </div>

                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg11 />
                        </div>
                    </div>

                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg12 />
                        </div>
                    </div>
                </Carousel>
            </div>

            <div className='tw-mb-[-60px]'>
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    infinite={true}
                    arrows={false}
                    pauseOnHover={false}
                >
                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg13 />
                        </div>
                    </div>

                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg14 />
                        </div>
                    </div>


                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg15 />
                        </div>
                    </div>


                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg16 />
                        </div>
                    </div>


                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg17 />
                        </div>
                    </div>


                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg18 />
                        </div>
                    </div>


                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className={size}>
                            <Svg19 />
                        </div>
                    </div>

                </Carousel>
            </div>

            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
                arrows={false}
                rtl={true}
                pauseOnHover={false}
            >

                <div className="tw-flex tw-items-center tw-justify-center">
                    <div className={size}>
                        <Svg20 />
                    </div>
                </div>


                <div className="tw-flex tw-items-center tw-justify-center">
                    <div className={size}>
                        <Svg21 />
                    </div>
                </div>


                <div className="tw-flex tw-items-center tw-justify-center">
                    <div className={size}>
                        <Svg22 />
                    </div>
                </div>


                <div className="tw-flex tw-items-center tw-justify-center">
                    <div className={size}>
                        <Svg23 />
                    </div>
                </div>


                <div className="tw-flex tw-items-center tw-justify-center">
                    <div className={size}>
                        <Svg24 />
                    </div>
                </div>


                <div className="tw-flex tw-items-center tw-justify-center">
                    <div className={size}>
                        <Svg25 />
                    </div>
                </div>


                <div className="tw-flex tw-items-center tw-justify-center">
                    <div className={size}>
                        <Svg26 />
                    </div>
                </div>


                <div className="tw-flex tw-items-center tw-justify-center">
                    <div className={size}>
                        <Svg27 />
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default ClientsSpotlight;