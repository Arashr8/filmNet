import React from 'react';
import {Row , Col } from 'react-bootstrap';
import FilmCard from '../../components/films/film-card';
import { Divider, Pagination, Radio } from 'antd';

const FilmsListPage = () => {
    return ( 
        
    <div>
    <Row className="w-100 p-3 text-center">
    <Radio.Group defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">Action</Radio.Button>
      <Radio.Button value="b">Horror</Radio.Button>
      <Radio.Button value="c">Fantasy</Radio.Button>
      <Radio.Button value="d">Romance</Radio.Button>
    </Radio.Group>
    </Row>
    <Divider />
    <Row className="w-100 p-3 text-center">
    <Col xl={2} lg={2} md={3} sm={4} xs={6}>
        <FilmCard />
        </Col>
        </Row>
        <div className="text-center">
        <Pagination size="small" total={50} pagesize={5} />
        </div>

    </div> 
        
     );
}
 
export default FilmsListPage
