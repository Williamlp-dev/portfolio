"use client";

import { Input as BaseInput } from "@base-ui/react/input";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import React, {
  type ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Shared styles
// ---------------------------------------------------------------------------

export type InputProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "size"
> & {
  size?: "sm" | "default" | "lg" | number;
  unstyled?: boolean;
  nativeInput?: boolean;
  wrapperClassName?: string;
};

export const inputClassName = cn(
  "h-8.5 w-full min-w-0 rounded-[inherit] px-[calc(--spacing(3)-1px)] text-foreground leading-8.5 outline-none [transition:background-color_5000000s_ease-in-out_0s] placeholder:text-muted-foreground/72 sm:h-7.5 sm:leading-7.5 autofill:[-webkit-text-fill-color:var(--foreground)]",
  "bg-transparent",
);

export const wrapperClass = cn(
  "relative inline-flex w-full rounded-lg border border-input bg-background not-dark:bg-clip-padding text-base shadow-xs/5 ring-ring/24 transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-has-disabled:not-has-focus-visible:not-has-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] has-focus-visible:has-aria-invalid:border-destructive/64 has-focus-visible:has-aria-invalid:ring-destructive/16 has-aria-invalid:border-destructive/36 has-focus-visible:border-ring has-autofill:bg-foreground/4 has-disabled:opacity-64 has-[:disabled,:focus-visible,[aria-invalid]]:shadow-none has-focus-visible:ring-[3px] sm:text-sm dark:has-autofill:bg-foreground/8 dark:has-aria-invalid:ring-destructive/24 dark:not-has-disabled:not-has-focus-visible:not-has-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)]",
);

export function Input({
  className,
  wrapperClassName,
  size = "default",
  unstyled = false,
  nativeInput = false,
  style,
  ...props
}: InputProps): React.ReactElement {
  const finalInputClassName = cn(
    inputClassName,
    size === "sm" &&
      "h-7.5 px-[calc(--spacing(2.5)-1px)] leading-7.5 sm:h-6.5 sm:leading-6.5",
    size === "lg" && "h-9.5 leading-9.5 sm:h-8.5 sm:leading-8.5",
    props.type === "search" &&
      "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
    props.type === "file" &&
      "text-muted-foreground file:me-3 file:bg-transparent file:font-medium file:text-foreground file:text-sm",
    className,
  );

  return (
    <span
      className={cn(!unstyled && wrapperClass, wrapperClassName) || undefined}
      data-size={size}
      data-slot="input-control"
    >
      {nativeInput ? (
        <input
          className={finalInputClassName}
          data-slot="input"
          size={typeof size === "number" ? size : undefined}
          style={typeof style === "function" ? undefined : style}
          {...props}
        />
      ) : (
        <BaseInput
          className={finalInputClassName}
          data-slot="input"
          size={typeof size === "number" ? size : undefined}
          style={style}
          {...props}
        />
      )}
    </span>
  );
}

// ---------------------------------------------------------------------------
// SmoothInput — Base UI Input + animated spring caret
// ---------------------------------------------------------------------------

const SPRING_CONFIG = { stiffness: 500, damping: 30, mass: 0.5 };

const PASSWORD_CHAR =
  typeof navigator !== "undefined" &&
  navigator.userAgent.match(/firefox|fxios/i)
    ? "\u25CF"
    : "\u2022";

type SmoothInputProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "type" | "size"
> & {
  type?: "text" | "password";
  wrapperClassName?: string;
  size?: "sm" | "default" | "lg" | number;
};

export const SmoothInput = ({
  className,
  wrapperClassName,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  type = "text",
  size = "default",
  placeholder,
  style,
  ...props
}: SmoothInputProps) => {
  const [internalValue, setInternalValue] = useState<string>(
    String(defaultValue ?? ""),
  );
  const isControlled = value !== undefined;
  const inputValue = isControlled ? String(value) : internalValue;

  const caretX = useMotionValue(0);
  const caretOpacity = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();

  const springCaretX = useSpring(
    caretX,
    prefersReducedMotion
      ? { stiffness: 10_000, damping: 100, mass: 0.1 }
      : SPRING_CONFIG,
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  // ── helpers ──────────────────────────────────────────────────────────────

  const syncMeasureSpan = () => {
    const input = inputRef.current;
    const span = measureRef.current;
    if (!input || !span) return;
    const s = window.getComputedStyle(input);
    let fs = s.fontSize;
    if (
      PASSWORD_CHAR === "\u2022" &&
      input.type === "password" &&
      !navigator.userAgent.match(/chrome|chromium|crios/i)
    ) {
      fs = `${parseFloat(fs) + 6.25}px`;
    }
    span.style.font = `${s.fontStyle} ${s.fontWeight} ${fs} ${s.fontFamily}`;
    span.style.letterSpacing = s.letterSpacing;
  };

  const measurePrefixWidth = (text: string): number | null => {
    const input = inputRef.current;
    const span = measureRef.current;
    if (!input || !span) return null;
    syncMeasureSpan();
    span.textContent = text;
    const pl = parseFloat(window.getComputedStyle(input).paddingLeft) || 0;
    return text.length > 0 ? span.offsetWidth + pl : pl - 1;
  };

  const scrollCaretIntoView = (target: HTMLInputElement, absW: number) => {
    const s = window.getComputedStyle(target);
    const pl = parseFloat(s.paddingLeft) || 0;
    const pr = parseFloat(s.paddingRight) || 0;
    const maxScroll = Math.max(0, target.scrollWidth - target.clientWidth);
    if (absW > target.scrollLeft + target.clientWidth - pr) {
      target.scrollLeft = Math.min(absW - target.clientWidth + pr, maxScroll);
    } else if (absW < target.scrollLeft + pl) {
      target.scrollLeft = Math.max(0, absW - pl);
    }
  };

  const updateCaret = (target: HTMLInputElement) => {
    const ss = target.selectionStart ?? 0;
    const se = target.selectionEnd ?? 0;
    const hasSelection = ss !== se;
    const idx = hasSelection
      ? target.selectionDirection === "backward"
        ? ss
        : se
      : ss;
    const isPassword = target.type === "password";
    const textBefore = isPassword
      ? PASSWORD_CHAR.repeat(idx)
      : target.value.slice(0, idx);
    const absW = measurePrefixWidth(textBefore);
    if (absW === null) return;
    scrollCaretIntoView(target, absW);
    const s = window.getComputedStyle(target);
    const pl = parseFloat(s.paddingLeft) || 0;
    const pr = parseFloat(s.paddingRight) || 0;
    const pos = absW - target.scrollLeft;
    const min = pl - 1;
    const max = target.clientWidth - pr;
    const targetX = Math.min(pos, max);
    if (caretOpacity.get() === 0) {
      caretX.set(targetX);
      springCaretX.jump(targetX);
    } else {
      caretX.set(targetX);
    }

    caretOpacity.set(!hasSelection && pos >= min && pos <= max + 1 ? 1 : 0);
  };

  const updateCaretRef = useRef(updateCaret);
  updateCaretRef.current = updateCaret;

  // sync caret when value changes while focused
  useEffect(() => {
    const input = inputRef.current;
    if (
      input &&
      document.activeElement === input &&
      (inputValue !== undefined || type !== undefined)
    ) {
      updateCaretRef.current(input);
    }
  }, [inputValue, type]);

  // attach event listeners once
  useEffect(() => {
    const input = inputRef.current;
    const container = containerRef.current;
    if (!input || !container) return;

    const tick = () => {
      if (document.activeElement === input) updateCaretRef.current(input);
    };
    const onSelection = () => {
      if (document.activeElement !== input) return;
      requestAnimationFrame(() => {
        if (document.activeElement === input) updateCaretRef.current(input);
      });
    };
    document.addEventListener("selectionchange", onSelection);
    document.fonts.addEventListener("loadingdone", tick);
    void document.fonts.ready.then(tick);
    input.addEventListener("scroll", tick);
    const ro = new ResizeObserver(tick);
    ro.observe(container);
    tick();
    return () => {
      document.removeEventListener("selectionchange", onSelection);
      document.fonts.removeEventListener("loadingdone", tick);
      input.removeEventListener("scroll", tick);
      ro.disconnect();
    };
  }, []);

  return (
    <span
      className={cn(wrapperClass, wrapperClassName)}
      data-slot="input-control"
    >
      <div
        ref={containerRef}
        className="relative grid grid-cols-1 w-full"
        style={{ caretColor: "transparent" }}
      >
        {/* Base UI input rendered as native input via render prop */}
        <BaseInput
          {...(props as React.ComponentPropsWithoutRef<"input">)}
          render={<input ref={inputRef} />}
          type={type}
          placeholder={placeholder}
          value={inputValue}
          className={cn(
            inputClassName,
            size === "sm" &&
              "h-7.5 px-[calc(--spacing(2.5)-1px)] leading-7.5 sm:h-6.5 sm:leading-6.5",
            size === "lg" && "h-11 leading-11 sm:h-11 sm:leading-11", // overridden lg to h-11 to match buttons
            "col-start-1 col-end-2 row-start-1 row-end-2",
            className,
          )}
          style={style}
          onChange={(e) => {
            if (!isControlled) setInternalValue(e.target.value);
            onChange?.(e);
            requestAnimationFrame(() => updateCaretRef.current(e.target));
          }}
          onBlur={(e) => {
            caretOpacity.set(0);
            onBlur?.(e);
          }}
          onFocus={(e) => {
            updateCaretRef.current(e.target);
            onFocus?.(e);
          }}
          onKeyUp={(e) =>
            updateCaretRef.current(e.currentTarget as HTMLInputElement)
          }
          onClick={(e) =>
            updateCaretRef.current(e.currentTarget as HTMLInputElement)
          }
        />

        {/* hidden measurer */}
        <span
          ref={measureRef}
          aria-hidden
          className="pointer-events-none invisible absolute top-0 left-0 whitespace-pre"
        />

        {/* animated caret */}
        <motion.div
          className="bg-primary pointer-events-none col-start-1 col-end-2 row-start-1 row-end-2 h-[0.9em] w-0.5 self-center"
          style={{ x: springCaretX, opacity: caretOpacity }}
        />
      </div>
    </span>
  );
};
