import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  function onDeleteHistory() {
    deleteHistory(id)
  }
  return (
    <li className="history-item">
      <div className="content-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="app-logo" />
        <p className="title">{title}</p>
        <p className="link">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="delete-button"
        data-testid="delete"
        onClick={onDeleteHistory}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
