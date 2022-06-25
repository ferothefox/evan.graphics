<template>
    <div class="projects">

        <a href="https://mechakeys.robolab.io" target="_blank" rel="noopener noreferrer">
            <div class="projectsCard">
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

        <a href="https://en.pronouns.page" target="_blank" rel="noopener noreferrer">
            <div class="projectsCard">
                <div class="projectsCardContent">
                    <img class="projectsCardContentImage" src="../assets/img/pronounspage.png"
                        alt="Pronouns.page by The Neutral Language Council logo">
                    <div class="projectsCardContentInner">
                        <div class="projectsCardContentInnerTitle">Pronouns.page <span
                                style="margin-left: 8px; font-family: monospace; font-weight: normal">2022</span></div>
                        <div class="projectsCardContentInnerDescription">Focused on accessiblity and ease-of-use.</div>
                        <a href="https://en.pronouns.page" target="_blank" rel="noopener noreferrer"
                            class="openLink">en.pronouns.page
                            <OpenLink class="linkIcon" /></a>
                    </div>
                </div>
            </div>
        </a>

        <div class="projectsCard">
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
        const featuresEl = document.querySelector(".projects");
        const featureEls = document.querySelectorAll(".projectsCard");

        featuresEl.addEventListener("pointermove", (ev) => {
            featureEls.forEach((featureEl) => {
                // Not optimized yet, I know
                const rect = featureEl.getBoundingClientRect();

                featureEl.style.setProperty("--x", ev.clientX - rect.left);
                featureEl.style.setProperty("--y", ev.clientY - rect.top);
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
    a {
        text-decoration: none;
    }

    a:visited {
        color: inherit
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

    /* .skillButton {
    padding: 1rem;
    background-color: white;
    color: black;   
    margin: 1rem;
    border-radius: 1rem;
    cursor: default;
} */

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
        border-radius: 1rem;
        /* background-color: rgba(255, 255, 255, 0.1) */
        // background: rgba(255, 255, 255, 0.1);
        // border-radius: 16px;
        // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(4px);
        // border: 1px solid rgba(255, 255, 255, 0.44);

        --x-px: calc(var(--x) * 1px);
        --y-px: calc(var(--y) * 1px);
        --border: 2px;
        // background: rgba(255, 255, 255, 0.125);
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
            background: radial-gradient(800px circle at var(--x-px) var(--y-px),
                    rgba(255, 255, 255, 0.1),
                    transparent 40%);
        }

        &:before {
            z-index: 1;
        }

        &:after {
            opacity: 0;
            z-index: 2;
            transition: opacity 0.4s ease;
        }

        &:hover:after {
            opacity: 1;
        }


    }

    .projectsCardContent {
        display: flex;
        flex-direction: row;
        align-items: center;

        padding: 1rem;
        border-radius: 1rem;
        background: rgba(102, 102, 102, 0.125);
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
        font-weight: bold;
        ;
    }
</style>