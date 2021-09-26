import React from 'react';
import "./SelectedMember.css"

const SelectedMember = (props) => {
    const { teamItem, delItem } = props;
    return (
        <div>
            <div className="selected-member">
                <img src={teamItem.img} alt="profile-img" />
                <div className="member-info">
                    <h1>{teamItem.name}</h1>
                    <h4>{teamItem.title}</h4>
                </div>
                <div>
                    <button className="remove-btn" onClick={() => delItem(teamItem)}>x</button>
                </div>
            </div>
        </div>
    );
};

export default SelectedMember;