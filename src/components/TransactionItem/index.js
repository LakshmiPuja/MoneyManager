import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="list-item">
      <p className="item"> {title} </p>
      <p className="item"> Rs {amount} </p>
      <p className="item"> {type} </p>
      <button
        type="button"
        onClick={onDelete}
        data-testId="delete"
        className="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-img"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
