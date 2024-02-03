import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  addTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  addAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  addOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  // adding Transactions
  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId, transactionList} = this.state
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )

    const {displayText} = typeOption

    const newTransaction = {
      id: uuid(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState({
      transactionList: [...transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    })
  }

  // deleting Transactions and update the list
  deleteTransaction = id => {
    const {transactionList} = this.state
    const updatedList = transactionList.filter(each => each.id !== id)
    this.setState({transactionList: updatedList})
  }

  // calculate total by passing type
  getTotal = type => {
    const {transactionList} = this.state
    const total = transactionList
      .filter(each => each.type === type)
      .reduce((totalAmount, each) => totalAmount + each.amount, 0)
    return total
  }

  // here we are calculating totalIncome and totalExpense using getTotal method by passing type
  getTotalIncome = () => this.getTotal(transactionTypeOptions[0].displayText)

  getTotalExpenses = () => this.getTotal(transactionTypeOptions[1].displayText)

  // calculate totalBalance
  getTotalBalance = () => this.getTotalIncome() - this.getTotalExpenses()

  render() {
    const {optionId, transactionList, titleInput, amountInput} = this.state
    return (
      <div className="bg-container">
        <div className="name-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="sub-heading">
            Welcome back to your
            <span className="money-manager-text">Money Manager</span>
          </p>
        </div>

        <MoneyDetails
          income={this.getTotalIncome()}
          expenses={this.getTotalExpenses()}
          balance={this.getTotalBalance()}
        />
        <div className="details">
          <form className="form" onSubmit={this.addTransaction}>
            <h1 className="transaction-header">Add Transaction</h1>
            <label htmlFor="title" className="label">
              TITLE
            </label>
            <input
              id="title"
              className="input"
              placeholder="TITLE"
              value={titleInput}
              onChange={this.addTitleInput}
            />
            <label htmlFor="amount" className="label">
              AMOUNT
            </label>
            <input
              id="amount"
              className="input"
              placeholder="AMOUNT"
              value={amountInput}
              onChange={this.addAmountInput}
            />
            <label htmlFor="select" className="label">
              TYPE
            </label>
            <select
              id="select"
              value={optionId}
              onChange={this.addOptionId}
              className="input"
            >
              {transactionTypeOptions.map(each => (
                <option value={each.optionId} key={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>

          <ul className="list-container">
            <h1 className="transaction-header">History</h1>
            <li className="title-bar">
              <p className="header">Title</p>
              <p className="header">Amount</p>
              <p className="header">Type</p>
            </li>
            {transactionList.map(each => (
              <TransactionItem
                key={each.id}
                transactionDetails={each}
                deleteTransaction={this.deleteTransaction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default MoneyManager
