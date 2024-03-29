"use client";

import React, { ReactNode, HTMLProps } from "react";
import Renderer, { CurveProps } from "@/components/3d/renderer";
import { cn } from "@/lib/utils";

const RenderedSection: React.FC<
  HTMLProps<HTMLElement> & {
    children?: ReactNode;
    evenly?: boolean;
    curve: CurveProps;
    curveClassname?: string;
  }
> = ({
  children,
  className,
  curveClassname,
  evenly = false,
  curve,
  ...props
}) => {
  return (
    <div className="flex w-full flex-col items-center align-middle relative">
      <div className={cn("absolute", curveClassname)}>
        <Renderer {...curve} />
      </div>
      <section className={cn("relative", className)} {...props}>
        {children}
      </section>
    </div>
  );
};

export default RenderedSection;
