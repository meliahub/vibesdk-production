import type React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  color1?: string;
}

export function CloudflareLogo({ color1, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      width="32"
      height="32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="40" height="40" rx="8" fill={color1 || "#F97316"}/>
      <rect x="6" y="6" width="12" height="12" rx="2" fill="white"/>
      <rect x="22" y="6" width="12" height="12" rx="2" fill="#FED7AA"/>
      <rect x="6" y="22" width="12" height="12" rx="2" fill="#FED7AA"/>
      <rect x="22" y="22" width="12" height="12" rx="2" fill="white"/>
    </svg>
  );
}

export function AIAvatar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="32" height="32" rx="6" fill="#F97316"/>
      <rect x="6" y="6" width="8" height="8" rx="2" fill="white"/>
      <rect x="18" y="6" width="8" height="8" rx="2" fill="#FED7AA"/>
      <rect x="6" y="18" width="8" height="8" rx="2" fill="#FED7AA"/>
      <rect x="18" y="18" width="8" height="8" rx="2" fill="white"/>
    </svg>
  );
}
