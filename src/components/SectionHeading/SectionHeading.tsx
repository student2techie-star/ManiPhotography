import './SectionHeading.css';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  dark = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align} ${dark ? 'section-heading--dark' : 'section-heading--light'} ${className}`}>
      {label && <span className="label section-heading__label">{label}</span>}
      <span className={`accent-line ${align === 'center' ? 'accent-line--center' : ''}`} aria-hidden="true" />
      <h2 className="section-heading__title display-sm">{title}</h2>
      {subtitle && <p className="section-heading__subtitle body-lg">{subtitle}</p>}
    </div>
  );
}
