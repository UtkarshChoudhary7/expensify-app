import React from 'react';
import { Link } from 'react-router-dom';
import getTotalExpenses from '../selectors/expenses-total';
import { connect } from 'react-redux';
import amFormat from './amFormat';
import selectExpenses from '../selectors/visibleExpenses';

const ExpensesSummary = (props) => {
  const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{props.expenses.length}</span> {expenseWord} totalling <span>&#8377;{amFormat(getTotalExpenses(props.expenses))}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="btn" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);
