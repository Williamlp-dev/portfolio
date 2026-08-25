"use client";

import {
  type MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import React, {
  createContext,
  forwardRef,
  type ReactNode,
  useContext,
  useRef,
} from "react";
import { cn } from "@/lib/utils";

interface DockProps {
  className?: string;
  children: ReactNode;
  magnification?: number;
  distance?: number;
}

interface DockIconProps {
  className?: string;
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 100;
const BASE_SIZE = 40;
const SPRING = { mass: 0.1, stiffness: 150, damping: 12 };

interface DockContextValue {
  mouseX: MotionValue<number>;
  magnification: number;
  distance: number;
}

const DockContext = createContext<DockContextValue | null>(null);

const Dock = ({
  className,
  children,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
}: DockProps) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <DockContext.Provider value={{ mouseX, magnification, distance }}>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "mx-auto w-max h-full flex items-end justify-center overflow-visible rounded-full border",
          className,
        )}
      >
        {children}
      </motion.div>
    </DockContext.Provider>
  );
};

const DockIcon = forwardRef<HTMLDivElement, DockIconProps>(
  ({ className, children, onClick }, forwardedRef) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const ref = (forwardedRef as React.RefObject<HTMLDivElement>) ?? innerRef;
    const context = useContext(DockContext);

    if (!context) {
      throw new Error("DockIcon must be used within a Dock component");
    }

    const { mouseX, magnification, distance } = context;

    const distanceCalc = useTransform(mouseX, (val: number) => {
      const bounds = (
        ref as React.RefObject<HTMLDivElement>
      ).current?.getBoundingClientRect() ?? {
        x: 0,
        width: 0,
      };
      return val - bounds.x - bounds.width / 2;
    });

    const containerSize = useSpring(
      useTransform(
        distanceCalc,
        [-distance, 0, distance],
        [BASE_SIZE, magnification, BASE_SIZE],
      ),
      SPRING,
    );

    return (
      <motion.div
        ref={ref}
        style={{ width: containerSize, height: containerSize }}
        onClick={onClick}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full shrink-0 cursor-pointer",
          className,
        )}
      >
        {children}
      </motion.div>
    );
  },
);

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon };
export type { DockProps, DockIconProps };
