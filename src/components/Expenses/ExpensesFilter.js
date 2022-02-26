import React from "react";
import './ExpensesFilter.css';

const ExpensesFilter = (props) =>{
    const dropdownChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filte__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2012'>2012</option>
                    <option value='2010'>2010</option>
                </select>
            
            </div>
        </div>
    );
};

export default ExpensesFilter;