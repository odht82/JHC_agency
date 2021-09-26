import React from 'react';
import "./CostTotal.css"

const CostTotal = (props) => {
    const { team } = props;
    let totalSelected = 0;
    let total = 0;

    for (const developer of team) {
        total = total + developer.salary;
        totalSelected = totalSelected + developer.quantity;
    }

    return (
        <div className="cost-sec">
            <h2>Team Overview</h2>
            <hr />
            <div className="total-div">
                <p className="total">Total Added in Team: <span className="total-dollar"> {team.length}</span></p>
                <p className="total">Total Cost: <span className="total-dollar"> {total.toFixed(2)} $</span></p>
            </div>
        </div>
    );
};

export default CostTotal;