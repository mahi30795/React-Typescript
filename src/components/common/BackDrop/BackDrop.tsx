import * as React from 'react';
import useStyles from './BackDrop.style';

export interface BackDropProps {
    open: boolean,
    clicked: () => void
}
 
const BackDrop: React.FC<BackDropProps> = ({open, clicked}: BackDropProps) => {
    const classes = useStyles();
    const display = {
        display: open? 'block' : 'none'
    }
    return ( 
        <div className={classes.backdrop} style={display} onClick={clicked}></div>
     );
}
 
export default BackDrop;