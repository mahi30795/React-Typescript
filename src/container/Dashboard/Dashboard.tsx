import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useStyles from './Dashboard.style';
import SmallBox from '@components/SmallBox/SmallBox';
import cellphone from '@assets/images/cell-phone.png'
import SideBox from '@components/SideBox/SideBox';
import Layout from '@components/Layout/Layout';
export interface DashboardProps {

}

const Dashboard: React.FC<DashboardProps> = () => {
    const classes = useStyles();
    const countfill = [
        {
            id: 1,
            color: 'purple',
            count: '100',
            title: 'Devices',
            icon: cellphone
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
    const counts = countfill.map(itm => <SmallBox key={itm.id} title={itm.title} count={itm.count} color={itm.color} icon={itm.icon} />)

    const sidefill = [
        {
            id:1,
            title: 'Users',
            count: '100'
        }
    ]

    const sideboxes = sidefill.map(itm=> <Row key={itm.id}><SideBox title={itm.title} count={itm.count} /></Row>)

    return (
        <Layout>
            <div className={classes.wrap}>
                    <Row>
                        <Col lg={12}>
                            <p><strong>Dashboard</strong></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className={classes.countWrap}>
                                {counts}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9} lg={8}>
                            <div className={classes.dataWrap}>

                            </div>
                        </Col>
                        <Col md={3} lg={4}>
                            <div className={classes.sideWrap}>
                                <Container>
                                    <Row>
                                        <strong>Battery Status</strong>
                                    </Row>
                                    <br/>
                                   {sideboxes}
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </div>
        </Layout>
    );
}

export default Dashboard;