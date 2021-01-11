import * as React from 'react';
import Logo from '@components/Logo/Logo';
import useStyles from './NavBar.style';
import NavItems from './NavItems/NavItems';
import NavIcons from './NavIcons/NavIcons';
import SideBar from '@components/SideBar/SideBar';
import SideBarToggler from '@components/NavBar/SideBarToggler/SideBarToggler';
import { Backdrop } from '@material-ui/core';
import BackDrop from '@components/BackDrop/BackDrop';
export interface NavBarProps {
    
}
 
const NavBar: React.FC<NavBarProps> = () => {
    const [sideBarOpen, switchSidebar] = React.useState(false);
    const classes = useStyles();
    const toggleSidebar = () =>{
        switchSidebar(!sideBarOpen);
    }
    return ( 
    <header className={classes.header}>
        <Logo/>
        <NavItems/>
        <NavIcons/>
        <SideBarToggler clicked={toggleSidebar}/>
        <SideBar open={sideBarOpen} clicked={toggleSidebar}/>
        <BackDrop open={sideBarOpen} clicked={toggleSidebar}/>
    </header> 
    );
}
 
export default NavBar;