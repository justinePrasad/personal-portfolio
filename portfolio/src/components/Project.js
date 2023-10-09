import React from "react";

function Projects () {

    return (
        <>
        <p class="section_text_p1">Browse my recent</p>
        <h1 class="title">Projects</h1>
        <div class="experience-details-container">
            {/* <div class="details-container color-container"> */}
                <div class ="article-container">

                    <h2>Portfolio Website</h2>
                    <h3>Description</h3>
                    <p> Developed an interactive portfolio website using React and JavaScript, 
                        featuring key projects and skills.
                         Automated deployment via Netlify, integrating Git for version control.
                         Leveraged Material-UI for a modern, responsive design.



                    </p>
                    <h3>Tech Stack</h3>
                    <p>
                    HTML, CSS, JavaScript, React, Netlify

                    </p>

                    <div class="btn-container">
                        <button class="btn btn-color-2 project-btn"
                         onClick={()=> window.open('https://github.com/justinePrasad/personal-portfolio', '_blank')}>
                            Github
                         </button>

                         <button
                            class="btn btn-color-2 porject-btn"
                            onClick={()=> window.open('https://jprasad.netlify.app/', '_blank')}
                         >
                            Live Demo
                         </button>
                    </div>

                    
                </div>

                <div class ="article-container">

                    <h2 className="experience-sub-title project-title" >Console Note-Taking Application</h2>
                    <h3>Description</h3>
                    <p>
                    Created a C++ console-based note-taking application, incorporating custom-built Windows DLLs for modular functionality.
                    </p>
                    <h3>Tech Stack</h3>
                    <p>C++/C</p>

                    <div class="btn-container">
                        <button class="btn btn-color-2 project-btn"
                         onClick={()=> window.open('https://github.com/justinePrasad/NotetakingApp', '_blank')}>
                            Github
                         </button>
                    </div>

                    
                </div>

                <div class ="article-container">

                    <h2 className="experience-sub-title project-title" >GAT Node Classification</h2>
                    <h3>Description</h3>
                    <p>
                    As an undergraduate researcher at Hofstra ASPiRe, I conducted research on node classification using Graph Attention Networks (G.A.T.). Gained experience with PyTorch, data processing, and data visualization, I explored the impact of different architectures on performance and accuracy. 
                    Achieved an 81.5% accuracy rate using a two-layer Graph Convolutional Network. Researched KFAC implemenation from this <a href="https://github.com/justinePrasad/HofstraASPiRe2023/blob/main/KFACNodeClassificationGNN.ipynb">repository</a>.
                    </p>
                    <h3>Tech Stack</h3>
                    <p>PyTorch, numpy, pandas</p>

                    <div class="btn-container">
                        <button class="btn btn-color-2 project-btn"
                         onClick={()=> window.open('https://github.com/justinePrasad/HofstraASPiRe2023/blob/main/KFACNodeClassificationGNN.ipynb', '_blank')}>
                            Github
                         </button>
                    </div>

                    
                </div>
            {/* </div> */}
        </div>
        </>
    )
}

export default Projects