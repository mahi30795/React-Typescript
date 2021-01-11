import * as React from 'react';
import Aux from '@Aux';
import NavBar from '@components/NavBar/NavBar';
import { Col, Container, Row } from 'react-bootstrap';
import useStyles from './Dashboard.style';
import SmallBox from '@components/SmallBox/SmallBox';
import user from '@assets/images/user.png'
export interface DashboardProps {

}

const Dashboard: React.FC<DashboardProps> = () => {
    const classes = useStyles();
    const boxfill = [
        {
            id: 1,
            color: 'purple',
            count: '100',
            title: 'Devices',
            icon: user
        },
        {
            id: 2,
            color: 'yellow',
            count: '',
            title: '',
            icon: ''
        },
        {
            id: 3,
            color: 'magenta',
            count: '',
            title: '',
            icon: ''
        },
        {
            id: 4,
            color: 'lightblue',
            count: '',
            title: '',
            icon: ''
        },
        {
            id: 5,
            color: 'orange',
            count: '',
            title: '',
            icon: ''
        }
    ]
    const boxes = boxfill.map(itm => <SmallBox key={itm.id} title={itm.title} count={itm.count} color={itm.color} icon={itm.icon} />)
    return (
        <Aux>

            <Container fluid>
                <Row>
                    <NavBar />
                </Row>

                <div className={classes.wrap}>
                    <Row>
                        <Col lg={12}>
                            <p><strong>Dashboard</strong></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className={classes.countWrap}>
                                {boxes}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8}>
                            <div className={classes.dataWrap}>

                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={classes.sideWrap}>

                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Aux>
    );
}

export default Dashboard;