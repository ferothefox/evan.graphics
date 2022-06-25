<script setup>
import Sidebar from './components/Sidebar.vue'
import Background from './components/GradientBackground.vue'

import Introduction from './components/Introduction.vue'
import Projects from './components/Projects.vue'
</script>

<template>
<div class="app">
  <div class="layout">
    <Sidebar/>
    <Background/>

    <Introduction/>
    <Projects/>
  </div>
</div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}

html, body {
  background-color: #0a0a0a;
  color: #eeeeee;
}

html, body, div {
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  color: var(--color-text);
  background: var(--color-background);
  transition: color 0.5s, background-color 0.5s;
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media only screen and (max-width: 800px) {
  .layout {
    flex-direction: column !important;
  }

  .subtitles, .title, .description {
    margin: auto auto;
  }

  .projects {
    margin-left: 64px;
  }
}

</style>

<style scoped>
.app {
  display: flex;
}

.layout {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}
</style>
