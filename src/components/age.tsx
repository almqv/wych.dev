"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const hydrogenLineFrequency_Hz = 1420.405751768 * 10 ** 6;

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
    "thousand",
    "million",
    "billion",
    "trillion",
    "quadrillion",
    "quintillion",
    "sextillion",
    "septillion",
    "octillion",
    "nonillion",
    "decillion",
    "undecillion",
    "duodecillion",
    "tredecillion",
    "quattuordecillion",
    "quindecillion",
    "sexdecillion",
    "septendecillion",
    "octodecillion",
    "novemdecillion",
    "vigintillion",
  ];
  // const suffixes = [
  //   "",
  //   "K",
  //   "M",
  //   "Bn",
  //   "T",
  //   "Q",
  //   "Qt",
  //   "Sx",
  //   "Sp",
  //   "O",
  //   "N",
  //   "D",
  //   "Ud",
  //   "Dd",
  //   "Td",
  //   "Qad",
  //   "Qid",
  //   "Sd",
  //   "Sed",
  //   "Od",
  //   "Nod",
  //   "Vg",
  // ];

  let exponent = Math.floor(Math.log10(num) / 3);
  exponent = Math.min(exponent, suffixes.length - 1);

  const base = num / Math.pow(10, exponent * 3);
  const formattedBase = base.toFixed(precision);
  const suffix = suffixes[exponent];

  if (base) {
    return (
      <span
        className={cn(
          "inline-flex flex-row space-x-1 mr-0.5 pointer-events-none",
          className,
        )}
      >
        <span className="inline-block">{formattedBase}</span>
        <span className="inline-block">{suffix}</span>
      </span>
    );
  } else {
    return <span className={className}>---.------------</span>;
  }
};

type AgeHCyclesDisplayProps = {
  className?: string;
  precision?: number;
};

const AgeHCyclesDisplay: React.FC<AgeHCyclesDisplayProps> = ({
  className,
  precision = 2,
}) => {
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    function getAge() {
      const birth = 1050019200;
      const now = Math.floor(Date.now() / 1000);
      return now - birth;
    }

    const interval = setInterval(() => {
      setAge(getAge());
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <FormatBigNumber
      num={secondsToHydrogenLineCycles(age ?? 0)}
      precision={precision}
      className={className}
    />
  );
};

export default AgeHCyclesDisplay;
