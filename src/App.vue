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
      <!-- <Background/> -->

    <Introduction/>
    <Projects/>
  </div>
</div>
</template>

<style>
* { min-width: 0; min-height: 0; }

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}

.hidden {
  visibility: hidden;
  display: none !important;
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

button {
  background-color: transparent;
  background-image: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0;
  margin: 0;  
  line-height: inherit;
  color: inherit;
  border: none;
}

@media only screen and (max-width: 800px) {
  .layout {
    flex-direction: column !important;
  }

  .sidebar {
    flex-direction: row !important;
    width: 100% !important;
    height: 64px !important;
  }

  .wrapper {
    margin: 32px 32px 32px 32px !important;
    height: 100vh;
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15); 
  }
}

ul, ol {
  list-style: none;
  margin: 0;
  padding: 0;
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
