import { useEffect, useState } from 'react';
import EncryptionVideo from '../../assets/icons/encryption.webm';
import lockTop from '../../assets/icons/LockTop.png';
import lockMain from '../../assets/icons/LockMain.png';

import '@/index.css'

const EncryptionVid = () => {
  const [lockTopHidden, setLockTopHidden] = useState(false);

  useEffect(() => console.log("Mouse Event: ", lockTopHidden), [lockTopHidden]);

  return (
    <div className="tw-relative tw-flex tw-flex-col tw-items-center tw-h-full tw-w-full" id="about-me">

      <div className='tw-text-white tw-text-2xl lg:tw-text-4xl tw-text-center tw-font-semibold tw-absolute tw-top-[-10px] md:tw-top-2 xl:tw-top-16'>
        Performance <span
                    style={{
                        background: 'linear-gradient(to right, #cccccc, #2642FF, #cccccc)',
                        backgroundSize: '200% auto', // Double the width for smooth animation
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'gradientAnimation 5s linear  infinite', // Add animation
                    }}
                > & </span>Security
      </div>

      <video
        autoPlay
        muted
        loop
        className="tw-h-full tw-w-full tw-object-cover"
      >
        <source src={EncryptionVideo} type="video/webm" />
      </video>

      <div
        className="tw-absolute tw-top-[40%] md:tw-top-[46%] tw-flex tw-flex-col tw-items-center">
        <div className='tw-absolute tw-top-[-10px] md:tw-top-[-21px]'>
          <img src={lockTop} className={`tw-w-4 md:tw-w-8 xl:tw-w-12 ${lockTopHidden ? 'tw-hidden' : ''}`} alt="Lock Top" />
        </div>
        <div className='tw-z-10' onMouseEnter={() => setLockTopHidden(true)}
          onMouseLeave={() => setLockTopHidden(false)}>
          <img src={lockMain} className="tw-w-8 md:tw-w-12 xl:tw-w-16" alt="Lock Main" />
        </div>

        <span className='tw-flex tw-flex-1 tw-text-xs lg:tw-text-sm tw-text-white tw-justify-center tw-items-center md:tw-py-1 tw-px-2 tw-rounded-full md:tw-mt-2' style={{
          background: 'rgba(38, 66, 255, 0.2)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(9.9px)',
          webkitBackdropFilter: 'blur(9.9px)'
        }}>
          Encryption
        </span>
      </div>

    </div >
  );
}

export default EncryptionVid;