import * as React from 'react';
import useStyles from './NavIcons.style';
import notification from '@assets/images/notification.png';
import user from '@assets/images/user.png';
import phonebook from '@assets/images/phone-book.png';

export interface NavIconsProps {

}

const NavIcons: React.FC<NavIconsProps> = () => {
    const icons = [
        {
            id:1,
            icon: notification,
            alt: '',
            link: '/'
        },
        {
            id:2,
            icon: user,
            alt: '',
            link: '/'
        },
        {
            id:3,
            icon: phonebook,
            alt: '',
            link: '/'
        }
    ];
    const classes = useStyles();
    console.log(icons);
    const iconItems = icons.map(itm => <li key={itm.id}><img className={classes.icon} src={itm.icon} alt={itm.alt} /></li>);
    
    return (
        <div className={classes.iconNav}>
            <ul>
                {iconItems}
            </ul>
        </div>
    );
}

export default NavIcons;