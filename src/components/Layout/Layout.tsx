import Aux from '@Aux';
import BackDrop from '@common/BackDrop/BackDrop';
import NavBar from '@components/NavBar/NavBar';
import SideBar from '@components/SideBar/SideBar';
import { Container, Row } from 'react-bootstrap';
import * as React from 'react';
import { useState } from 'react';

export interface LayoutProps {

}

const Layout: React.FC<LayoutProps> = (props: any) => {
    const [sideBarOpen, switchSidebar] = useState(false);
    const [sidebar, setVisibility] = useState(false);
   
    const handleResize = () =>{
        if(window.innerWidth<=768){
            setVisibility(true);
        }
        else{
            setVisibility(false);
            switchSidebar(false);
        }
    }
    window.addEventListener('resize', handleResize)

    React.useEffect(()=>{
        if(window.innerWidth<=768){
            setVisibility(true);
        }
        else{
            setVisibility(false);
            switchSidebar(false);
        }

        return () =>{
            window.removeEventListener('resize', handleResize);
        }

    },[sidebar]);

    const toggleSidebar = () => {
        switchSidebar(!sideBarOpen);
    }

    return (
        <Aux>
            <Container fluid>
                <Row>
                    <NavBar sidebar={sidebar} toggler={toggleSidebar} />
                </Row>
            </Container>


            <SideBar open={sideBarOpen} clicked={toggleSidebar} />
            <BackDrop open={sidebar&&sideBarOpen} clicked={toggleSidebar} />
            <Container fluid>
                {props.children}
            </Container>
        </Aux>
    );
}


export default Layout;