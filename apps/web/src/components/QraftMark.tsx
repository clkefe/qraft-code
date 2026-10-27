import type { SVGProps } from "react";

export function QraftMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M6.6 1h7.8L20 6.6v7.8L14.4 20H6.6L1 14.4V6.6ZM9 6.8h3l2.2 2.2v3L12 14.2H9L6.8 12V9Z"
        fill="currentColor"
      />
      <path d="M15.44 11.76 23.64 19.96 19.96 23.64 11.76 15.44Z" fill="currentColor" />
    </svg>
  );
}
