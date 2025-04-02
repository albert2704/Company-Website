import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Add TypeScript definitions for Facebook SDK
declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: (element?: HTMLElement | null) => void;
      };
      init: (params) => void;
    };
    fbAsyncInit?: () => void;
  }
}

interface FacebookFeedProps {
  pageUrl: string;
  width?: number;
  height?: number;
  tabs?: string;
  hideCover?: boolean;
  showFacepile?: boolean;
  smallHeader?: boolean;
  adaptContainerWidth?: boolean;
  className?: string;
}

const FacebookFeed: React.FC<FacebookFeedProps> = ({
  pageUrl,
  width = 340,
  height = 500,
  tabs = "timeline",
  hideCover = false,
  showFacepile = true,
  smallHeader = false,
  adaptContainerWidth = true,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Function to handle FB SDK initialization
    const initFacebookSDK = () => {
      if (window.FB) {
        window.FB.XFBML.parse(containerRef.current);
        setIsLoaded(true);
      } else {
        // Retry after a short delay if FB SDK isn't loaded yet
        setTimeout(initFacebookSDK, 1000);
      }
    };

    // Create a function to handle SDK load
    const previousInitFunction = window.fbAsyncInit;
    window.fbAsyncInit = function () {
      // Call any previously set initialization
      if (previousInitFunction) {
        previousInitFunction();
      }

      // Initialize our component
      initFacebookSDK();
    };

    // Start initialization
    initFacebookSDK();

    // Cleanup
    return () => {
      window.fbAsyncInit = previousInitFunction;
    };
  }, []);

  // Re-parse when props change
  useEffect(() => {
    if (window.FB && isLoaded) {
      window.FB.XFBML.parse(containerRef.current);
    }
  }, [
    isLoaded,
    pageUrl,
    width,
    height,
    tabs,
    hideCover,
    showFacepile,
    smallHeader,
    adaptContainerWidth,
  ]);

  return (
    <motion.div
      ref={containerRef}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="fb-page"
        data-href={pageUrl}
        data-width={width}
        data-height={height}
        data-tabs={tabs}
        data-hide-cover={hideCover ? "true" : "false"}
        data-show-facepile={showFacepile ? "true" : "false"}
        data-small-header={smallHeader ? "true" : "false"}
        data-adapt-container-width={adaptContainerWidth ? "true" : "false"}
        data-lazy="true"
      >
        <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
          <a href={pageUrl}>VietSolution</a>
        </blockquote>
      </div>
    </motion.div>
  );
};

export default FacebookFeed;
