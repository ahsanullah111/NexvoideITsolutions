import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './footer.module.css';
import { FaSpinner } from 'react-icons/fa'; // Import spinner icon 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ConfettiButton } from "@/components/ui/confetti";

const Footer = () => {
    const [email, setEmail] = useState(''); // State to manage email input
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Sending email through EmailJS
            const result = await emailjs.send(
                "service_nyvlonb",    // Replace with your EmailJS service ID
                "template_wwoccsi",    // Replace with your EmailJS template ID
                {
                    email: email, // Use the email state value
                },
                "Nl6-xaQPSSSwkWpO5"       // Replace with your EmailJS public key
            );

            if (result.text === 'OK') {
                setMessage('Subscription successful!');
                setEmail(''); // Clear the email input after successful submission
            }
        } catch (error) {
            setMessage('Subscription failed, please try again.');
        } finally {
            setLoading(false);
            setTimeout(() => setMessage(''), 2000); // Clear the message after 2 seconds
        }
    };

    return (
        <footer className="tw-text-white">
            <div className={styles.new_footer_top}>
                {/* Footer Content */}
                <div className="tw-flex tw-justify-between tw-mx-4 md:tw-mx-6 lg:tw-mx-10">
                    <div className='tw-grid tw-grid-cols-12 tw-mb-6'>
                        <div className="tw-col-span-12 md:tw-col-span-4 lg:tw-col-span-3 tw-flex tw-flex-col md:tw-items-center">
                            <div className={`${styles.f_widget} ${styles.company_widget} wow fadeInLeft`} data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                                <h3 className="tw-text-lg tw-font-semibold tw-text-white">Get in Touch</h3>
                                <p className="tw-text-white !tw-text-white">Don’t miss any updates of our new services & discount offers!</p>
                                <form onSubmit={handleSubmit} className={`${styles.f_subscribe_two} mailchimp`} noValidate>
                                    <input
                                        type="email"
                                        required // This makes the field required
                                        name="EMAIL"
                                        className="tw-form-control tw-w-full tw-px-4 tw-py-2 tw-mb-4 tw-rounded tw-border tw-border-gray-300 tw-text-black"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <ConfettiButton
                                        type="submit"
                                        disabled={!email.trim() || loading}
                                        className="tw-text-white tw-px-4 tw-py-2 tw-rounded tw-font-semibold tw-transition-all tw-duration-300 hover:tw-opacity-90 active:tw-scale-95 disabled:tw-opacity-50"
                                    >
                                        {loading ? (
                                            <div className="tw-flex tw-justify-center tw-items-center">
                                                <FaSpinner className="tw-animate-spin tw-text-white tw-w-6 tw-h-6" />
                                                <span className="tw-ml-3 tw-text-white">Subscribing...</span>
                                            </div>
                                        ) : (
                                            <span className="tw-text-white">Subscribe</span>
                                        )}
                                    </ConfettiButton>




                                    <p className={message !== '' ? 'tw-text-green-500' : undefined}>{message}</p>
                                </form>
                            </div>
                        </div>

                        {/* Social Media Section */}
                        <div className="tw-col-span-12 md:tw-col-span-4 lg:tw-col-span-3 tw-flex tw-flex-col md:tw-items-center">
                            <div className={`${styles.f_widget} ${styles.about_widget} wow fadeInLeft`} data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                                <h3 className={`tw-text-lg tw-font-semibold tw-text-gray-200 tw-mt-8 md:tw-mt-0 tw-mb-4 md:tw-mb-8 tw-underline`}>Social Media</h3>
                                <ul className="tw-list-none tw-space-y-3 tw-text-white">
                                    <li><a target='_blank' href="https://www.facebook.com/media/set/?set=a.429830395822301&type=3" className="hover:tw-underline">Facebook</a></li>
                                    <li><a target='_blank' href="https://www.instagram.com/nexvoide/" className="hover:tw-underline">Instagram</a></li>
                                    <li><a target='_blank' href="https://www.tiktok.com/@nexvoide?lang=en" className="hover:tw-underline">TikTok</a></li>
                                    <li><a target='_blank' href="https://x.com/nexvoide" className="hover:tw-underline">Twitter</a></li>
                                    <li><a target='_blank' href="https://www.linkedin.com/company/nexvoide/?viewAsMember=true" className="hover:tw-underline">LinkedIn</a></li>
                                    <li><a target='_blank' href="https://t.me/Nexvoide" className="">Telegram</a></li>
                                    <li><a target='_blank' href="https://discord.com/channels/@nexvoide" className="hover:tw-underline">Discord</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Help Section */}
                        <div className="tw-col-span-12 md:tw-col-span-4 lg:tw-col-span-3 tw-flex tw-flex-col md:tw-items-center">
                            <div className={`${styles.f_widget} ${styles.about_widget} wow fadeInLeft`} data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                                <h3 className={`tw-text-lg tw-font-semibold tw-text-gray-200 tw-mt-8 md:tw-mt-0 tw-mb-4 md:tw-mb-8 tw-underline`}>Help</h3>
                                <ul className="tw-list-none tw-space-y-3 tw-text-white">
                                    <li><a href="#" className="hover:tw-underline">FAQ</a></li>
                                    <li><a href="#" className="hover:tw-underline">Terms & Conditions</a></li>
                                    <li><a href="#" className="hover:tw-underline">Privacy</a></li>
                                    <li><a href="#" className="hover:tw-underline">Documentation</a></li>
                                    <li><a href="#" className="hover:tw-underline">Refund Policy</a></li>
                                    <li><a href="#" className="hover:tw-underline">Support Policy</a></li>
                                    <li><a href="#" className="hover:tw-underline">Live Chat Support</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Team Solutions Section */}
                        <div className="tw-col-span-12 md:tw-col-span-4 lg:tw-col-span-3 tw-flex tw-flex-col lg:tw-items-center">
                            <div className={`${styles.f_widget} ${styles.social_widget} wow fadeInLeft`} data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                                <h3 className={`tw-text-lg tw-font-semibold tw-text-gray-200 tw-mt-8 md:tw-mt-0 tw-mb-4 md:tw-mb-8 tw-underline`}>Team Solutions</h3>
                                <div className="tw-flex tw-space-x-2">
                                    <a href="https://www.facebook.com/media/set/?set=a.429830395822301&type=3" className="tw-w-10 tw-h-10 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-border tw-border-gray-300 tw-text-[#2642ff] hover:tw-bg-[#2642ff] hover:tw-text-white tw-cursor-pointer" target='_blank'>
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                    <a href="https://x.com/nexvoide" className="tw-w-10 tw-h-10 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-border tw-border-gray-300 tw-text-[#2642ff] hover:tw-bg-[#2642ff] hover:tw-text-white tw-cursor-pointer" target='_blank'>
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/nexvoide/?viewAsMember=true" className="tw-w-10 tw-h-10 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-border tw-border-gray-300 tw-text-[#2642ff] hover:tw-bg-[#2642ff] hover:tw-text-white tw-cursor-pointer" target='_blank'>
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="https://www.pinterest.com/nexvoide/" className="tw-w-10 tw-h-10 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-border tw-border-gray-300 tw-text-[#2642ff] hover:tw-bg-[#2642ff] hover:tw-text-white tw-cursor-pointer" target='_blank'>
                                        <i className="fab fa-pinterest"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SVG ANIMATION */}
                <div className={styles.footer_bg}>
                    <div className={styles.footer_bg_one}></div>
                    <div className={styles.footer_bg_two}></div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className={styles.footer_bottom}>
                <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-justify-around tw-mx-4 md:tw-mx-0">
                    <div className="">
                        <p className="tw-mb-0 tw-text-white tw-text-sm">© Nexvoide Inc. 2025 All rights reserved.</p>
                    </div>

                    <div className="tw-mt-2 md:tw-mt-0 md:tw-text-right">
                        <p className="tw-text-white tw-text-sm">Made with <i className="icon_heart tw-text-red-500"></i> in <a href="http://nexvoide.com" target="_blank" rel="noopener noreferrer" className="hover:tw-text-indigo-600">Nexvoide</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;