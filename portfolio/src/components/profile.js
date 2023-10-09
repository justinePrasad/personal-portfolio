import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Profile(){

    return(
        <>
        <section id="profile">
            <div class="section_pic">
                <img src="./assets/avatarCircle.png" alt="Justine Prasad Profile Picture"/>
                
            </div>

            <div class="column">
            <div class="section_text">
                    <p class="section_text_p1">Hello I'm</p>
                    <h1 class="title">Justine Prasad</h1>
                    <div class="section_text_p2">Student studying Computer Science & Mathmematics</div>
                        <div class="btn-container">
                            <button className="btn btn-color-2" 
                            onClick={() => window.open("./assets/JustinePrasadResume.pdf")}>
                                Download CV
                            </button>
                            {/* <button className="btn btn-color-1" 
                            onClick={() => window.location.href='./#experience'}>
                                Experience Section
                            </button> */}
                        </div>
                </div>

            <div class="socials">
                <a href="mailto:jprasad1@pride.hofstra.edu" class="mailIcon">
                    <EmailIcon 
                    style={{
                        fontSize: 35
                    } }>
                    </EmailIcon></a>
                <a href="https://github.com/justinePrasad" class="githubIcon">
                    <GitHubIcon
                    style={{
                        fontSize: 35
                    }}></GitHubIcon></a>
                <a href="https://www.linkedin.com/in/justineprasad" class="linkedinIcon">
                    <LinkedInIcon
                    style={{
                        fontSize: 35
                    }}
                    >
                    
                    </LinkedInIcon></a>
            </div>
            </div>
        </section>
        </>
    )

}

export default Profile