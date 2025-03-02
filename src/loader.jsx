import React, { useState, useEffect } from "react";
import SvgNexvoideBg from './assets/icons/NexvoideBg';

import { Progress } from "@/components/ui/progress";

const Loader = ({ intervalTime = 50 }) => { // Default interval time is 50ms
    const [progress, setProgress] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const nextValue = prev + 1;
          if (nextValue > 100) {
            clearInterval(interval);
            return 100;
          }
          return nextValue;
        });
      }, intervalTime); // Use the interval time
  
      return () => clearInterval(interval);
    }, [intervalTime]); // Re-run effect if intervalTime changes
  
    return (
      <div className="tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-bg-[#010333] tw-z-[9999]">
        <SvgNexvoideBg />
        <div className="tw-w-[20%] tw-absolute tw-text-white tw-bottom-[18rem] md:tw-bottom-[16rem] lg:tw-bottom-[16rem] xl:tw-bottom-[17.8rem] tw-text-center">
          <Progress value={progress} />
        </div>
      </div>
    );
  };
  
  export default Loader; 
