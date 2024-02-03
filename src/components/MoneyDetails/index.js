import './index.css'

const MoneyDetails = props => {
  const {income, balance, expenses} = props
  return (
    <div className="details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          className="image"
          alt="balance"
        />

        <p className="detail-text" data-testId="balanceAmount">
          Your Balance <br />
          <span className="balance">Rs {balance}</span>
        </p>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image"
          alt="income"
        />

        <p className="detail-text" data-testId="incomeAmount">
          Your Income <br /> <span className="balance">Rs {income}</span>
        </p>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image"
          alt="expenses"
        />

        <p className="detail-text" data-testId="expensesAmount">
          Your Expenses <br />
          <span className="balance">Rs {expenses}</span>
        </p>
      </div>
    </div>
  )
}
export default MoneyDetails
