import * as React from 'react';
import Logo from '@components/Logo/Logo';
import useStyles from './NavBar.style';
import NavItems from '@common/NavItems/NavItems';
import NavIcons from '@common/NavIcons/NavIcons';
import Aux from '@Aux';
import SideBarToggler from '@common/SideBarToggler/SideBarToggler';
export interface NavBarProps {
    sidebar: boolean,
    toggler: () => void
}
 
const NavBar: React.FC<NavBarProps> = ({sidebar, toggler}: NavBarProps) => {
    const classes = useStyles();
    return ( 
    <header className={classes.header}>
        <Logo/>
        {!sidebar?
            <Aux>
                <NavItems open={!sidebar}/>
                <NavIcons open={!sidebar}/>
            </Aux>
        : <SideBarToggler clicked={toggler} />
        }
        
    </header> 
    );
}
 
export default NavBar;