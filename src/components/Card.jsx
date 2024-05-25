import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma3 grow shadow-5 white hover-black pv2 db bg-animate hover-bg-hot-pink o-60'>
      <img src={`https://robohash.org/${id}?100x100`} alt="robot" />
      <div className="tc">
        <h2 >{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
