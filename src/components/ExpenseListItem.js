import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveExpense } from '../actions/expenses';
import moment from 'moment';
import amFormat from './amFormat';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <div className="list-item">
      <button className="list-item__rem" onClick={() => {
          dispatch(startRemoveExpense({ id }));
      }}></button>
      <Link className="list-link" to={`/edit/${id}`}>
        <div>
          <h3 className="list-link__title">{description}</h3>
          <span className="list-link__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className="list-link__data">&#8377;{amFormat(amount)}</h3>
      </Link>
    </div>
  </div>
);

export default connect()(ExpenseListItem);
