<template>
    <section class="blogs">

        <div class="gradients" style="--color-a: #4c2dba; --color-b: #3c86cf; --color-c: #35e9bf;"></div>

        <div class="blogWrapper" tabindex="-1">
            <Blog
                v-for="blog in content"
                :key="blog.name"
                :cardIcon="blog.icon"
                :name="blog.name"
                :cardLink="blog.cardLink"
                :displayLink="blog.displayLink"
                :year="blog.year"
                :description="blog.description"
                tabindex="1"
            />
        </div>
    </section>
</template>

<script setup>
import Blog from "./BlogCard.vue"
    import {
        onMounted
    } from '@vue/runtime-core'
    onMounted(() => {
        const blogsParent = document.querySelector(".layout");
        const blogsCard = document.querySelectorAll(".blogsCard");

        blogsParent.addEventListener("pointermove", (ev) => {
            blogsCard.forEach((blog) => {
                const rect = blog.getBoundingClientRect();

                blog.style.setProperty("--x", ev.clientX - rect.left);
                blog.style.setProperty("--y", ev.clientY - rect.top);
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
          icon: 'https://i.ytimg.com/vi/0H_NMEzjD3M/hqdefault.jpg',
          name: 'You\'ve found a secret!',
          year: 'JUN 29, 2022',
          description:
            'You deserve head-pats. All of them. Stay put and sit tight until blogging functionality is fully functional.',
        },
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
        opacity: 0.2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(-50px + 100vw);
        height: 100vh;
        filter: blur(80px); 
        background: radial-gradient(400px circle at 40% 45%, var(--color-a), 70%, transparent ), radial-gradient(400px circle at 50% 55%,var(--color-b),60%,transparent), radial-gradient(350px circle at 40% 40%,var(--color-c),60%,transparent);
    }

    .blogs { 
        display: flex;
        flex-direction: column;
        justify-content: center;

        animation: 800ms linear 0s 1 normal backwards running blur-in;

        height: 100vh;
        min-height: 0;
        flex: 1;
    }

    .blogWrapper {
        overflow-y: auto;
        padding: 2rem;
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