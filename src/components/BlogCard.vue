<template>
    <a
        :href="cardLink"
        target="_blank"
        rel="noopener noreferrer"
        class="openLink">
        <div class="blogsCard">
        <div class="blogsCardSpotlightBackground"></div>
        <div class="blogsCardContent">
            <img
            :src="
            cardIcon
                ? cardIcon.startsWith('https')
                ? cardIcon
                : `https://raw.githubusercontent.com/ferodevs/evan.graphics/main/src/assets/img/${cardIcon}`
                : null
            "
            class="blogsCardContentImage"
            />
            <div class="blogsCardContentInner">
                <div class="blogsCardContentInnerTitle">
                    {{ name }}
                    <span v-if="year" style="margin-left: 8px; font-family: monospace; font-weight: normal">{{ year }}</span>
                </div>

                <div class="blogsCardContentInnerDescription">
                    {{ description }}
                </div>
                
                <a
                    v-if="displayLink"
                    :href="cardLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="openLink"
                    tabindex="-1"
                    >{{ displayLink }} <OpenLink class="linkIcon"/>
                    
                </a>
            </div>
        </div>
        </div>
    </a>
</template>

<script setup>
import OpenLink from "../icons/link.vue"
</script>

<script>
export default {
  props: {
    cardIcon: {
      default: '',
    },
    name: {
      default: '',
    },
    cardLink: {
      default: null,
    },
    year: {
      default: null,
    },
    description: {
      default: '',
    },
    displayLink: {
        default: null,
    }
  },
}
</script>

<style scoped lang="scss">
    .blogsCardLink, .blogsCard {
        flex-shrink: 0;
    }

    a {
        text-decoration: none;
    }

    .linkIcon {
        width: 16px;
        height: 16px;
        fill: #909090;
        pointer-events: all;
    }

    .openLink {
        color: #909090 !important;
        text-decoration: none;
        z-index: 3000;
        pointer-events: auto;
    }

    .blogsCardContentInner {
        color: #eeeeee;
    }

    .blogsCard {
        margin-top: 1rem;
        margin-bottom: 1rem;
        max-width: 600px;
        min-height: 180px;
    }

    .blogsCard {
        border-radius: 1rem;
        backdrop-filter: blur(4px);

        top: var(--border);
        bottom: var(--border);
        left: var(--border);
        right: var(--border);

        --x-px: calc(var(--x) * 1px);
        --y-px: calc(var(--y) * 1px);
        --border: 1px;
        background: rgba(255, 255, 255, 0.12) none repeat scroll 0% 0%;
        
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
            background: radial-gradient(750px circle at var(--x-px) var(--y-px),rgba(255,255,255,0.2),transparent 40%);
        }

        &:before {
            z-index: 1;
        }

        &:after {
            opacity: 0;
            z-index: 2;
            transition: opacity 350ms ease 0s;
        }

        &:hover:after {
            opacity: 1;
        }
    }

    .blogsCardSpotlightBackground:hover {
        opacity: 1;
    }

    .blogsCardSpotlightBackground {
        // pointer-events: none;
        user-select: none;
        position: absolute;
        z-index: 1;
        opacity: 0;
        top: var(--border);
        bottom: var(--border);
        left: var(--border);
        right: var(--border);
        border-radius: 1rem;
        background: radial-gradient(800px circle at var(--x) var(--y),rgba(255,255,255,0.1),transparent);
        contain: strict;
        transition: opacity 400ms ease 0s;
    }

    .blogsCardContent {
        display: flex;
        flex-direction: row;

        padding: 1rem;
        border-radius: 1rem;
        background: rgb(19, 19, 21) none repeat scroll 0% 0%;

        z-index: 1;
        position: absolute;
        inset: var(--border);
    }

    .blogsCardContentImage {
        height: 3rem;
        width: 3rem;
        border-radius: 1rem;
        object-fit: contain;

        display: flex;
        flex-shrink: 0;
    }

    .blogsCardContentImage {
        background: rgba(102, 102, 102, 0.125);
    }

    .blogsCardContentInner {
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
    }

    .blogsCardContentInnerTitle {
        font-weight: bold;
    }
</style>