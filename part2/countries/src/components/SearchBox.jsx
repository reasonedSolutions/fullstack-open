const SearchBox = ({handleSearchChange}) => 
<form>
    find countries<input placeholder={'enter a country name'} onChange={handleSearchChange}></input>
</form>

export default SearchBox