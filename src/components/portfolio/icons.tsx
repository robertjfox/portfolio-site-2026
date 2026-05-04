export function DiagramIcon({
  name,
  color,
  className = "h-9 w-9",
}: {
  name: string;
  color: string;
  className?: string;
}) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 48 48"
      style={{ color }}
    >
      {name === "shirt" && (
        <path
          {...commonProps}
          d="M17 8l7 4 7-4 10 7-6 8-4-3v20H17V20l-4 3-6-8 10-7z"
        />
      )}
      {name === "cloud" && (
        <path
          {...commonProps}
          d="M17 34h17a8 8 0 0 0 1-16 12 12 0 0 0-23-2 9 9 0 0 0 5 18zm7-13v15m0-15-6 6m6-6 6 6"
        />
      )}
      {name === "grid" && (
        <path
          {...commonProps}
          d="M10 10h11v11H10V10zm17 0h11v11H27V10zM10 27h11v11H10V27zm17 0h11v11H27V27z"
        />
      )}
      {name === "parallel" && (
        <path
          {...commonProps}
          d="M8 24h8c5 0 7-10 14-10h10M30 14l-4-4m4 4-4 4M8 24h8c5 0 7 10 14 10h10M30 34l-4-4m4 4-4 4M8 24h32"
        />
      )}
      {name === "timer" && (
        <path
          {...commonProps}
          d="M18 6h12M24 6v6m0 30a15 15 0 1 0 0-30 15 15 0 0 0 0 30zm0-15 7-5m7-8 3-3M10 10l-3-3"
        />
      )}
      {name === "sparkles" && (
        <path
          {...commonProps}
          d="M24 6l3 9 9 3-9 3-3 9-3-9-9-3 9-3 3-9zm-10 24 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5zm24-2 1 4 4 1-4 1-1 4-1-4-4-1 4-1 1-4z"
        />
      )}
      {name === "user" && (
        <path
          {...commonProps}
          d="M24 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-14 16c2-7 7-11 14-11s12 4 14 11m-7-5 4 4 7-8"
        />
      )}
      {name === "globe" && (
        <path
          {...commonProps}
          d="M24 42a18 18 0 1 0 0-36 18 18 0 0 0 0 36zm0-36c5 5 8 11 8 18s-3 13-8 18c-5-5-8-11-8-18s3-13 8-18zM7 24h34M10 15h28M10 33h28"
        />
      )}
      {name === "home" && (
        <path
          {...commonProps}
          d="M8 22 24 9l16 13v20H13V24h22v18M19 42V30h10v12"
        />
      )}
      {name === "stack" && (
        <path
          {...commonProps}
          d="M24 7 7 16l17 9 17-9-17-9zm-13 17 13 7 13-7M11 32l13 7 13-7"
        />
      )}
      {name === "file" && (
        <path
          {...commonProps}
          d="M14 6h14l8 8v28H14V6zm14 0v10h8M20 24h12M20 31h12"
        />
      )}
      {name === "check" && (
        <path
          {...commonProps}
          d="M24 42a18 18 0 1 0 0-36 18 18 0 0 0 0 36zm-8-18 6 6 11-12"
        />
      )}
      {name === "dollar" && (
        <path
          {...commonProps}
          d="M24 6v36m8-27c-2-3-5-5-9-5-5 0-8 3-8 7 0 9 18 4 18 14 0 4-4 7-9 7-4 0-8-2-10-5"
        />
      )}
      {name === "trend" && (
        <path
          {...commonProps}
          d="M7 34h34M11 30l9-9 7 7 12-14m0 0v10m0-10H29"
        />
      )}
      {name === "message" && (
        <path
          {...commonProps}
          d="M8 10h32v22H18L9 39v-7H8V10zm8 8h16M16 25h10"
        />
      )}
      {name === "search" && (
        <path
          {...commonProps}
          d="M22 34a12 12 0 1 0 0-24 12 12 0 0 0 0 24zm9-3 9 9M17 22h10"
        />
      )}
      {name === "eye" && (
        <path
          {...commonProps}
          d="M5 24s7-12 19-12 19 12 19 12-7 12-19 12S5 24 5 24zm19 6a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
        />
      )}
      {name === "bag" && (
        <path
          {...commonProps}
          d="M12 16h24l-2 26H14L12 16zm8 0a4 4 0 0 1 8 0M18 24h12"
        />
      )}
    </svg>
  );
}
