"use client";

import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";

const hydrogenLineFrequency_Hz = 1420.405751768 * 10 ** 6;

function getAge() {
  let birth = 1050019200;
  let now = Math.floor(Date.now() / 1000);
  return now - birth;
}

function secondsToHydrogenLineCycles(secs: number) {
  return secs * hydrogenLineFrequency_Hz;
}

type FormatBigNumberProps = {
  num: number;
  precision: number;
  className?: string;
};

const FormatBigNumber: React.FC<FormatBigNumberProps> = ({
  num,
  precision,
  className,
}) => {
  const suffixes = [
    "",
    "K",
    "M",
    "Bn",
    "T",
    "Q",
    "Qt",
    "Sx",
    "Sp",
    "O",
    "N",
    "D",
    "Ud",
    "Dd",
    "Td",
    "Qad",
    "Qid",
    "Sd",
    "Sed",
    "Od",
    "Nod",
    "Vg",
  ];

  let exponent = Math.floor(Math.log10(num) / 3);
  exponent = Math.min(exponent, suffixes.length - 1);

  const base = num / Math.pow(10, exponent * 3);
  const formattedBase = base.toFixed(precision);
  const suffix = suffixes[exponent];

  return (
    <span className={cn("inline-flex flex-row space-x-0.5 mr-1", className)}>
      <span className="inline-block">{formattedBase}</span>
      <span className="inline-block italic">{suffix}</span>
    </span>
  );
};

type AgeHCyclesDisplayProps = {
  className?: string;
  precision?: number;
};

const AgeHCyclesDisplay: React.FC<AgeHCyclesDisplayProps> = ({
  className,
  precision = 2,
}) => {
  const [cycles, setCycles] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycles(secondsToHydrogenLineCycles(getAge()));
    }, 400);

    return () => clearInterval(interval);
  });

  return (
    <FormatBigNumber num={cycles} precision={precision} className={className} />
  );
};

export default AgeHCyclesDisplay;
