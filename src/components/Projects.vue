<template>
    <div class="projects">
        <div class="gradients" style="--color-a: #BA2DB7; --color-b: #CF3C7E; --color-c: #E94F35;"></div>
        <a class="projectsCardLink" href="https://mechakeys.robolab.io" target="_blank" rel="noopener noreferrer">
            <div class="projectsCard">
                <div class="projectsCardSpotlightBackground"></div>
                <div class="projectsCardContent">
                    <img class="projectsCardContentImage" src="../assets/img/mechakeys.png"
                        alt="MechaKeys by robolab.io logo">
                    <div class="projectsCardContentInner">
                        <div class="projectsCardContentInnerTitle">MechaKeys <span
                                style="margin-left: 8px; font-family: monospace; font-weight: normal">2021-2022</span>
                        </div>
                        <div class="projectsCardContentInnerDescription">Designed a minimal, extensible, and streamlined
                            UI for an international community.</div>
                        <a href="https://mechakeys.robolab.io" target="_blank" rel="noopener noreferrer"
                            class="openLink">mechakeys.robolab.io
                            <OpenLink class="linkIcon" /></a>
                    </div>
                </div>
            </div>
        </a>

        <a class="projectsCardLink" href="https://en.pronouns.page" target="_blank" rel="noopener noreferrer">
            <div class="projectsCard">
                <div class="projectsCardSpotlightBackground"></div>
                <div class="projectsCardContent">
                    <img class="projectsCardContentImage" src="../assets/img/pronounspage.png"
                        alt="Pronouns.page by The Neutral Language Council logo">
                    <div class="projectsCardContentInner">
                        <div class="projectsCardContentInnerTitle">Pronouns.page <span
                                style="margin-left: 8px; font-family: monospace; font-weight: normal">2021-2022</span></div>
                        <div class="projectsCardContentInnerDescription">Working on accessibility, ease-of-use, and consistency.</div>
                        <a href="https://en.pronouns.page" target="_blank" rel="noopener noreferrer"
                            class="openLink">en.pronouns.page
                            <OpenLink class="linkIcon" /></a>
                    </div>
                </div>
            </div>
        </a>

        <div class="projectsCard">
            <div class="projectsCardSpotlightBackground"></div>
            <div class="projectsCardContent">
                <img class="projectsCardContentImage" src="../assets/img/powercord.png" alt="Powercord logo">
                <div class="projectsCardContentInner">
                    <div class="projectsCardContentInnerTitle">Powercord<span
                            style="margin-left: 8px; font-family: monospace; font-weight: normal">2022</span></div>
                    <div class="projectsCardContentInnerDescription">Developed utilitarian themes for the Discord
                        client.</div>
                </div>
            </div>
        </div>

        <div class="projectsCard">
            <div class="projectsCardSpotlightBackground"></div>
            <div class="projectsCardContent">
                <img class="projectsCardContentImage" src="../assets/img/reactsynergy.png" alt="React Synergy logo">
                <div class="projectsCardContentInner">
                    <div class="projectsCardContentInnerTitle">ReactSynergy <span
                            style="margin-left: 8px; font-family: monospace; font-weight: normal">2022</span></div>
                    <div class="projectsCardContentInnerDescription">Developed a truly reactive Javascript framework
                        with an incredibly tiny footprint.</div>
                </div>
            </div>
        </div>

        <a class="projectsCardLink" href="https://cdn.evan.graphics" target="_blank" rel="noopener noreferrer">
            <div class="projectsCard">
                <div class="projectsCardSpotlightBackground"></div>
                <div class="projectsCardContent" id="cdnAccess">
                    <img class="projectsCardContentImage" src="../assets/img/ferologo.svg"
                        alt="Fero logo">
                    <div class="projectsCardContentInner">
                        <div class="projectsCardContentInnerTitle">Upload file to CDN </div>
                        <div class="projectsCardContentInnerDescription">Requires authorization to access.</div>
                        <a href="https://cdn.evan.graphics" target="_blank" rel="noopener noreferrer"
                            class="openLink">cdn.evan.graphics
                            <OpenLink class="linkIcon" /></a>
                    </div>
                </div>
            </div>
        </a>

        <!-- <div class="skillButton" @click="showAllProjects = !showAllProjects">
        See my skill image
    </div>

    <div class="projectsCard" v-if="showAllProjects">
        <div class="projectsCardContent">
                <img class="projectsCardContentImage" src="../assets/img/pronounspage.png" alt="Pronouns.page by The Neutral Language Council logo">
                <div class="projectsCardContentInner">
                    <div class="projectsCardContentInnerTitle">Bite-sized Skill Showcase<span style="margin-left: 8px; font-family: monospace; font-weight: normal">2022</span></div>
                    <div class="projectsCardContentInnerDescription">
                            <img
      src="https://skillicons.dev/icons?i=js,ts,html,css,wasm,zig,java,kotlin,cs,cpp,lua,nodejs,vue,docker,figma,ps&perline=10"
    />
                    </div>
                </div>
        </div>
    </div> -->

    </div>
</template>

<script setup>
    import {
        onMounted
    } from '@vue/runtime-core'
    onMounted(() => {
        const projectsParent = document.querySelector(".projects");
        const projectsCard = document.querySelectorAll(".projectsCard");

        projectsParent.addEventListener("pointermove", (ev) => {
            projectsCard.forEach((project) => {
                const rect = project.getBoundingClientRect();

                project.style.setProperty("--x", ev.clientX - rect.left);
                project.style.setProperty("--y", ev.clientY - rect.top);
            });
        });
    });

import OpenLink from "../icons/link.vue"
</script>

<script>
    export default {
        data() {
            return {
                showAllProjects: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .gradients {
        pointer-events: none;
        user-select: none;
        position: absolute;
        overflow: visible;
        z-index: 3001;
        inset: 0px;
    }

    .gradients:before {
        content: "";
        position: absolute;
        opacity: 0.15;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(-50px + 100vw);
        height: 100vh;
        filter: blur(80px); 
        background: radial-gradient(400px circle at 40% 45%, var(--color-a), 70%, transparent ), radial-gradient(400px circle at 50% 55%,var(--color-b),60%,transparent), radial-gradient(350px circle at 40% 40%,var(--color-c),60%,transparent);
    }

    .projectsCardLink, .projectsCard {
        flex-shrink: 0;
    }

    a.projectsCardLink {
        color: #eeeeee;
    }

    a {
        text-decoration: none;
    }

    .linkIcon {
        width: 16px;
        height: 16px;
        fill: #909090;
    }

    .openLink {
        color: #909090 !important;
        text-decoration: none;
        z-index: 1;
    }

    .projects {
        display: flex;
        flex-direction: column;
        justify-content: center;

        animation: fade-in-left 1s ease-in-out forwards;

        min-height: 0;
        flex: 1;
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
        max-width: 750px;
        min-height: 110px;
    }

    .projectsCard {
        margin: 0.5rem 2rem 0.5rem 2rem;
        border-radius: 1rem;
        /* background-color: rgba(255, 255, 255, 0.1) */
        // background: rgba(255, 255, 255, 0.1);
        // border-radius: 16px;
        // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        // border: 1px solid rgba(255, 255, 255, 0.44);

        backdrop-filter: blur(4px);

        top: var(--border);
        bottom: var(--border);
        left: var(--border);
        right: var(--border);

        --x-px: calc(var(--x) * 1px);
        --y-px: calc(var(--y) * 1px);
        --border: 1px;
        background: rgba(255, 255, 255, 0.12) none repeat scroll 0% 0%;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 12px 12px;
        
        overflow: hidden;
        
        &:before,
        &:after {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            inset: 0px;
            border-radius: inherit;
            background: radial-gradient(800px circle at var(--x-px) var(--y-px),rgba(255,255,255,0.19),transparent 40%);
            
        }

        &:before {
            z-index: 1;
        }

        &:after {
            opacity: 0;
            z-index: 2;
            transition: opacity 400ms ease 0s;
        }

        &:hover:after {
            opacity: 1;
        }
    }

    .projectsCardSpotlightBackground:hover {
        opacity: 1;
    }

    .projectsCardSpotlightBackground {
        pointer-events: none;
        user-select: none;
        position: absolute;
        z-index: 1;
        opacity: 0;
        top: var(--border);
        bottom: var(--border);
        left: var(--border);
        right: var(--border);
        border-radius: 1rem;
        background: radial-gradient(400px circle at var(--x) var(--y),rgba(255,255,255,0.19),transparent);
        contain: strict;
        transition: opacity 400ms ease 0s;
    }

    .projectsCardContent {
        display: flex;
        flex-direction: row;
        align-items: center;

        padding: 1rem;
        border-radius: 1rem;
        background: rgb(19, 19, 21) none repeat scroll 0% 0%;

        z-index: 1;
        position: absolute;
        inset: var(--border);
    }

    // #cdnAccess {
    //     background: rgba(66, 14, 33, 0.45);
    // }

    .projectsCardContentImage {
        height: 3rem;
        width: 3rem;
        border-radius: 1rem;
        object-fit: contain;

        display: flex;
        flex-shrink: 0;
    }

    .projectsCardContentImage {
        background: rgba(102, 102, 102, 0.125);
    }

    .projectsCardContentInner {
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
    }

    .projectsCardContentInnerTitle {
        font-weight: bold;
        ;
    }
</style>