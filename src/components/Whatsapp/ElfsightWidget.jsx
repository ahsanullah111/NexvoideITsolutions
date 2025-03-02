import React, { useEffect } from 'react';

const ElfsightWidget = () => {
  useEffect(() => {
    // Initialize Elfsight when the component is mounted
    if (window.ElfsightPlatform) {
      window.ElfsightPlatform.init();
    }
  }, []);

  return (
    // This div should have the class from your Elfsight widget embed code
    <div className="elfsight-app-85d5873c-16eb-4925-a9a6-d87db1e4be39" data-elfsight-app-lazy></div>
  );
};

export default ElfsightWidget;
