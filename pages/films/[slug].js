
import React from 'react' ; 
import FilmContent from '../../components/film/film-content';
import FilmDetails from '../../components/film/film-details';
import FilmComment from '../../components/film/film-comment';

const FilmPage = ({filmName}) => {

   
    return ( 
       
        <div className="p-5">
          <FilmContent filmName={filmName}/>
          <FilmDetails />
          <FilmComment />
        </div>
     );
}

export const getServerSideProps = (context) =>{
    const filmName = context.params.slug

    return {
        props:{
            filmName
        }
    }
}
 
export default FilmPage;