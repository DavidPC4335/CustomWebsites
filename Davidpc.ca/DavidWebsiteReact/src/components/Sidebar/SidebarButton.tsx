import React from 'react';
import { NavLink } from 'react-router-dom';

export interface SidebarButtonProps {
  to: string;
  label: string;
  badgeText?: string;
  onClick?: () => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ to, label, badgeText, onClick }) => {
  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `sidebar__button ${isActive ? 'sidebar__button--active' : ''}`
        }
      >
        <span>{label}</span>
        {badgeText ? <span className="sidebar__badge">{badgeText}</span> : null}
      </NavLink>
    </li>
  );
};

export default SidebarButton;
