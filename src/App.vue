<script> 
// Will be dynamic soon.
export default {
  data() {
    return {
        theme: 'dark' ,
        fontSize: 'default',
        access: 'none',
        accessID: 'none',
        accessSecret: 'none',
    }
  }
}
</script>

<template>
<div class="app" style="position: relative; height: 100%;" :data-theme="theme" :data-font-size="fontSize" :data-access-authenticated="access" :data-access-id="accessID" :data-access-secret="accessSecret" tabindex="-1">
<router-view></router-view>
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
  background-color: #060606;
  color: #eeeeee;
}

html, body, div {
  margin: 0;
  padding: 0;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
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

  .navigationWrapper {
    flex-direction: row !important;
    width: 100% !important;
    height: 64px !important;
  }

  .navigationWrapper {
    justify-content: flex-end !important;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .navigationWrapper {
    border-right: none !important;
    border-bottom: 1px solid rgba(247, 248, 248, 0.1);
  }

  .navigationWrapper {
    position: fixed;
    top: 0px;
  }

  .introductionWrapper {
    margin: 32px 32px 32px 32px !important;
  }

  .introduction {
    margin-top: 64px;  
  }

  .extendedDescription {
      position: initial !important;
      padding-bottom: 0rem !important;
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
