"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type AgeDisplayProps = {
  className?: string;
  precision?: number;
};

function getAge() {
  let birth = 1050019200;
  let now = Math.floor(Date.now() / 1000);
  return now - birth;
}

function secondsToYears(secs: number, precision: number) {
  let years = secs / 31556952;
  return years.toFixed(precision);
}

const AgeDisplay: React.FC<AgeDisplayProps> = ({
  className,
  precision = 2,
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  const anim = useCallback(() => {
    if (!ref.current) {
      return;
    }
    ref.current.textContent = secondsToYears(getAge(), precision);
  }, [])

  useEffect(() => {
    const animFrame = requestAnimationFrame(() => {
      anim();
    });

    return () => {
      cancelAnimationFrame(animFrame);
    };
  }, [getAge, ref.current]);

  return <span ref={ref} className={className}>??</span>;
};

export default AgeDisplay;
