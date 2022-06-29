<template>
    <nav class="navigationWrapper">
        <a class="navigationLink" href="https://go.evan.graphics/discord" target="_blank" rel="noopener noreferrer">
            <Discord /></a>
        <a class="navigationLink" href="https://go.evan.graphics/twitter" target="_blank" rel="noopener noreferrer">
            <Twitter /></a>
        <a class="navigationLink" href="https://go.evan.graphics/github" target="_blank" rel="noopener noreferrer">
            <GitHub /></a>

    </nav>
</template>

<script setup>
    import Discord from "../icons/discord.vue"
    import GitHub from "../icons/github.vue"
    import Twitter from "../icons/twitter.vue"
</script>


<style scoped>
    .navigationWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        gap: 32px;

        width: 64px;

        /* background-color: #0a0a0a; */

        background: rgba(6, 6, 6, 0.6) none repeat scroll 0% 0%;
        backdrop-filter: blur(8px);

        transition: 0.25s;

        animation-name: fade-in-right-better;
        animation-duration: 800ms;
        animation-timing-function: ease;
        animation-iteration-count: 1;
        animation-direction: normal;
        animation-fill-mode: backwards;
        animation-play-state: running;

        z-index: 3001;

        height: 100vh;
        border-right: 1px solid rgba(247, 248, 248, 0.1);
    }

    .navigationWrapper:hover {
        border-right: 1px solid rgba(247, 248, 248, 0.2);
        background: rgba(12, 12, 12, 0.6) none repeat scroll 0% 0%;
        transition: 0.25s;
    }

    .navigationLink {
        width: 24px;
        height: 24px;

        color: rgba(247, 248, 248, 0.6);
        fill: rgba(247, 248, 248, 0.6);
        transition: 0.25s;
    }

    .navigationLink:hover {
        color: rgba(247, 248, 248, 1);
        fill: rgba(247, 248, 248, 1);
        transition: 0.25s;
    }

    .navigationLink > svg[data-icon="discord"] {
        margin-top: 4px;
    }

    @keyframes fade-in-right {
        from {
            opacity: 0;
            transform: translateX(-32px);
        }

        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes fade-in-right-better {
        from {
            opacity:0;
            -webkit-transform:translateX(-20px);
            -ms-transform:translateX(-20px);
            transform:translateX(-20px);
        }
        to {
            opacity:1;
            -webkit-transform:none;
            -ms-transform:none;
            transform:none;
        }
    }
</style>