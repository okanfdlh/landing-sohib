interface LogoPlaceholderProps {
  type: 'government' | 'company' | 'university';
  className?: string;
}

const LogoPlaceholder = ({ type, className = "" }: LogoPlaceholderProps) => {
  const getIcon = () => {
    switch (type) {
      case 'government':
        return (
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-full ${className}`}
          >
            <path
              d="M50 10L20 30V70L50 90L80 70V30L50 10Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M40 45L45 50L60 35" stroke="currentColor" strokeWidth="2" />
          </svg>
        );
      case 'company':
        return (
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-full ${className}`}
          >
            <rect x="20" y="20" width="60" height="60" rx="8" stroke="currentColor" strokeWidth="2" />
            <circle cx="35" cy="35" r="5" fill="currentColor" />
            <circle cx="65" cy="35" r="5" fill="currentColor" />
            <circle cx="35" cy="65" r="5" fill="currentColor" />
            <circle cx="65" cy="65" r="5" fill="currentColor" />
            <path d="M40 50H60" stroke="currentColor" strokeWidth="2" />
          </svg>
        );
      case 'university':
        return (
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-full ${className}`}
          >
            <path d="M50 15L15 35V55L50 75L85 55V35L50 15Z" stroke="currentColor" strokeWidth="2" />
            <path d="M50 25V65" stroke="currentColor" strokeWidth="2" />
            <path d="M30 40V60" stroke="currentColor" strokeWidth="1.5" />
            <path d="M70 40V60" stroke="currentColor" strokeWidth="1.5" />
            <path d="M40 35V55" stroke="currentColor" strokeWidth="1.5" />
            <path d="M60 35V55" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="30" r="3" fill="currentColor" />
          </svg>
        );
    }
  };

  return (
    <div className={`text-muted-foreground/60 ${className}`}>
      {getIcon()}
    </div>
  );
};

export default LogoPlaceholder;