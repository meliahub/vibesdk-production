import type React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  color1?: string;
}

export function CloudflareLogo({ color1, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="2" y="8" width="10" height="10" rx="2" fill={color1 || "#F97316"}/>
      <rect x="14" y="8" width="10" height="10" rx="2" fill="#FB923C"/>
      <rect x="2" y="20" width="10" height="10" rx="2" fill="#FDBA74"/>
      <rect x="14" y="20" width="10" height="10" rx="2" fill={color1 || "#F97316"}/>
    </svg>
  );
}

export function AIAvatar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
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
