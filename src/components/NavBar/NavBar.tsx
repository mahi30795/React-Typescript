import * as React from 'react';
import Logo from '@components/Logo/Logo';
import useStyles from './NavBar.style';
import NavItems from './NavItems/NavItems';
import NavIcons from './NavIcons/NavIcons';
export interface NavBarProps {
    
}
 
const NavBar: React.FC<NavBarProps> = () => {
    const classes = useStyles();
    return ( 
    <header className={classes.header}>
        <Logo/>
        <NavItems/>
        <NavIcons/>
    </header> 
    );
}
 
export default NavBar;