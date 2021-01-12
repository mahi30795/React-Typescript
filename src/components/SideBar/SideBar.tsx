import Logo from '@components/Logo/Logo';
import NavIcons from '@common/NavIcons/NavIcons';
import NavItems from '@common/NavItems/NavItems';
import * as React from 'react';
import useStyles from './SideBar.style';

export interface SideBarProps {
    open: boolean,
    clicked: () => void
}
 
const SideBar: React.FC<SideBarProps> = ({open, clicked}: SideBarProps) => {
    const classes = useStyles();
    let attachedClasses = [classes.sidebar, classes.close];
    if(open){
        attachedClasses = [classes.sidebar, classes.open];
    }
    return ( 
        <div className={attachedClasses.join(' ')}>
            <div className={classes.logoandclose}>
                <Logo/>
                <div onClick={clicked}>X</div>
            </div>
            <NavItems open={open}/>
            <NavIcons open={open}/>
        </div>
     );
}
 
export default SideBar;