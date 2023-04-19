import React from 'react'
import './card.css'

export default function Card({winery,grapes,vintage, region, country, desc, rating, comments}) {
  return (
    <div className='card-container' >
        <h3 className='title'>{winery}</h3>
        <div className='card'>
        <p className='info'>{grapes}</p>
        <p className='info'>{vintage}</p>
        <p className='info'>{region}</p>
        <p className='info'>{country}</p>
        <p className='info'>{desc}</p>
        <p className='rating'> Rating: {rating}</p>
        </div>
        {comments && comments.length >= 0 && (
          <div>
            <h4>Reviews:</h4>
            {comments.map((comment)=>(
              <p key={comment._id}> <span>{comment.user}:</span> {comment.content}</p>
            ))}
          </div>
        )}
    </div>
  )
}
