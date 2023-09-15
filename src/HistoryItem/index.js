import './index.css'

const Item = props => {
  const {item, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item

  return (
    <li className="history-item">
      <div className="data">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={() => deleteItem(id)}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default Item
