import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import clsx from 'clsx';

interface MobileCollapsibleProps {
  title: string;
  children: React.ReactNode | ((isOpen: boolean) => React.ReactNode);
  noBorder?: boolean;
  noHighlight?: boolean;
  titleClassName?: string;
  defaultOpen?: boolean;
}

const MobileCollapsible: React.FC<MobileCollapsibleProps> = ({
  title,
  children,
  noBorder = false,
  noHighlight = false,
  titleClassName = '',
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'w-full flex justify-between items-center text-left font-medium text-gray-800 py-3',
          'focus:outline-none',
          !noHighlight && 'hover:text-sky-600'
        )}
        style={{ boxShadow: 'none' }}
      >
        <span className={clsx(titleClassName)}>{title}</span>
        {isOpen ? <ChevronUp className="h-4 w-4 text-gray-500" /> : <ChevronDown className="h-4 w-4 text-gray-500" />}
      </button>

      {isOpen && (
        <div className={clsx(
          'mt-2',
          !noBorder && 'border border-sky-300 rounded-xl p-4'
        )}>
          {typeof children === 'function' ? children(isOpen) : children}
        </div>
      )}
    </div>
  );
};

export default MobileCollapsible;