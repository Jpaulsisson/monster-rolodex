import './search-box.styles.css';


const SearchBox = ({ onSearchChange, className, placeholder }) => {
  return (
    <div>
      <input 
      className={`search-box ${className}`}
      type='search' 
      placeholder={placeholder}
      onChange={onSearchChange}/>
    </div>
  )
}

export default SearchBox
