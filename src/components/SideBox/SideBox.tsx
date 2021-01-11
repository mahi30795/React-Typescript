import * as React from 'react';
import useStyles from './SideBox.style';

export interface SideBoxProps {
    title: string,
    count: string,
}

const SideBox: React.FC<SideBoxProps> = ({ title, count }: SideBoxProps) => {
    const classes = useStyles();
    return (
        <div className={classes.box}>
            <div className={classes.innerBox}>
                <p className={classes.title}><strong>{title}</strong></p>
                <p className={classes.count}>{count}</p>
            </div>
        </div>

    );
}

export default SideBox;