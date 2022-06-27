<template>
    <div class="projects">

        <div class="gradients" style="--color-a: #BA2DB7; --color-b: #CF3C7E; --color-c: #E94F35;"></div>

        <Project
            v-for="project in content"
            :key="project.name"
            :cardIcon="project.icon"
            :name="project.name"
            :cardLink="project.cardLink"
            :displayLink="project.displayLink"
            :year="project.year"
            :description="project.description"
        />

    </div>
</template>

<script setup>
import Project from "./ProjectCard.vue"
    import {
        onMounted
    } from '@vue/runtime-core'
    onMounted(() => {
        const projectsParent = document.querySelector(".layout");
        const projectsCard = document.querySelectorAll(".projectsCard");

        projectsParent.addEventListener("pointermove", (ev) => {
            projectsCard.forEach((project) => {
                const rect = project.getBoundingClientRect();

                project.style.setProperty("--x", ev.clientX - rect.left);
                project.style.setProperty("--y", ev.clientY - rect.top);
            });
        });
    });
</script>

<script>
export default {
  data() {
    return {
      content: [
        {
          icon: 'mechakeys.png',
          name: 'MechaKeys',
          year: '2021-2022',
          cardLink: "https://go.evan.graphics/mechakeys",
          displayLink: "mechakeys.robolab.io",
          description:
            'Designed a minimal, extensible, and streamlined UI',
        },
        {
          icon: 'pronounspage.png',
          name: 'Pronouns.page',
          year: '2021-2022',
          cardLink: "https://go.evan.graphics/pronouns-page-english",
          displayLink: "en.pronouns.page",
          description:
            'Designing for accessibility, ease-of-use, and consistency',
        },
        {
          icon: 'powercord.png',
          name: 'Powercord',
          year: '2022',
          description:
            'Developed optimized and utilitarian modifcations for the Discord client',
        },
        {
          icon: 'reactsynergy.png',
          name: 'ReactSynergy',
          year: '2022',
          description:
            'Developed a truly reactive Javascript framework with an incredibly tiny footprint',
        },
        {
          icon: 'ferologo.svg',
          name: 'Art \"Portfolio\"',
          cardLink: "https://go.evan.graphics/twitter-collection-art",
          displayLink: "twitter.com",
          year: '',
          description:
            'Collections of doodles that I publish to Twitter'
        }
      ],
    }
  },
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

    .projects { 
        display: flex;
        flex-direction: column;
        justify-content: center;

        animation: 800ms linear 0s 1 normal backwards running blur-in;

        min-height: 0;
        flex: 1;
    }

    @keyframes blur-in {
        0% {
            opacity:0;
            -webkit-filter:blur(30px);
            filter:blur(30px);
        }
        70% {
            -webkit-filter:none;
            filter:none;
        }
        100% {
            opacity:1;
            -webkit-filter:none;
            filter:none;
        }
    }
</style>