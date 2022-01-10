import React from 'react';
import { Card } from 'antd';

const FilmContent = ({filmName}) => {
    return ( 
        <div>

            <Card
           cover={<img height={200} src={`/assets/slider/slide1.jpg`}  />}>
              <Card.Meta title={<h2> {filmName} </h2>} description="© 2022 NetFilm - The Streaming Guide Imprint · Privacy Policy · Talent" />
            </Card>

        </div>
     );
}
 
export default FilmContent;