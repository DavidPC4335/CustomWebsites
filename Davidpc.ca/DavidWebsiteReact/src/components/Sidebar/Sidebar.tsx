import React, { useEffect, useState } from 'react';
import SidebarButton from './SidebarButton';

export interface SidebarLink {
  to: string;
  label: string;
  badgeText?: string;
}

interface SidebarProps {
  title?: string;
  links: SidebarLink[];
}

const Sidebar: React.FC<SidebarProps> = ({ title = 'Navigate', links }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(prev => !prev);

  return (
    <>
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`} aria-label="Sidebar Navigation">
        <h3 className="sidebar__title">{title}</h3>
        <ul className="sidebar__list">
          {links.map(link => (
            <SidebarButton key={link.to} to={link.to} label={link.label} badgeText={link.badgeText} onClick={close} />
          ))}
        </ul>
      </aside>

      {/* Mobile toggle button */}
      <button aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'} className="btn sidebar__toggle" onClick={toggle}>
        {isOpen ? 'Close Menu' : 'Menu'}
      </button>

      {/* Mobile overlay */}
      {isOpen && <div className="sidebar__overlay" onClick={close} />}
    </>
  );
};

export default Sidebar;
