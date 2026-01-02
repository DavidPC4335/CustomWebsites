import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Summer25Report from './Summer25Report';
import Summer24Report from './Summer2024Report';
import { useLocation, Navigate } from 'react-router-dom';

const links = [
  { to: '/work-term-reports/summer-2024', label: 'BV/Joynd S24', component: <Summer24Report /> },
  { to: '/work-term-reports/summer-2025', label: 'Intellicampus S25', component: <Summer25Report /> },
//   { to: '/work-term-reports/winter-2025', label: 'Winter 2025', component: <Summer25Report /> }
];
const WorkTermReportsIndex: React.FC = () => {
const path = useLocation();
  return (
    <section className="layout--sidebar">
      <div className="layout--sidebar__grid">
        <Sidebar title="Work Term Reports" links={links} />
        <div className="layout--sidebar__content">
          <div className="project" >
            {links.find(link => link.to === path.pathname)?.component || <Navigate to={links[links.length - 1].to} />}
          </div>
        </div>
      </div>
    </section>
  );
};


export const Gap = ({height}: {height?: string})=>{
  return <div style={{ height: height || '2rem' }} />
}
export default WorkTermReportsIndex;
