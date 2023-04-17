import './card.styles.css'


const Card = ({ monster }) => {

  const { name, id, email } = monster;

  return (
    <div key={id}>
      <div className={`card-container card-container${id}`} >
        <img 
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2 className='monster-names'>{name}</h2>
        <p className='monster-emails'>{email}</p>
      </div>
    </div>
  )
}

export default Card
