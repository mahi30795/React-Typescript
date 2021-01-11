import * as React from 'react';
import logo from '@assets/images/covidPreAuth.png';
import useStyles from '@components/Logo/Logo.style.tsx';
export interface LogoProps {
    
}
 
const Logo: React.FC<LogoProps> = () => {
    const classes = useStyles();
    return ( <img className={classes.logo} src={logo} alt="CovidPreAuth" /> );
}
 
export default Logo;