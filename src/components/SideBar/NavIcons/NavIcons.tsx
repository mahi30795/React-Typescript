import * as React from 'react';
import useStyles from './NavIcons.style';
import notification from '@assets/images/notification.png';
import user from '@assets/images/user.png';
import phonebook from '@assets/images/phone-book.png';

export interface NavIconsProps {
    
}

const NavIcons: React.FC<NavIconsProps> = ()=> {
    const icons = [
        {
            id:1,
            icon: notification,
            alt: 'notification',
            link: '/'
        },
        {
            id:2,
            icon: user,
            alt: 'user',
            link: '/'
        },
        {
            id:3,
            icon: phonebook,
            alt: 'phonebook',
            link: '/'
        }
    ];
    const classes = useStyles();
    const iconItems = icons.map(itm => <li key={itm.id} className={classes.icon}><img src={itm.icon} alt={itm.alt} /></li>);
    
    return (
        <nav className={classes.iconNav} >
            <ul>
                {iconItems}
            </ul>
        </nav>
    );
}

export default NavIcons;