import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    clearFilters,
    selectCategory,
    selectRating,
  } = props
  const onClickClear = () => {
    clearFilters()
  }
  const onClickCategory = event => {
    selectCategory(event.currentTarget.getAttribute('value'))
  }

  const onChangeRating = event => {
    selectRating(event.currentTarget.getAttribute('value'))
  }

  /* const onChangeInput = event => {
    const {onChangeSearchInput} = props
    onChangeSearchInput(event.target.value)
  } */

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      const {applySearch} = props
      const inputValue = event.target.value.trim()
      if (inputValue !== '') {
        applySearch(inputValue)
      }
    }
  }

  return (
    <div className="filters-group-container">
      <input type="search" placeholder="Search" onKeyPress={handleKeyPress} />
      <h1>Category</h1>
      <ul className="list">
        {categoryOptions.map(each => (
          <li
            onClick={onClickCategory}
            value={each.categoryId}
            key={each.categoryId}
          >
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
      <h1>Rating</h1>
      <ul className="list">
        {ratingsList.map(each => (
          <li
            onClick={onChangeRating}
            value={each.ratingId}
            key={each.ratingId}
          >
            <img
              src={each.imageUrl}
              alt={`rating ${each.ratingId}`}
              className="rating"
            />
            <span>& up</span>
          </li>
        ))}
      </ul>

      <button onClick={onClickClear} type="button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
