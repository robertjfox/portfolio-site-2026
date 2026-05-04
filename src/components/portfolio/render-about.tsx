import { Fragment } from "react";

export function renderAbout(text: string, color: string) {
  const parts = text.split(/(\{[^}]+\})/g);
  return parts.map((part, i) => {
    if (part.startsWith("{") && part.endsWith("}")) {
      return (
        <span key={i} style={{ color, fontWeight: "bold" }}>
          {part.slice(1, -1)}
        </span>
      );
    }
    return (
      <Fragment key={i}>
        {part.split(/(foxs\.com)/gi).map((textPart, j) =>
          textPart.toLowerCase() === "foxs.com" ? (
            <a
              key={`${textPart}-${j}`}
              href="https://www.foxs.com"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-current/40 underline-offset-4 transition-colors hover:text-text-bold"
              style={{ color }}
            >
              {textPart}
            </a>
          ) : (
            <Fragment key={`${textPart}-${j}`}>{textPart}</Fragment>
          ),
        )}
      </Fragment>
    );
  });
}

export function renderLeadLabel(text: string, color: string) {
  const match = text.match(/^([^:]+:)(\s*)([\s\S]*)$/);
  if (!match) return renderAbout(text, color);

  return (
    <>
      <span style={{ color, fontWeight: "bold" }}>{match[1]}</span>
      {match[2]}
      {renderAbout(match[3], color)}
    </>
  );
}
