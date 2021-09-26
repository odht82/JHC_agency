import React from 'react';
import SelectedMember from '../../SelectedMember/SelectedMember';
import "./CustomTeamList.css"

const CustomTeamList = (props) => {
    const { team, delItem } = props;
    return (
        <div>
            <div className="team-list">
                <h2>Team</h2>
                {team.length === 0 ? <p style={{ fontWeight: 600, color: "red" }}>No items selected.</p> :

                    team.map((teamItem) => {
                        return (
                            <SelectedMember key={teamItem.key} delItem={delItem} teamItem={teamItem}></SelectedMember>
                        )
                    })}
                <button className="start-prjct">Start Project</button>
            </div>
        </div>
    )
};

export default CustomTeamList;