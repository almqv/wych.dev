import * as React from "react";
import { SVGProps } from "react";

type LogoProps = {
  className?: string;
} & SVGProps<SVGSVGElement>;

const Logo: React.FC<LogoProps> = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 179 103"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M24.5.5H.5l35 102h24L24.5.5ZM71.5 9.5h-25l24 84h24l12-44 11 44h25l23-84h-24l-13 50-13-50h-19l-13 50-12-50Z"
    />
  </svg>
);
export default Logo;
