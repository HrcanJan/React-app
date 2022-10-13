import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react'
import React from 'react';

const ExpenseItem = (prop) => {

    const [title, setTitle] = useState(prop.title)

    const clickHandler = () => {
        setTitle("Updated")
    }
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={prop.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>
                    ${prop.amount}
                </div>
            </div>
            <button onClick={clickHandler}>Click me</button>
        </Card>
    );
}

export default ExpenseItem;