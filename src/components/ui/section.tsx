import type { ElementType, HTMLAttributes, JSX } from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
  sectionClassName?: string
  as?: ElementType
} & HTMLAttributes<HTMLDivElement>

const CrossAnchor = ({ className }: { className?: string }): JSX.Element => (
  <div
    className={cn("absolute z-10 hidden h-[1px] w-[1px] sm:block", className)}
  >
    <div className="absolute top-[-5px] left-[-5px] flex h-[11px] w-[11px] items-center justify-center bg-background">
      <div className="h-[5px] w-[5px] rotate-45 bg-border-subtle" />
    </div>
  </div>
)

export const Section = ({
  children,
  sectionClassName,
  className,
  as: Component = "section",
  ...props
}: SectionProps): JSX.Element => (
  <Component
    className={cn(
      "-mt-px w-full border-border-subtle border-y",
      sectionClassName
    )}
    {...props}
  >
    <div className="relative mx-auto max-w-2xl">
      <div
        className={cn(
          "border-border-subtle px-6 py-14 sm:border-x md:py-24",
          className
        )}
      >
        {children}
      </div>

      <CrossAnchor className="top-[-1px] left-0" />
      <CrossAnchor className="top-[-1px] right-0" />
      <CrossAnchor className="bottom-[-1px] left-0" />
      <CrossAnchor className="right-0 bottom-[-1px]" />
    </div>
  </Component>
)
