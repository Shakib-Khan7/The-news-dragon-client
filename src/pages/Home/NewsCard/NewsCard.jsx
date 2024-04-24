/* eslint-disable react/prop-types */
import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {_id,image_url,title,details,author,total_view,rating} = news
    return (
        <div>
            <Card className="mb-4">
      <Card.Header className='d-flex align-items-center'>

      <Image style={{height:'40px'}} src={author?.img} roundedCircle />
      
        <div className='ps-2 flex-grow-1'>
            <p className='mb-0'>{author?.name}</p>
            <p><small> {moment(author?.published_date).format('yyyy-MM-D')}  {}</small></p>
        </div>
        <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
        </div>


      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? <>{details}</> : 
          <>{details.slice(0,250)}... <Link to={`/news/${_id}`}>Read More</Link>  </>
          
          }

          {/**for showing full details in the same page */}
{/* {showFullDetails ? details : details.slice(0, 250)}...
                        {details.length > 250 && (
                            <Button variant="link" onClick={()=>setShowFullDetails(!showFullDetails)} >
                                {showFullDetails ? 'Show less' : 'Read more'}
                            </Button>
                        )} */}




        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">

        <div className='flex-grow-1'>
            <Rating  className='text-warning'
            placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar></FaStar>}
            fullSymbol={<FaStar></FaStar>}
            
            
            >
                
            </Rating>
            <span className='ms-1'>{rating.number}</span>
        </div>
        <div>
            <FaEye></FaEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
        </div>
    );
};

export default NewsCard;