import React from "react";
import linkedIn from "../data/linkedIn.png";

const LinkedInAnnuncio = () => {
    return (
        <a href="https://www.linkedin.com/jobs/?trk=li_FA_global_careers_jobsgtm_jsFA_v1&mcid=6899045044465016833">
            <img src={linkedIn} alt="LinkedIn" className="annuncio mb-2" />
        </a>
    );
};

export default LinkedInAnnuncio;
