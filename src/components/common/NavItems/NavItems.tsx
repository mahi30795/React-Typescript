import * as React from 'react';
import useStyles from './NavItems.style';

export interface NavItemsProps {
    open: boolean
}

const NavItems: React.FC<NavItemsProps> = ({open}: NavItemsProps) => {
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
    const display = {
        display: open ? 'block' : 'none'
    };
    return (
        <nav className={classes.nav} style={display}>
            <ul>
                {nav}
            </ul>
        </nav>
    );
}

export default NavItems;