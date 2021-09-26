import React from 'react';
import './Card.css';
import github from "./mediaBtn/github.png";
import facebook from "./mediaBtn/facebook.png";
import linkedin from "./mediaBtn/linkedin.png";

const Card = (props) => {
    const { name, title, fb, git, linkin, role, skills, experience, salary, img, review, selected } = props.developer;
    return (
        <div className="card">
            <div className="top-sec">
                <div className="thumb">
                    <img src={img} alt="profile thumb" />
                </div>
                <div className="profile">
                    <div className="titles">
                        <h1>{name}</h1>
                        <h3>{title}</h3>
                    </div>
                    <div className="media-link">
                        <a href={git}><img src={github} alt="github" /></a>
                        <a href={fb}><img src={facebook} alt="linkedin" /></a>
                        <a href={linkin}><img src={linkedin} alt="facebook" /></a>
                    </div>
                </div>
            </div>
            <div className="mid-sec">
                <h4 className="info">Role: <span>{role}</span></h4>
                <h4 className="info">Skills: <span>{skills}</span></h4>
                <h4 className="info">Experience: <span>{experience} years</span></h4>
                <h4 className="info">Salary: <span>{salary}$</span></h4>
            </div>
            <div className="bottom-sec">
                <div className="act-btn">
                    <button onClick={() => props.handleAddToTeam(props.developer)} className="select-btn">{selected ? <div>selected</div> : "select"}
                    </button>
                </div>
                <div className="review">
                    <p></p>
                    <h4>Review: {review}</h4>
                </div>
            </div>
        </div>
    );
};

export default Card;