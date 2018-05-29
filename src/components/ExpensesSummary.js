import React from 'react';
import getTotalExpenses from '../selectors/expenses-total';
import { connect } from 'react-redux';
import amFormat from './amFormat';
import selectExpenses from '../selectors/visibleExpenses';

const ExpensesSummary = (props) => {
  const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
  return (<h1>Viewing {props.expenses.length} {expenseWord} totalling &#8377;{amFormat(
      getTotalExpenses(props.expenses)
    )}</h1>);
};

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);
