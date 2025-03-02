import { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import NexVoideLogo from '../../assets/icons/nexvoidelogo.png';
import styles from './navbar.module.css';
import '../../variables.css';

const NavBar = ({ onHomeClick, onServicesClick, onClientsClick, onAboutClick, onContactClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get the current location

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="tw-relative tw-w-[100%] tw-top-0 tw-z-[3000] tw-backdrop-blur-[9.9px] tw-shadow-md">
            <div className="tw-flex tw-justify-between tw-items-center tw-mx-8 tw-py-4">
                <div>
                    <img src={NexVoideLogo} className="tw-h-7 tw-w-30" alt="Logo" />
                </div>
                <div className="tw-hidden lg:tw-flex tw-text-white tw-items-center tw-gap-12 tw-rounded-lg tw-py-[8px] tw-px-9 tw-cursor-pointer tw-select-none" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', border: '0.5px solid white' }}>
                    <div onClick={onHomeClick} className='hover:tw-text-[#3b82f6] hover:tw-font-semibold'>
                        Home
                    </div>
                    <div onClick={onServicesClick} className='hover:tw-text-[#3b82f6] hover:tw-font-semibold'>Services</div>
                    <div onClick={onClientsClick} className='hover:tw-text-[#3b82f6] hover:tw-font-semibold'>Clients Spotlight</div>
                    <div
                        onClick={onAboutClick}
                        className={`hover:tw-text-[#3b82f6] hover:tw-font-semibold ${location.pathname === '/about' ? 'tw-text-xl' : ''}`}
                    >
                        About
                    </div>
                    <div onClick={onContactClick} className='hover:tw-text-[#3b82f6] hover:tw-font-semibold'>Contact</div>
                </div>
                <div className="tw-hidden lg:tw-block tw-text-white">
                    <button className={styles.buttonWithAnimation} onClick={onContactClick}>
                        Hire Us!
                    </button>
                </div>
                <div className="lg:tw-hidden">
                    <div className={styles.hamburger} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={`lg:tw-hidden ${styles.menu} ${isOpen ? styles.open : ''}`}>
                    <div onClick={onHomeClick}>Home</div>
                    <div onClick={onServicesClick}>Services</div>
                    <div onClick={onClientsClick}>Clients Spotlight</div>
                    <div onClick={onAboutClick}>About</div>
                    <div onClick={onContactClick}>Contact</div>
                    <div>
                        <button className={styles.buttonWithAnimation} onClick={onContactClick}>
                            Hire Us!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;