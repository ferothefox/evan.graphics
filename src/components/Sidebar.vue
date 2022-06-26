<template>
    <nav class="sidebar">
        <a class="sidebarLink" href="https://go.evan.graphics/discord" target="_blank" rel="noopener noreferrer">
            <Discord /></a>
        <a class="sidebarLink" href="https://go.evan.graphics/twitter" target="_blank" rel="noopener noreferrer">
            <Twitter /></a>
        <a class="sidebarLink" href="https://go.evan.graphics/github" target="_blank" rel="noopener noreferrer">
            <GitHub /></a>

    </nav>
</template>

<script setup>
    import Discord from "../icons/discord.vue"
    import GitHub from "../icons/github.vue"
    import Twitter from "../icons/twitter.vue"
</script>


<style scoped>
    .sidebar {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        gap: 32px;

        width: 64px;

        /* background-color: #0a0a0a; */

        background: rgb(19, 19, 21) none repeat scroll 0% 0%;

        opacity: 0.5;
        transition: 0.1s ease-in-out;
        animation: fade-in-right 1s;

        z-index: 3001;

        height: 100vh;
        border-right: 1px solid rgba(255, 255, 255, 0.15);
    }

    .sidebar:hover {
        opacity: 0.9;
        transition: 0.1s ease-in-out;
    }

    .sidebarLink {
        width: 24px;
        height: 24px;

        color: white;
        fill: white;
    }

    @keyframes fade-in-right {
        from {
            opacity: 0;
            transform: translateX(-32px);
        }

        to {
            opacity: 0.5;
            transform: translateX(0);
        }
    }
</style>