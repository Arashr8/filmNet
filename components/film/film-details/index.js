import { Avatar, Divider, Tag } from 'antd';
import React from 'react';
import { Card, Row , Col } from 'react-bootstrap';
import styles from './film-details.module.css'


const FilmDetails = () => {
    return ( 
        <div className="mt-3">
            <Card>
                <Divider >All Cast & Crew</Divider>
                <Row className="mb-4">
                    <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                <Tag color="gold" className={styles.tag}>
                    <Avatar size={32} src={"https://joeschmoe.io/api/v1/random"} />
                    {"Writer : Rachel Morrison"}
                </Tag>
                   </Col>
                </Row>
            </Card>
        </div>
     );
}
 
export default FilmDetails;