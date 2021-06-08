import React from 'react';
const IMG_API = `https://image.tmdb.org/t/p/w500`;

const setRcolor=(rating)=>{
if (rating>8){
    return 'green'
}else if(rating> 5){
    return 'orage'
}else{
    return 'red'
}
}

const Movie=(props)=>{

    return (
<div className='movie'>
    <img className='movie-img' src={IMG_API+props.img} alt={props.title}/>
    <div className='movie-info'>
        <h3 className='movie-title'>{props.title}</h3>
        <span className={`rating-box ${setRcolor(props.ratings)}`}>{props.ratings}</span>
    </div>
    <div className='movie-over'>
    <h2>Overview:</h2>
    <p>{props.overview}</p>
    </div>
</div>
    );

}

export default Movie