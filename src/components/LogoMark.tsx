export default function LogoMark({ className, rotating = false }: { className?: string, rotating?: boolean }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M14.5 2H9.5L8 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4l-1.5-3z"/>
      <g className={`logo-lens ${rotating ? 'logo-lens--spin' : ''}`} style={{ transformOrigin: '12px 13px', transition: 'transform 800ms cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
        <circle cx="12" cy="13" r="5.5"/>
        <circle cx="12" cy="13" r="2.5" fill="currentColor" />
        <line x1="12" y1="7.5" x2="12" y2="10"/>
        <line x1="12" y1="18.5" x2="12" y2="16"/>
        <line x1="17.5" y1="13" x2="15" y2="13"/>
        <line x1="6.5" y1="13" x2="9" y2="13"/>
        <line x1="8.1" y1="9.1" x2="9.9" y2="10.9"/>
        <line x1="15.9" y1="16.9" x2="14.1" y2="15.1"/>
        <line x1="15.9" y1="9.1" x2="14.1" y2="10.9"/>
        <line x1="8.1" y1="16.9" x2="9.9" y2="15.1"/>
      </g>
    </svg>
  );
}
