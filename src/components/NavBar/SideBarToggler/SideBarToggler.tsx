import * as React from 'react';
import useStyles from './SideBarToggler.style';

export interface SideBarTogglerProps {
    clicked: () => void,
}
 
const SideBarToggler: React.FC<SideBarTogglerProps> = ({ clicked }: SideBarTogglerProps) => {
    const classes = useStyles();
    return ( 
        <div className={classes.ham} onClick={clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
     );
}
 
export default SideBarToggler;