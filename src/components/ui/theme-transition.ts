"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

// -- Types ------------------------------------------------------------------

export type AnimationVariant =
  | "circle"
  | "rectangle"
  | "gif"
  | "polygon"
  | "circle-blur";

export type AnimationStart =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center"
  | "top-center"
  | "bottom-center"
  | "bottom-up"
  | "top-down"
  | "left-right"
  | "right-left";

interface Animation {
  name: string;
  css: string;
}

// -- Internals --------------------------------------------------------------

const getPositionCoords = (position: AnimationStart) => {
  switch (position) {
    case "top-left":
      return { cx: "0", cy: "0" };
    case "top-right":
      return { cx: "40", cy: "0" };
    case "bottom-left":
      return { cx: "0", cy: "40" };
    case "bottom-right":
      return { cx: "40", cy: "40" };
    case "top-center":
      return { cx: "20", cy: "0" };
    case "bottom-center":
      return { cx: "20", cy: "40" };
    default:
      return { cx: "20", cy: "20" };
  }
};

const generateSVG = (variant: AnimationVariant, start: AnimationStart) => {
  if (variant === "circle-blur") {
    if (start === "center") {
      return `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><filter id="blur"><feGaussianBlur stdDeviation="2"/></filter></defs><circle cx="20" cy="20" r="18" fill="white" filter="url(%23blur)"/></svg>`;
    }
    const { cx, cy } = getPositionCoords(start);
    return `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><filter id="blur"><feGaussianBlur stdDeviation="2"/></filter></defs><circle cx="${cx}" cy="${cy}" r="18" fill="white" filter="url(%23blur)"/></svg>`;
  }
  if (start === "center") return undefined;
  if (variant === "rectangle") return "";
  const { cx, cy } = getPositionCoords(start);
  if (variant === "circle") {
    return `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="${cx}" cy="${cy}" r="20" fill="white"/></svg>`;
  }
  return "";
};

const getTransformOrigin = (start: AnimationStart) => {
  switch (start) {
    case "top-left":
      return "top left";
    case "top-right":
      return "top right";
    case "bottom-left":
      return "bottom left";
    case "bottom-right":
      return "bottom right";
    case "top-center":
      return "top center";
    case "bottom-center":
      return "bottom center";
    default:
      return "center";
  }
};

export const createAnimation = (
  variant: AnimationVariant,
  start: AnimationStart = "center",
  blur = false,
  url?: string,
): Animation => {
  const svg = generateSVG(variant, start);
  const transformOrigin = getTransformOrigin(start);
  const b = blur ? "-blur" : "";

  if (variant === "rectangle") {
    const getClipPath = (d: AnimationStart) => {
      const full = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      switch (d) {
        case "bottom-up":
          return {
            from: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            to: full,
          };
        case "top-down":
          return { from: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", to: full };
        case "left-right":
          return { from: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", to: full };
        case "right-left":
          return {
            from: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
            to: full,
          };
        case "top-left":
          return { from: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)", to: full };
        case "top-right":
          return {
            from: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)",
            to: full,
          };
        case "bottom-left":
          return {
            from: "polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)",
            to: full,
          };
        case "bottom-right":
          return {
            from: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)",
            to: full,
          };
        default:
          return {
            from: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            to: full,
          };
      }
    };
    const cp = getClipPath(start);
    const blurCss = blur ? "filter: blur(8px);" : "";
    const blurMid = blur ? "50% { filter: blur(4px); }" : "";
    const blurEnd = blur ? "filter: blur(0px);" : "";
    const blurStart2 = blur ? "filter: blur(2px);" : "";
    return {
      name: `rectangle-${start}${b}`,
      css: `
        ::view-transition-group(root) { animation-duration: 0.7s; animation-timing-function: var(--expo-out); }
        ::view-transition-new(root) { animation-name: reveal-light-${start}${b}; ${blurStart2} }
        ::view-transition-old(root), .dark::view-transition-old(root) { animation: none; z-index: -1; }
        .dark::view-transition-new(root) { animation-name: reveal-dark-${start}${b}; ${blurStart2} }
        @keyframes reveal-dark-${start}${b} { from { clip-path: ${cp.from}; ${blurCss} } ${blurMid} to { clip-path: ${cp.to}; ${blurEnd} } }
        @keyframes reveal-light-${start}${b} { from { clip-path: ${cp.from}; ${blurCss} } ${blurMid} to { clip-path: ${cp.to}; ${blurEnd} } }`,
    };
  }

  if (variant === "circle" && start === "center") {
    const blurCss = blur ? "filter: blur(8px);" : "";
    const blurMid = blur ? "50% { filter: blur(4px); }" : "";
    const blurEnd = blur ? "filter: blur(0px);" : "";
    const blurStart2 = blur ? "filter: blur(2px);" : "";
    return {
      name: `circle-center${b}`,
      css: `
        ::view-transition-group(root) { animation-duration: 0.7s; animation-timing-function: var(--expo-out); }
        ::view-transition-new(root) { animation-name: reveal-light${b}; ${blurStart2} }
        ::view-transition-old(root), .dark::view-transition-old(root) { animation: none; z-index: -1; }
        .dark::view-transition-new(root) { animation-name: reveal-dark${b}; ${blurStart2} }
        @keyframes reveal-dark${b} { from { clip-path: circle(0% at 50% 50%); ${blurCss} } ${blurMid} to { clip-path: circle(100% at 50% 50%); ${blurEnd} } }
        @keyframes reveal-light${b} { from { clip-path: circle(0% at 50% 50%); ${blurCss} } ${blurMid} to { clip-path: circle(100% at 50% 50%); ${blurEnd} } }`,
    };
  }

  if (variant === "gif") {
    return {
      name: `gif-${start}`,
      css: `
        ::view-transition-group(root) { animation-timing-function: var(--expo-in); }
        ::view-transition-new(root) { mask: url('${url}') center / 0 no-repeat; animation: scale 3s; }
        ::view-transition-old(root), .dark::view-transition-old(root) { animation: scale 3s; }
        @keyframes scale { 0% { mask-size: 0; } 10% { mask-size: 50vmax; } 90% { mask-size: 50vmax; } 100% { mask-size: 2000vmax; } }`,
    };
  }

  if (variant === "circle-blur") {
    if (start === "center") {
      return {
        name: `circle-blur-center`,
        css: `
          ::view-transition-group(root) { animation-timing-function: var(--expo-out); }
          ::view-transition-new(root) { mask: url('${svg}') center / 0 no-repeat; mask-origin: content-box; animation: scale 1s; transform-origin: center; }
          ::view-transition-old(root), .dark::view-transition-old(root) { animation: scale 1s; transform-origin: center; z-index: -1; }
          @keyframes scale { to { mask-size: 350vmax; } }`,
      };
    }
    return {
      name: `circle-blur-${start}`,
      css: `
        ::view-transition-group(root) { animation-timing-function: var(--expo-out); }
        ::view-transition-new(root) { mask: url('${svg}') ${start.replace("-", " ")} / 0 no-repeat; mask-origin: content-box; animation: scale 1s; transform-origin: ${transformOrigin}; }
        ::view-transition-old(root), .dark::view-transition-old(root) { animation: scale 1s; transform-origin: ${transformOrigin}; z-index: -1; }
        @keyframes scale { to { mask-size: 350vmax; } }`,
    };
  }

  if (variant === "polygon") {
    const getPolygonClipPaths = (p: AnimationStart) => {
      switch (p) {
        case "top-left":
          return {
            darkFrom: "polygon(50% -71%, -50% 71%, -50% 71%, 50% -71%)",
            darkTo: "polygon(50% -71%, -50% 71%, 50% 171%, 171% 50%)",
            lightFrom: "polygon(171% 50%, 50% 171%, 50% 171%, 171% 50%)",
            lightTo: "polygon(171% 50%, 50% 171%, -50% 71%, 50% -71%)",
          };
        case "top-right":
          return {
            darkFrom: "polygon(150% -71%, 250% 71%, 250% 71%, 150% -71%)",
            darkTo: "polygon(150% -71%, 250% 71%, 50% 171%, -71% 50%)",
            lightFrom: "polygon(-71% 50%, 50% 171%, 50% 171%, -71% 50%)",
            lightTo: "polygon(-71% 50%, 50% 171%, 250% 71%, 150% -71%)",
          };
        default:
          return {
            darkFrom: "polygon(50% -71%, -50% 71%, -50% 71%, 50% -71%)",
            darkTo: "polygon(50% -71%, -50% 71%, 50% 171%, 171% 50%)",
            lightFrom: "polygon(171% 50%, 50% 171%, 50% 171%, 171% 50%)",
            lightTo: "polygon(171% 50%, 50% 171%, -50% 71%, 50% -71%)",
          };
      }
    };
    const cp = getPolygonClipPaths(start);
    const blurCss = blur ? "filter: blur(8px);" : "";
    const blurMid = blur ? "50% { filter: blur(4px); }" : "";
    const blurEnd = blur ? "filter: blur(0px);" : "";
    const blurStart2 = blur ? "filter: blur(2px);" : "";
    return {
      name: `polygon-${start}${b}`,
      css: `
        ::view-transition-group(root) { animation-duration: 0.7s; animation-timing-function: var(--expo-out); }
        ::view-transition-new(root) { animation-name: reveal-light-${start}${b}; ${blurStart2} }
        ::view-transition-old(root), .dark::view-transition-old(root) { animation: none; z-index: -1; }
        .dark::view-transition-new(root) { animation-name: reveal-dark-${start}${b}; ${blurStart2} }
        @keyframes reveal-dark-${start}${b} { from { clip-path: ${cp.darkFrom}; ${blurCss} } ${blurMid} to { clip-path: ${cp.darkTo}; ${blurEnd} } }
        @keyframes reveal-light-${start}${b} { from { clip-path: ${cp.lightFrom}; ${blurCss} } ${blurMid} to { clip-path: ${cp.lightTo}; ${blurEnd} } }`,
    };
  }

  // circle with positional start
  const getClipPos = (p: AnimationStart) => {
    switch (p) {
      case "top-left":
        return "0% 0%";
      case "top-right":
        return "100% 0%";
      case "bottom-left":
        return "0% 100%";
      case "bottom-right":
        return "100% 100%";
      case "top-center":
        return "50% 0%";
      case "bottom-center":
        return "50% 100%";
      default:
        return "50% 50%";
    }
  };
  const clipPos = getClipPos(start);
  const blurCss = blur ? "filter: blur(8px);" : "";
  const blurMid = blur ? "50% { filter: blur(4px); }" : "";
  const blurEnd = blur ? "filter: blur(0px);" : "";
  const blurStart2 = blur ? "filter: blur(2px);" : "";
  return {
    name: `circle-${start}${b}`,
    css: `
      ::view-transition-group(root) { animation-duration: 1s; animation-timing-function: var(--expo-out); }
      ::view-transition-new(root) { animation-name: reveal-light-${start}${b}; ${blurStart2} }
      ::view-transition-old(root), .dark::view-transition-old(root) { animation: none; z-index: -1; }
      .dark::view-transition-new(root) { animation-name: reveal-dark-${start}${b}; ${blurStart2} }
      @keyframes reveal-dark-${start}${b} { from { clip-path: circle(0% at ${clipPos}); ${blurCss} } ${blurMid} to { clip-path: circle(150% at ${clipPos}); ${blurEnd} } }
      @keyframes reveal-light-${start}${b} { from { clip-path: circle(0% at ${clipPos}); ${blurCss} } ${blurMid} to { clip-path: circle(150% at ${clipPos}); ${blurEnd} } }`,
  };
};

// -- Hook -------------------------------------------------------------------

export const useThemeToggle = ({
  variant = "circle",
  start = "center",
  blur = false,
  gifUrl = "",
}: {
  variant?: AnimationVariant;
  start?: AnimationStart;
  blur?: boolean;
  gifUrl?: string;
} = {}) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const applyStyles = useCallback((css: string) => {
    if (typeof window === "undefined") return;
    const id = "theme-transition-styles";
    let el = document.getElementById(id) as HTMLStyleElement;
    if (!el) {
      el = document.createElement("style");
      el.id = id;
      document.head.appendChild(el);
    }
    el.textContent = css;
  }, []);

  const runTransition = useCallback(
    (switchFn: () => void) => {
      const { css } = createAnimation(variant, start, blur, gifUrl);
      applyStyles(css);
      if (typeof window === "undefined") return;
      if (!document.startViewTransition) {
        switchFn();
        return;
      }
      document.startViewTransition(switchFn);
    },
    [variant, start, blur, gifUrl, applyStyles],
  );

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
    runTransition(() => setTheme(theme === "light" ? "dark" : "light"));
  }, [theme, setTheme, runTransition]);

  const setLightTheme = useCallback(() => {
    setIsDark(false);
    runTransition(() => setTheme("light"));
  }, [setTheme, runTransition]);

  const setDarkTheme = useCallback(() => {
    setIsDark(true);
    runTransition(() => setTheme("dark"));
  }, [setTheme, runTransition]);

  const setSystemTheme = useCallback(() => {
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
    runTransition(() => setTheme("system"));
  }, [setTheme, runTransition]);

  return {
    isDark,
    setIsDark,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    setSystemTheme,
  };
};
