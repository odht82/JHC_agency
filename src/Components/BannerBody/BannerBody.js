import React from 'react';
import './BannerBody.css'

const BannerBody = () => {
    return (
        <div className="banner">
            <div className="container">
                <h1 className="banner-heading">Select our Developer team,<br />For Hire your App development project</h1>
                <p className="banner-desc">We have very skilled and experienced developers. <br />
                    You can get all kind of web, mobile, desktop app developers <br />
                    and programmers. Just select from the developers section.</p>
                <h3 className="project-budget">Project Budget:  $40,000</h3>
                <div className="action-btn">
                    <button className="start-project">Start Project</button>
                    <button className="get-support">Get Support</button>
                </div>
            </div>
        </div>
    );
};

export default BannerBody;