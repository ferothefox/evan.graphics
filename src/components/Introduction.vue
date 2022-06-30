<template>
  <section class="introduction">
    <div class="introductionWrapper">
      <aside class="subtitles">
        <div class="subtitle _1">Artist</div>
        <div class="subtitle _2">Designer</div>
        <div class="subtitle _3">Developer</div>
      </aside>
      <div class="title titleGradient">Evan Song</div>

      <div class="description _1">
        I am an experienced designer and developer. I build effective UIs and
        graphics for high-demand products and thriving online communities.
      </div>

      <div class="description paragraphMargin _2">
        Take a look at my social media, or email me at <span style="font-family: monospace; font-weight: normal">hi@evan.graphics</span>
      </div>

      <div
        class="skillButton"
        @click="showExtendedDescription = !showExtendedDescription"
      >
        Icebreakers
        <Caret
          class="caret"
          :class="showExtendedDescription ? 'caretActive' : ''"
        />
      </div>

      <Transition name="slide">
        <div class="extendedDescription" v-if="showExtendedDescription">
          <ul>
            <li>Keyboard and audio enthusiast</li>
            <li>Loves web-tech, typography, and cryptography</li>
            <li>Dr. Pepper enjoyer</li>
            <SkillIcons class="skillIcons"/>
          </ul>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup>
import Caret from "../icons/caret.vue";
import SkillIcons from "./SkillIcons.vue";
</script>

<script>
export default {
  data() {
    return {
      showExtendedDescription: false,
    };
  },
};
</script>


<style scoped lang="scss">
* {
  --base-delay: 0ms;
}
.paragraphMargin {
  margin-top: 1rem;
}
.slide-enter-active,
.slide-leave-active {
  // transition: all 0.1s !important;
  // animation: slide-fade-in-up 0.2s ease;

  // transition: all 0.9s;
  // max-height: 300px;
  // overflow: hidden;

  animation: slideOut 0.8s ease;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  // animation: slide-fade-in-down 0.2s ease;

  //   transition: all 0.9s;
  // opacity: 0;
  // max-height: 0px;

  animation: slideIn 0.8s ease; 
  overflow: hidden;
}

@keyframes slideOut {
  from {
    opacity: 0;
    max-height: 0px;
    filter:blur(15px);
  }
  to {
    opacity: 1;
    max-height: 240px;
    filter: none;
  }
}


@keyframes slideIn {
  from {
    opacity: 1;
    max-height: 240px;
    filter: none;
  }
  to {
    opacity: 0;
    max-height: 0px;
    filter:blur(15px);
  }
}


.skillButton {
  animation-name: fade-in-down-better;
  animation-duration: 800ms;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: backwards;
  animation-play-state: running;
  animation-delay: calc(var(--base-delay) + 1600ms); 

  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(19, 19, 21) none repeat scroll 0% 0%;
  border: 1px solid rgb(34, 35, 37);
  padding: 0px 16px;
  border-radius: 32px;
  height: 32px;
  max-width: 128px;
  
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none; 

  transition: 0.2s ease;

    margin-top: 1rem;
    color: #909090;
    cursor: default;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;

    &:hover {
        background: rgb(28, 29, 31) none repeat scroll 0% 0%;
        border-color: rgb(49, 48, 53);

        color: #eeeeee;

        .caret {
          fill: #eeeeee;
        }
    }
}

.caret {
  width: 16px;
  height: 16px;
  fill: #909090;
}

.caretActive {
  transform: rotate(90deg);
  fill: #eeeeee;
}

.introduction {
  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
  height: 100vh;
  flex: 1;

  flex-shrink: 2;
  align-items: center;
}

.introduction:hover { overflow-y: auto; }
.introduction::-webkit-scrollbar { width: 0 !important; display: none !important; }

.introductionWrapper {
  margin: 2rem;
}

.title {
  animation-name: fade-in-up-better;
  animation-duration: 800ms;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: backwards;
  animation-play-state: running;
  animation-delay: calc(var(--base-delay) + 150ms); 
  font-size: 64px;
  font-weight: bolder;
  white-space: nowrap;
}

.titleGradient {
  background: linear-gradient(106.62deg, rgb(232, 78, 56) 6.68%, rgb(186, 44, 184) 82.69%) repeat scroll 0% 0%;

  // animation-name: titleGradientSwitch;
  // animation-duration: 2000ms;
  // animation-timing-function: ease;
  // animation-iteration-count: infinite;
  // animation-direction: normal;
  // animation-play-state: running;

  // animation-name: titleGradientSize;
  // animation-duration: 1500ms;
  // animation-timing-function: ease;
  // animation-iteration-count: infinite;
  // animation-direction: normal;
  // animation-play-state: running;

  box-decoration-break: clone;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: unset;
}

// @keyframes titleGradientSize {
//   0% { background-size: 100%; }
//   50% { background-size: 200% }
//   100% { background-size: 100%;}
// }

// @keyframes titleGradientSwitch {
//   0% {
//     background: linear-gradient(106.62deg, rgb(232, 78, 56) 6.68%, rgb(186, 44, 184) 82.69%) repeat scroll 0% 0%;
//     box-decoration-break: clone;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     color: unset;
//   }

//   50% {
//     background: linear-gradient(106.62deg, rgb(56, 185, 232) 6.68%,rgb(89, 44, 186) 82.69%) repeat scroll 0% 0%;
//     box-decoration-break: clone;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     color: unset;
//   }
  
//   100% {
//     background: linear-gradient(106.62deg, rgb(56, 232, 132) 6.68%,rgb(44, 136, 186) 82.69%) repeat scroll 0% 0%;
//     box-decoration-break: clone;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     color: unset;
//   }
// }

.description {
  max-width: 500px;
}

.description._1 {
  animation-name: fade-in-up-better;
  animation-duration: 800ms;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: backwards;
  animation-play-state: running;
  animation-delay: calc(var(--base-delay) + 600ms); 
}

.description._2 {
  animation-name: fade-in-up-better;
  animation-duration: 800ms;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: backwards;
  animation-play-state: running;
  animation-delay: calc(var(--base-delay) + 700ms); 
}

.extendedDescription {
  display: flex;
  max-width: 500px;
  word-wrap: break-word;

  flex-direction: column;

  & > ul > li {
    margin-top: 0.5rem;
  }
}

.skillIcons {
    margin-top: 0.5rem;
    object-fit: contain;
    width: 100%;
}

.subtitle {
  animation-name: fade-in-up-better;
  animation-duration: 800ms;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: backwards;
  animation-play-state: running;
  font-size: 20px;
  color: #909090;
} 

// .subtitle._1 {
//   animation: shine 0.5s ease-in-out;
//   animation-duration: 1s;
// }

// .subtitle._2 {
//   animation: shine 0.5s ease-in-out;
//   animation-delay: 1s;
// }

// .subtitle._3 {
//   animation: shine 0.5s ease-in-out;
//   animation-delay: 2s;
// }

.subtitle._1 {
  animation-delay: calc(var(--base-delay) + 350ms); 
}

.subtitle._2 {
  animation-delay: calc(var(--base-delay) + 375ms); 
}

.subtitle._3 {
  animation-delay: calc(var(--base-delay) + 400ms); 
}

.subtitles {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

@keyframes shine {
  from {
    color: #909090;
  }
  to {
    color: white;
  }
}

@keyframes fade-in-up-better {
 from {
  opacity:0;
  -webkit-transform:translateY(20px);
  -ms-transform:translateY(20px);
  transform:translateY(20px);
 }
 to {
  opacity:1;
  -webkit-transform:none;
  -ms-transform:none;
  transform:none;
 }
}

@keyframes fade-in-down-better {
 from {
  opacity:0;
  -webkit-transform:translateY(-20px);
  -ms-transform:translateY(-20px);
  transform:translateY(-20px);
 }
 to {
  opacity:1;
  -webkit-transform:none;
  -ms-transform:none;
  transform:none;
 }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-fade-in-up {
  from {
    opacity: 0;
    transform: translateY(-16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-fade-in-down {
  from {
    opacity: 1;
    transform: translateY(0px);
  }

  to {
    opacity: 0;
    transform: translateY(-16px);
  }
}

// .scrolling-words-container {
//     display: flex;
//     align-items: center;
//     font-size: 2rem;
//     font-weight: 600;
// }

// .scrolling-words-box {
//   height: 3rem;
//   overflow: hidden;

//   ul {
//     animation: scrollUp 4s infinite;
//     li {
//       display: flex;
//       align-items: center;
//       justify-content: flex-end;
//       height: 3rem;
//       list-style: none;
//     }
//   }
// }

// $item-count: 5;

// @keyframes scrollUp {
//   @for $i from 1 through ($item-count - 1) {
//     #{($i * 25) - 10%}, #{$i * 25%} {
//       transform: translateY((-100% / $item-count) * $i);
//     }
//   }
// }
</style>