import { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS
import nexvoide from "../../../public/nexvoide.png";
import "@/index.css"
import './services.css';



const cardDetails = [
  {
    title: "Programming & Tech",
    description: "Build seamless websites and apps with tailored software solutions and advanced technology.",
    imageUrl: "/services/web-dev.png",
    portfolioLink: "https://drive.google.com/drive/folders/1LHQJ9oOK9Ml_cL5f9tcYol9dl8o8Rq2e?usp=drive_link", // Add unique link
    categoriesLink: "https://your-link.com/web-app-categories", // Add unique link
  },
  {
    title: "Video Editing & Post Production",
    description: "Elevate your content with professional video editing and seamless post-production.",
    imageUrl: "/services/audio-video.png",
    portfolioLink: "https://drive.google.com/drive/folders/1N6kTU0rNTCINDzMNp_cnVqgKXRbrxcDH?usp=drive_link", // Add unique link
    categoriesLink: "https://your-link.com/audio-video-categories", // Add unique link
  },
  {
    title: "Graphic Designing",
    description: "Bring your ideas to life with creative, impactful, and visually stunning graphic design.",
    imageUrl: "/services/graphic-designing.png",
    portfolioLink: "https://drive.google.com/drive/folders/10OS6Wui0ZT7GlbXuntJ7MkzQCxtkV_am?usp=sharing", // Add unique link
    categoriesLink: "https://your-link.com/graphic-design-categories", // Add unique link
  },
  {
    title: "Audio Editing & Post Production",
    description:
      "Enhance your content with professional audio editing for crisp, clear, and captivating sound.",
    imageUrl: "/services/app-dev.png",
    portfolioLink: "https://drive.google.com/drive/folders/1_HVV3rqBBAageDhuQozYBU_775Sk0Kzp?usp=drive_linkclearclear", // Add unique link
    categoriesLink: "https://your-link.com/programming-tech-categories", // Add unique link
  },
  {
    title: "E-commerce Solutions",
    description: "Enhance online sales with comprehensive e-commerce platforms.",
    imageUrl: "/services/e-commerce.png",
    portfolioLink: "https://drive.google.com/e-commerce-link", // Add unique link
    categoriesLink: "https://your-link.com/e-commerce-categories", // Add unique link
  },
  {
    title: "SEO Strategies",
    description: "Boost your visibility and rankings with tailored SEO services.",
    imageUrl: "/services/seo.png",
    portfolioLink: "https://drive.google.com/seo-link", // Add unique link
    categoriesLink: "https://your-link.com/seo-categories", // Add unique link
  },
  {
    title: "Digital Media Marketing",
    description: "Expand your reach with strategic digital media campaigns.",
    imageUrl: "/services/social-media-marketing.png",
    portfolioLink: "https://drive.google.com/social-media-marketing-link", // Add unique link
    categoriesLink: "https://your-link.com/social-media-marketing-categories", // Add unique link
  },
  {
    title: "UI/UX Designing",
    description: "Design interfaces that are intuitive and user-friendly.",
    imageUrl: "/services/ui-ux.png",
    portfolioLink: "https://drive.google.com/ui-ux-design-link", // Add unique link
    categoriesLink: "https://your-link.com/ui-ux-categories", // Add unique link
  },

  {
    title: "Content Writing",
    description:
      "Deliver engaging, SEO-optimized content to boost your brand's impact.",
    imageUrl: "/services/content-writing.png",
    portfolioLink: "https://drive.google.com/content-writing-link", // Add unique link
    categoriesLink: "https://your-link.com/content-writing-categories", // Add unique link
  },
];

const Services = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration (in milliseconds)
      once: false, // Only animate once
      easing: "ease-in-out", // Animation easing
    });
  }, []);

  return (
    <div className="tw-relative tw-z-[1010] tw-mt-60 tw-font-inter tw-antialiased tw-text-white tw-min-h-screen tw-flex tw-flex-col tw-items-center tw-justify-center">
      {/* Title Section */}
      <span
        className="tw-flex tw-flex-1 md:tw-w-[40%] lg:tw-w-[30%] xl:tw-w-[20%] tw-justify-center tw-items-center tw-border tw-border-[var(--secondary-color)] tw-py-2 tw-px-5 md:tw-px-0 tw-rounded-full"
        style={{
          boxShadow: "inset 0px 0px 5px var(--secondary-color)",
        }}
      >
        <img src={nexvoide} alt="nexVoide png" className="tw-w-7 tw-mr-1" />
        Your Partner in Digital Innovation
      </span>
      <span className="tw-mt-6 tw-px-2 md:tw-px-0 tw-text-2xl lg:tw-text-4xl tw-text-center tw-font-semibold">
        Making business <span
          style={{
            background: 'linear-gradient(to right, #2642FF, #cccccc, #2642FF)',
            backgroundSize: '200% auto', // Double the width for smooth animation
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientAnimation 5s linear  infinite', // Add animation
          }}
        > with </span> modern technologies
      </span>

      {/* Cards Section */}
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6 tw-w-full tw-max-w-6xl tw-px-4 tw-py-16 tw-mx-auto">
        {cardDetails.map((card, index) => (
          <div
            key={index}
            className="serviceContainer tw-relative tw-p-6 tw-pb-8 tw-bg-slate-900 tw-border-2 tw-border-transparent tw-rounded-3xl tw-cursor-pointer hover:tw-border-[2px] hover:tw-border-white hover:tw-shadow-[0_8px_30px_rgba(255,255,255,0.5)] hover:tw-scale-105"
            data-aos="zoom-out-down"
          >
            <div className="tw-flex tw-flex-col tw-items-center tw-text-center">
              <img
                src={card.imageUrl}
                alt="Service"
                className="tw-w-52 tw-h-52 tw-transition-transform tw-duration-300 hover:tw-scale-110"
              />
              <h2 className="tw-font-bold tw-mb-1 tw-mt-4 tw-text-gradient tw-from-cyan-400 tw-to-purple-500 tw-text-custom-size">
                {card.title}
              </h2>



              <p className="tw-text-sm tw-text-gray-300">{card.description}</p>
            </div>

            <div className="tw-flex tw-justify-center tw-gap-4 tw-mt-4">
              <a href={card.portfolioLink} target="_blank" rel="noopener noreferrer">
                {/* <button className="tw-bg-[var(--secondary-color)] tw-text-white tw-px-3 tw-py-1 hover:tw-bg-[var(--primary-color)]" style={{ borderRadius: "6px" }}>
                  Portfolio
                </button> */}
              </a>

              <a href={card.categoriesLink} target="_blank" rel="noopener noreferrer">
                {/* <button className="tw-bg-[var(--primary-color)] tw-text-white tw-px-3 tw-py-1 hover:tw-bg-[var(--secondary-color)]" style={{ borderRadius: "6px" }}>
                  Categories
                </button> */}
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;