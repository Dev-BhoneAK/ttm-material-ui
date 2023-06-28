import { useState } from "react";

export default function useSwipeEvent() {
  const [touchPosition, setTouchPosition] = useState(undefined);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const checkTouchPositionDiff = (event) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = event.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      return "next";
    }

    if (diff < -5) {
      return "prev";
    }
  };

  return { handleTouchStart, checkTouchPositionDiff };
}
