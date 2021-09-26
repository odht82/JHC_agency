import React, { useState, useEffect } from 'react';
import Card from './Card/Card';
import CostTotal from './CostTotal/CostTotal';
import CustomTeamList from './CustomTeamList/CustomTeamList';
import './Developers.css'

const Developers = () => {
    const [developers, setDevelopers] = useState([]);
    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch('./MyData.json')
            .then(res => res.json())
            .then(data => setDevelopers(data));
    }, []);

    const handleAddToTeam = (developer) => {
        let newTeam;
        if (!(team.includes(developer))) {
            newTeam = [...team, developer];
            setTeam(newTeam);
            developer.selected = true
        } else {
            alert('You have already added the developer to your team.')
            return;
        }
    }

    const delItem = (teamMember) => {
        const newTeam = team.filter(tm => {
            teamMember.selected = false;
            return !(tm.key === teamMember.key)
        })
        setTeam(newTeam)
    }

    if (team[0] !== undefined) {
        console.log(team[0].key);
    }
    return (
        <div className="dev">
            <div className="dev-sec">
                <div className="card-sec">
                    {
                        developers.map(developer => <Card
                            key={developer.key}
                            developer={developer}
                            handleAddToTeam={handleAddToTeam}
                        >
                        </Card>)
                    }
                </div>
                <div className="team-creator-sec">
                    <CostTotal
                        team={team}></CostTotal>
                    <CustomTeamList delItem={delItem} team={team}></CustomTeamList>
                </div>
            </div>
        </div>
    );
};

export default Developers;