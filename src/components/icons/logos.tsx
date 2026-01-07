export function CloudflareLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Icône géométrique */}
      <rect x="2" y="8" width="10" height="10" rx="2" fill="#F97316"/>
      <rect x="14" y="8" width="10" height="10" rx="2" fill="#FB923C"/>
      <rect x="2" y="20" width="10" height="10" rx="2" fill="#FDBA74"/>
      <rect x="14" y="20" width="10" height="10" rx="2" fill="#F97316"/>
      
      {/* Texte NBDBuilder */}
      <text x="32" y="26" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="bold" fill="currentColor">
        NBDBuilder
      </text>
    </svg>
  );
}
