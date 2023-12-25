import { Outlet } from 'react-router-dom';

import HeaderSection from './HeaderSection';
import BottomNavigationBar from '../app-bar/BottomNavigationBar';

export default function HeaderFooter() {
    return (
        <>
            <HeaderSection />
            <Outlet />
            <BottomNavigationBar />
        </>
    );
}
