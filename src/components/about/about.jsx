import nexVoideHeadQuatre from '../../assets/icons/nexVoideHeadQuatre.png';
import space from '../../assets/icons/space.png';

const About = () => {
    return (
        <div
            className="tw-w-full tw-flex tw-justify-center tw-items-center"
            style={{
                backgroundImage: `url(${space})`,
                backgroundSize: 'cover', // Ensure the image scales with the viewport
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed', // Keeps the background fixed during scroll
                minHeight: '100vh', // Minimum height for smaller screens
            }}
        >
            <div className="tw-w-full lg:tw-w-11/12 tw-my-6 tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-8 tw-bg-opacity-40 tw-backdrop-blur-lg tw-bg-gray-700 tw-rounded-xl tw-shadow-lg">
                {/* Text Section */}
                <div className="tw-p-6 lg:tw-p-10 tw-text-white tw-flex tw-flex-col tw-justify-center tw-items-start">
                    <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-bold tw-mb-4 lg:tw-mb-6">
                        Building Brands That Make a Difference!
                    </h2>
                    <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-mb-4">
                        At Nexvoide IT Solutions, we provide a wide range of services,
                        including web and app development, innovative mobile apps,
                        e-commerce solutions, graphic design, SEO strategies, social media
                        marketing, UI/UX design, audio and video editing, and content
                        writing.
                    </p>
                    <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed">
                        Our mission is to deliver excellence and build lasting partnerships
                        through integrity, collaboration, and unmatched quality. Whether
                        it’s crafting stunning visuals, creating seamless user experiences,
                        or amplifying your brand online, Nexvoide is here to elevate your
                        business and achieve your goals.
                    </p>
                </div>

                {/* Image Section */}
                <div className="tw-flex tw-justify-center tw-items-center">
                    <img
                        src={nexVoideHeadQuatre}
                        alt="Nexvoide Building"
                        className="tw-w-full tw-h-auto tw-max-h-[300px] sm:tw-max-h-[400px] tw-object-cover tw-rounded-tr-xl tw-rounded-br-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;


// import teams from '../../JSON/team.json';

// const About = () => {
//     const renderTeamMembers = (members) => {
//         return members.map((member, index) => (
//             <div key={index} className="tw-container tw-h-80 tw-relative tw-flex tw-justify-center tw-items-center tw-bg-base-200 tw-shadow-md tw-text-left w-overflow-hidden">
//                 {/* Image */}
//                 <img src={member.image} alt={member.name} className="tw-w-full tw-h-full tw-object-cover" />
//                 {/* Overlay for name and designation */}
//                 <div className='tw-absolute tw-bottom-3 tw-left-3 tw-right-3 tw-bg-white tw-px-4 tw-py-2 tw-backdrop-blur-lg'>
//                     <h3 className="tw-text-lg tw-font-bold tw-text-gray-900">{member.name}</h3>
//                     <p className="tw-text-sm tw-text-gray-600">{member.designation}</p>
//                 </div>
//             </div>
//         ));
//     };

//     return (
//         <div className="tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center lg:tw-px-4 xl:tw-px-0">
//         {/* <div className="tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center lg:tw-px-4 xl:tw-px-0 tw-bg-gradient-to-br tw-from-[#FDE2E2] tw-via-black tw-to-[#DDEAF6]"> */}

//             {/* Section Heading */}
//             <div className="tw-text-center tw-my-12">
//                 <h1 className="tw-text-4xl tw-font-bold tw-text-white">We bring a wealth of skills and experience from a wide range of backgrounds.</h1>
//                 <p className="tw-text-xl tw-text-white tw-mt-4">Our philosophy is simple: hire great people and give them the resources and support to do their best work.</p>
//             </div>

//             {/* Developers Section */}
//             <div className="tw-mb-12">
//                 <h2 className="tw-text-2xl tw-font-semibold tw-text-white tw-mb-6">Developers</h2>
//                 <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
//                     {renderTeamMembers(teams.developers)}
//                 </div>
//             </div>

//             {/* GFX Section */}
//             <div className="tw-mb-12">
//                 <h2 className="tw-text-2xl tw-font-semibold tw-text-white tw-mb-6">Graphics Designers</h2>
//                 <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
//                     {renderTeamMembers(teams.gfx)}
//                 </div>
//             </div>

//             {/* Video Editors Section */}
//             <div className="tw-mb-12">
//                 <h2 className="tw-text-2xl tw-font-semibold tw-text-white tw-mb-6">Video Editors</h2>
//                 <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
//                     {renderTeamMembers(teams.video_editor)}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;
