import { useState } from 'react';
import emailjs from 'emailjs-com';
import PhoneInput from 'react-phone-input-2'; // Import PhoneInput component
import 'react-phone-input-2/lib/style.css';  // Import default styles for the phone input
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { FaSpinner } from 'react-icons/fa'; // Import spinner icon 
import './contact.css';
import SvgRocket from '../../assets/icons/rocket';

import { ConfettiButton } from "@/components/ui/confetti";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('');

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        user_service: '',
        user_message: ''
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePhoneChange = (value) => {
        // PhoneInput returns the full phone number (with country code)
        setFormData({
            ...formData,
            user_phone: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Set loading state to true
        setSubmissionStatus(''); // Clear previous submission status

        // Manually pass form data
        const templateParams = {
            user_name: formData.user_name,
            user_email: formData.user_email,
            user_phone: formData.user_phone,  // This will include the full phone number
            user_service: formData.user_service,
            user_message: formData.user_message
        };

        console.log("Result:", templateParams);

        try {
            // Send email using emailjs
            const result = await emailjs.send('service_nyvlonb', 'template_en3ehop', templateParams, 'Nl6-xaQPSSSwkWpO5');
            console.log("Result is:", result.text);

            if (result.text === 'OK') {
                // Update the state to indicate success
                setSubmissionStatus('success');

                // Reset the form data
                setFormData({
                    user_name: '',
                    user_email: '',
                    user_phone: '',
                    user_service: '',
                    user_message: ''
                });
            }
        } catch (error) {
            console.error(error.text);
            setSubmissionStatus('error'); // Update the state to indicate error
        } finally {
            setIsSubmitting(false); // Always set loading state to false
            setTimeout(() => setSubmissionStatus(''), 2000);
        }
    };


    // Function to check if the form is valid
    const isFormValid = () => {
        return (
            formData.user_name.trim() !== '' &&
            formData.user_email.trim() !== '' &&
            formData.user_phone.trim() !== '' &&
            formData.user_service.trim() !== '' &&
            formData.user_message.trim() !== ''
        );
    };
    return (
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-white">
            <div className="tw-grid tw-grid-cols-12 tw-mx-2 md:tw-mx-6 lg:tw-mx-0 prism-effect">
                {/* First Half */}
                <div className={`tw-order-2 md:tw-order-1 tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-6 xl:tw-col-span-6  tw-px-4 tw-pb-2 tw-pt-6 md:tw-p-10 tw-rounded-[0_0_18px_0] md:tw-rounded-[0_0_0_24px]`}>
                    <h2 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-white">Write us</h2>
                    <form onSubmit={handleSubmit} className="tw-flex tw-flex-col">
                        <div className="tw-mb-5">
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Name"
                                className="tw-w-full tw-px-3 tw-py-2 tw-border-b-2 tw-border-gray-600 tw-bg-transparent tw-text-white focus:tw-outline-none focus:tw-border-gradient focus:tw-border-transparent tw-transition-all tw-placeholder-gray-400"
                                value={formData.user_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="tw-mb-5">
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Email"
                                className="tw-w-full tw-px-3 tw-py-2 tw-border-b-2 tw-border-gray-600 tw-bg-transparent tw-text-white focus:tw-outline-none focus:tw-border-gradient focus:tw-border-transparent tw-transition-all tw-placeholder-gray-400"
                                value={formData.user_email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="tw-mb-5">
                            <PhoneInput
                                country={'us'} // Default country for the phone input
                                value={formData.user_phone}
                                onChange={handlePhoneChange}
                                inputClass="tw-w-full tw-px-3 tw-py-2 tw-border-b-2 tw-border-gray-600 tw-bg-transparent tw-text-white focus:tw-outline-none focus:tw-border-gradient focus:tw-px-5 focus:tw-py-5 focus:tw-border-transparent tw-transition-all tw-placeholder-gray-400" // Matches other input fields and increases padding on focus
                                dropdownClass="tw-text-black tw-border-none tw-transition-all" // Dropdown styling for a transparent look
                                buttonClass="tw-bg-transparent tw-text-white tw-border-none focus:tw-outline-none" // Transparent button
                                enableSearch={true} // Enables search bar in dropdown
                                placeholder="Phone"
                                required
                                inputStyle={{
                                    border: 'none',
                                    borderBottom: '2px solid #4b5563', // Matches border style
                                    backgroundColor: 'transparent', // Transparent background
                                    color: 'white',
                                    padding: '1.5rem 3rem', // Default padding
                                    width: '100%',
                                    transition: 'all 0.3s', // Smooth transition
                                }}
                                buttonStyle={{
                                    backgroundColor: 'transparent', // Transparent background for button
                                    border: 'none',
                                    padding: '0.5rem', // Padding around the flag
                                    marginRight: '1rem', // Spacing between flag and phone input
                                }}
                                flagStyle={{
                                    width: '20px', // Custom flag width
                                    height: '15px', // Custom flag height
                                    borderRadius: '0', // Removes border-radius
                                }}
                            />
                        </div>
                        <div className="tw-mb-5">
                            <input
                                type="text"
                                name="user_service"
                                placeholder="Service"
                                className="tw-w-full tw-px-3 tw-py-2 tw-border-b-2 tw-border-gray-600 tw-bg-transparent tw-text-white focus:tw-outline-none focus:tw-border-gradient focus:tw-border-transparent tw-transition-all tw-placeholder-gray-400"
                                value={formData.user_service}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="tw-mb-5">
                            <textarea
                                name="user_message"
                                placeholder="Message"
                                className="tw-w-full tw-min-h-[100px] tw-px-3 tw-py-2 tw-border-b-2 tw-border-gray-600 tw-bg-transparent tw-text-white focus:tw-outline-none focus:tw-border-gradient focus:tw-border-transparent tw-transition-all tw-placeholder-gray-400"
                                value={formData.user_message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="tw-mb-5">
                            <div className="tw-mb-5">
                                <ConfettiButton
                                    disabled={!isFormValid()}
                                    className="tw-text-white tw-px-4 tw-py-2 tw-rounded tw-font-semibold tw-transition-all tw-duration-300 hover:tw-opacity-90 active:tw-scale-95 disabled:tw-opacity-50"
                                >
                                    {isSubmitting ? (
                                        <div className="tw-flex tw-justify-center tw-items-center">
                                            <FaSpinner className="tw-animate-spin tw-text-white tw-w-6 tw-h-6" />
                                            <span className="tw-ml-3 tw-text-white">Sending...</span>
                                        </div>
                                    ) : (
                                        <span className="tw-text-white">Send</span>
                                    )}
                                </ConfettiButton>
                            </div>

                        </div>
                        {submissionStatus === 'success' && (
                            <div className="tw-mb-5 tw-text-green-500">Your message has been sent successfully!</div>
                        )}
                        {submissionStatus === 'error' && (
                            <div className="tw-mb-5 tw-text-red-500">Failed to send your message. Please try again.</div>
                        )}
                    </form>
                </div>

                {/* Next Half */}
                <div className="tw-order-1 md:tw-order-2 tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-6 xl:tw-col-span-6  tw-px-4 tw-py-6 md:tw-p-10 tw-rounded-[18px_0_0_0] md:tw-rounded-[0_24px_0_0] tw-place-content-center">

                    {/* Video Card */}
                    <div className="-tw-mt-4 -tw-ml-4 tw-overflow-hidden">
                        <div className="tw-relative tw-w-full tw-h-0 tw-pt-[56.25%]">
                            <video
                                className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full"
                                autoPlay
                                loop
                                muted // Ensures autoplay works in most browsers
                                playsInline // Ensures the video plays inline on mobile devices
                                preload="auto" // Preloads the video for faster playback
                            >
                                <source src="../public/map/map.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <h2 className="tw-font-bold tw-my-3 tw-text-2xl lg:tw-text-4xl tw-text-center md:tw-text-left">Contact information</h2>

                    <p className="tw-mb-5">{`We're open for any suggestion or just to have a chat`}</p>

                    <ul className="tw-list-none tw-p-0">
                        <li className="tw-flex tw-items-start tw-mb-4">
                            <FaMapMarkerAlt className="tw-w-5 tw-h-5 tw-mr-2" />
                            <div>
                                <strong>Address:</strong>&nbsp;
                                Lahore, Punjab, Pakistan
                            </div>
                        </li>
                        <li className="tw-flex tw-items-center tw-mb-4">
                            <FaPhoneAlt className="tw-w-5 tw-h-5 tw-mr-2" />
                            <strong>Phone:</strong>&nbsp; +92-3364558535
                        </li>
                        <li className="tw-flex tw-items-center tw-mb-4">
                            <FaEnvelope className="tw-w-5 tw-h-5 tw-mr-2" />
                            <strong>Email:</strong>&nbsp; info@nexvoide.com
                        </li>
                        <li className="tw-flex tw-items-center">
                            <FaGlobe className="tw-w-5 tw-h-5 tw-mr-2" />
                            <strong>Website:</strong>&nbsp; nexvoide.com
                        </li>
                    </ul>
                </div>
            </div >
        </div >
    );
};

export default Contact;