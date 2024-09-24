import './index.css'

const TabItem = props => {
  const {tabDetails, activeTabItem, isActive} = props
  const {displayText, tabId} = tabDetails
  const activeClassName = isActive ? 'active' : 'no-active'

  const clickTabItem = () => {
    activeTabItem(tabId)
  }

  return (
    <li className="tab-list-item">
      <button type="button" className={activeClassName} onClick={clickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
