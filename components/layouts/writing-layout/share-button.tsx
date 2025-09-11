"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ShareButton = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing:", error));
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            aria-label="Share Button"
            onClick={handleShare}
            className="focus:outline-none cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
            >
              <path
                fill="#2E2E2E"
                fillRule="evenodd"
                d="M18.8 8.2H16V7h3.001c.55 0 .999.446.999.996v13.008a1 1 0 0 1-.996.996H4.996A1 1 0 0 1 4 21.004V7.996A1 1 0 0 1 4.999 7H8v1.2H5.2v12.6h13.6zm-6.2-3.938V13.5h-1.2V4.262L9.313 6.349L8.464 5.5l2.829-2.828a1 1 0 0 1 1.414 0L15.536 5.5l-.849.849z"
              />
            </svg>
          </button>
        </TooltipTrigger>
        <TooltipContent sideOffset={8}>
          <p>share</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ShareButton;
