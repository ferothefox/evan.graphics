<template>
<main class="layout">
<BG/>
<LayeredContent style="visibility: hidden; display: none !important;"/>
<Navigation/>
<Introduction/>

<router-view></router-view>
</main>
</template>

<script setup>
import Navigation from '../components/Navigation.vue'
import Introduction from '../components/Introduction.vue'
import Projects from '../components/Projects.vue'

import LayeredContent from '../components/layered/Layered.vue'

import BG from '../components/BG.vue'
</script>