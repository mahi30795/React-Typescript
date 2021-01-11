import Logo from '@components/Logo/Logo';
import NavIcons from '@components/NavBar/NavIcons/NavIcons';
import NavItems from '@components/NavBar/NavItems/NavItems';
import * as React from 'react';
import useStyles from './SideBar.style';

export interface SideBarProps {
    
}
 
const SideBar: React.FC<SideBarProps> = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.sidebar}>
            <div className={classes.logoandclose}>
                <Logo/>
                <div>X</div>
            </div>
            <NavItems/>
            <NavIcons/>
        </div>
     );
}
 
export default SideBar;