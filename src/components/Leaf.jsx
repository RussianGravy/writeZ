export default function Leaf({ size = 20 }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.3)}
      viewBox="0 0 20 26"
      fill="none"
      aria-hidden="true"
    >
      <line x1="10" y1="25" x2="10" y2="2" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M10 19C10 19 3 16 3 9C3 9 8 8 10 14" stroke="currentColor" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19C10 19 17 16 17 9C17 9 12 8 10 14" stroke="currentColor" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 12C10 12 5 9 5 3C5 3 10 3 10 8" stroke="currentColor" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 12C10 12 15 9 15 3C15 3 10 3 10 8" stroke="currentColor" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
