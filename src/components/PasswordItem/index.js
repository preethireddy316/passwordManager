/* eslint-disable react/no-unknown-property */
const PasswordItem = props => {
  const {itemDetails, isChecked, onDeleteItem} = props
  const {password, website, userName, id} = itemDetails
  const initial = website[0]
  const deleteItem = () => {
    onDeleteItem(id)
  }
  return (
    <li>
      <p>{initial}</p>
      <p>{website}</p>
      <p>{userName}</p>
      {isChecked ? (
        <p>{password}</p>
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          alt="stars"
        />
      )}
      <button type="button" testid="delete" onClick={deleteItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
