<template>
    <nav class="navigationWrapper">
        <Logo class="navigationIcon"/>
        <div class="linksContainer">
            <a class="navigationLink" href="https://go.evan.graphics/discord" target="_blank" rel="noopener noreferrer">
            <Discord /></a>
            <a class="navigationLink" href="https://go.evan.graphics/twitter" target="_blank" rel="noopener noreferrer">
            <Twitter /></a>
            <a class="navigationLink" href="https://go.evan.graphics/github" target="_blank" rel="noopener noreferrer">
            <GitHub /></a>
        </div>
    </nav>
</template>

<script setup>
    import Discord from "../icons/discord.vue"
    import GitHub from "../icons/github.vue"
    import Twitter from "../icons/twitter.vue"

    import Logo from "../icons/fero.vue"
</script>


<style scoped>
    .navigationWrapper {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;

        gap: 32px;

        width: 64px;

        padding-top: 1rem;
        padding-bottom: 1rem;

        /* background-color: #0a0a0a; */

        background: rgba(6, 6, 6, 0.6) none repeat scroll 0% 0%;
        backdrop-filter: blur(8px);

        transition: 0.1s ease-in-out;

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
        transition: 0.1s ease-in-out;
    }

    .linksContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 32px;
        height: calc(100% - 48px)
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

    .navigationIcon {
        display: flex;
        flex-shrink: 0;
        width: 48px;
        height: 48px;
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