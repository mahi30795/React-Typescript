import * as React from 'react';
import useStyles from './NavItems.style';

export interface NavItemsProps {

}

const NavItems: React.FC<NavItemsProps> = () => {
    const classes = useStyles()
    const navItems = [
        {
            title: 'Dashboard',
            link: '/'
        },
        {
            title: 'Users',
            link: '/'
        },
        {
            title: 'Organization',
            link: '/'
        },
        {
            title: 'Daily Assessment',
            link: '/'
        },
        {
            title: 'Testing',
            link: '/'
        }
    ];
    const nav = navItems.map(itm => <li key={itm.title}>{itm.title}</li>)
    return (
        <nav className={classes.nav}>
            <ul>
                {nav}
            </ul>
        </nav>
    );
}

export default NavItems;