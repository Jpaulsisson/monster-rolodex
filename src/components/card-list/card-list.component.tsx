import React, { Component } from 'react'
import Card from '../card-container/card-container.component';
import './card-list.styles.css'


export class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          const {name, email, id} = monster;
          return (
          <Card key={id} monster={monster} />
          )
      })}
      </div>
    )
  }
}

export default CardList;
