import { cn } from "@/lib/utils";
import { unstable_noStore as noStore } from "next/cache";

function getAgeYearsUTC(
  birth: { year: number; monthIndex0: number; day: number },
  now: Date,
) {
  const birthYear = birth.year;
  const birthMonth = birth.monthIndex0;
  const birthDay = birth.day;

  const nowYear = now.getUTCFullYear();
  const nowMonth = now.getUTCMonth();
  const nowDay = now.getUTCDate();

  let age = nowYear - birthYear;
  const hasHadBirthdayThisYear =
    nowMonth > birthMonth || (nowMonth === birthMonth && nowDay >= birthDay);
  if (!hasHadBirthdayThisYear) age -= 1;
  return age;
}

type AgeProps = {
  className?: string;
};

export default function Age({ className }: AgeProps) {
  // Ensure this is computed on the server at request time (not frozen at build time).
  noStore();

  const ageYears = getAgeYearsUTC(
    { year: 2003, monthIndex0: 3, day: 11 }, // Apr 11 2003 (UTC), month is 0-based
    new Date(),
  );

  return (
    <span className={cn("pointer-events-none", className)}>
      {ageYears}
    </span>
  );
}
