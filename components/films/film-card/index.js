import React from 'react'
import { Card } from 'react-bootstrap';
import styles from './film-card.module.css'
import Link from 'next/link'

const FilmCard = () => {
    return ( 
        <div>
            <Link href={"/films/[slug]"} as={"/films/film1"}>
            <Card>
                <Card.Img src={"/assets/films/film1.jpg"} />
            </Card>

            </Link>
        </div>
     );
}
 
export default FilmCard;