const FONT: Record<string, number[][]> = {
  R: [
    [1,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,0],
    [1,0,1,0,0],
    [1,0,0,1,0],
    [1,0,0,0,1],
  ],
  O: [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ],
  B: [
    [1,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,0],
  ],
  F: [
    [1,1,1,1,1],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
  ],
  X: [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,0,1,0],
    [0,0,1,0,0],
    [0,1,0,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
  ],
  " ": [
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
  ],
};

function Block() {
  return (
    <div
      className="rounded-[2px]"
      style={{
        background: "linear-gradient(135deg, #9ae4b5 0%, #7ec699 50%, #5ea87a 100%)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.3)",
        border: "1px solid #4a9468",
      }}
    />
  );
}

export default function PixelText({ text }: { text: string }) {
  const letters = text.toUpperCase().split("");

  return (
    <div className="flex gap-[4px] sm:gap-[6px]">
      {letters.map((char, li) => {
        const grid = FONT[char];
        if (!grid) return null;
        const cols = grid[0].length;
        const rows = grid.length;

        return (
          <div
            key={li}
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
              width: `${cols * 8}px`,
              height: `${rows * 8}px`,
              gap: "1.5px",
            }}
          >
            {grid.flat().map((on, i) =>
              on ? <Block key={i} /> : <div key={i} />
            )}
          </div>
        );
      })}
    </div>
  );
}
