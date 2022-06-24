<template>
<div class="projects">

    <div class="projectsCard">
        <div class="projectsCardContent">
                <img class="projectsCardContentImage" src="../assets/img/mechakeys.png" alt="MechaKeys by robolab.io logo">
                <div class="projectsCardContentInner">
                    <div class="projectsCardContentInnerTitle">MechaKeys <span style="margin-left: 8px; font-family: monospace; font-weight: normal">2021-2022</span></div>
                    <div class="projectsCardContentInnerDescription">Designed a minimal, extensible, and streamlined UI for an international community.</div>
                </div>
        </div>
    </div>

    <div class="projectsCard">
        <div class="projectsCardContent">
                <img class="projectsCardContentImage" src="../assets/img/pronounspage.png" alt="Pronouns.page by The Neutral Language Council logo">
                <div class="projectsCardContentInner">
                    <div class="projectsCardContentInnerTitle">Pronouns.page <span style="margin-left: 8px; font-family: monospace; font-weight: normal">2022</span></div>
                    <div class="projectsCardContentInnerDescription">Focused on accessiblity and ease-of-use.</div>
                </div>
        </div>
    </div>
    
</div>
</template>

<style scoped>
.projects {
    display: flex;
    flex-direction: column;
    justify-content: center;

    animation: fade-in-left 1s ease-in-out forwards;
}

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.projectsCard {
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    /* background-color: rgba(255, 255, 255, 0.1) */
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.44);
}

.projectsCardContent {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.projectsCardContentImage {
    height: 3rem;
    width: 3rem;
    border-radius: 1rem;
    object-fit: contain;
}

.projectsCardContentInner {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
}

.projectsCardContentInnerTitle {
    font-weight: bold;;
}
</style>