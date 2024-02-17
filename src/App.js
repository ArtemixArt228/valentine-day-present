import React, {useState} from 'react';
import './App.css';

function ValentineCard() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

  return (
      <div className='wrapper'>
          <div className="container"
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
          >
              <div className={`valentines ${isHovered ? 'hovered' : ''}`}>
                  <div className="envelope"></div>
                  <div className="front"></div>
                  <div className={`card ${isHovered ? 'up' : ''}`}>
                      <div className="text">Happy <br />Valentine's <br />Day!</div>
                      <div className="heart"></div> {/* Note: This div seems to be incomplete in the original HTML */}
                  </div>
                  <div className="hearts">
                      <div className="one"></div>
                      <div className="two"></div>
                      <div className="three"></div>
                      <div className="four"></div>
                      <div className="five"></div>
                  </div>
              </div>
              <div className="shadow"></div>
          </div>

          <div className='small-heart-1'>
              <div className='small-heart'></div>
          </div>
          <div className='small-heart-2'>
              <div className='small-heart'></div>
          </div>
          <div className='small-heart-3'>
              <div className='small-heart'></div>
          </div>
          <div className='small-heart-4'>
              <div className='small-heart'></div>
          </div>
      </div>
  );
}

export default ValentineCard;
