import React, { Component } from 'react'
import './card.styles.css'

export class Card extends Component {
  render() {

    const {id, name, email} = this.props.monster;

    return (
      <div>
          <div className={`card-container card-container${id}`} key={id}>
            <img 
            alt={`monster ${name}`} 
            src={`https://robohash.org/${id * 500}?set=set2&size=180x180`}
            />
            <h2 className='monster-names'>{name}</h2>
            <p className='monster-emails'>{email}</p>
          </div>
      </div>
    )
  }
}

export default Card
