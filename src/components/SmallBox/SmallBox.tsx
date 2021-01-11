import * as React from 'react';
import useStyles from './SmallBox.style';

export interface SmallBoxProps {
    title: string,
    color: string,
    count: string,
    icon: string
}

const SmallBox: React.FC<SmallBoxProps> = ({ title, count, color, icon }: SmallBoxProps) => {
    const classes = useStyles();
    const styleTop = {
        borderTopColor: color
    }
    return (
        <div className={classes.box} style={styleTop}>
            <div>
                <div className={classes.innerBox}>
                    <ul>
                        <li className={classes.count}>
                            <strong>{count}</strong>
                        </li>
                        <li className={classes.title}>
                            {title}
                        </li>
                    </ul>
                </div>
                <div className={classes.iconBox}>
                    {icon !== '' ? <img src={icon} alt="icon" /> : ''}
                </div>
            </div>
        </div>

    );
}

export default SmallBox;