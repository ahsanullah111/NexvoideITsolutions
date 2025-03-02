import HeroContent from './heroContent';
import BlackHole from '../../assets/icons/blackhole.webm';

const Hero = () => {
    return (
        <div className="tw-flex tw-flex-col tw-h-full tw-w-full" id="about-me">
            <video
                autoPlay
                muted
                loop
                className="tw-rotate-180 tw-absolute tw-top-[-288px] tw-h-full tw-w-full tw-left-0 tw-z-[1] tw-object-cover"
            >
                <source src={BlackHole} type="video/webm" />
            </video>

            <div className='tw-z-50'>
                <HeroContent />
            </div>
        </div>
    )
}

export default Hero;