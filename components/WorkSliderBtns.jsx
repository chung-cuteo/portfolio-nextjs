"use client";

import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!swiper) return;
    setIsBeginning(!!swiper.isBeginning);
    setIsEnd(!!swiper.isEnd);

    const handleSlideChange = () => {
      setIsBeginning(!!swiper.isBeginning);
      setIsEnd(!!swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);
    swiper.on("reachBeginning", handleSlideChange);
    swiper.on("reachEnd", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
      swiper.off("reachBeginning", handleSlideChange);
      swiper.off("reachEnd", handleSlideChange);
    };
  }, [swiper]);

  const prevClass = `${btnStyles} ${
    isBeginning ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
  }`;
  const nextClass = `${btnStyles} ${
    isEnd ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
  }`;

  return (
    <div className={containerStyles}>
      <button
        className={prevClass}
        onClick={() => swiper.slidePrev()}
        aria-label="Previous"
        aria-disabled={isBeginning}
        disabled={isBeginning}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className={nextClass}
        onClick={() => swiper.slideNext()}
        aria-label="Next"
        aria-disabled={isEnd}
        disabled={isEnd}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
