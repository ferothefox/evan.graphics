<template>
  <div class="container">
    <div class="wrapper">
      <div v-if="!showExtendedDescription" class="subtitles">
        <div class="subtitle _1">Artist</div>
        <div class="subtitle _2">Designer</div>
        <div class="subtitle _3">Developer</div>
      </div>
      <div class="title">Evan Song</div>

      <div v-if="!showExtendedDescription" class="description">
        I am an experienced designer and developer. I build effective UIs and
        graphics for high-demand products and thriving online communities.
      </div>

      <div v-if="!showExtendedDescription" class="description paragraphMargin">
        Take a look at my social media, or email me at <span style="font-family: monospace; font-weight: normal">hi@evan.graphics</span>
      </div>

      <button
        class="skillButton"
        @click="showExtendedDescription = !showExtendedDescription"
      >
        Icebreakers
        <Caret
          class="caret"
          :class="showExtendedDescription ? 'caretActive' : ''"
        />
      </button>

      <Transition name="slide">
        <div class="extendedDescription" v-if="showExtendedDescription">
          <ul>
            <li>Keyboard and audio enthusiast</li>
            <li>Loves web-tech, typography, and cryptography</li>
            <li>Dr. Pepper enjoyer</li>
            <img class="skillIcons" src="https://skillicons.dev/icons?i=js,ts,vue,html,css,wasm,rust,cpp,java,kotlin,gradle,maven,aws,ai,ps,figma,blender,unreal&perline=9">
          </ul>
        </div>
      </Transition>
    </div>
  </div>
  <img class="hidden" src="../assets/img/ferologo.svg" />
</template>

<script setup>
import Caret from "../icons/caret.vue";
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

  animation: slideOut 0.9s ease;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  // animation: slide-fade-in-down 0.2s ease;

  //   transition: all 0.9s;
  // opacity: 0;
  // max-height: 0px;

  animation: slideIn 0.9s ease; 
  overflow: hidden;
}

@keyframes slideOut {
  from {
    opacity: 0;
    max-height: 0px;
  }
  to {
    opacity: 1;
    max-height: 270px;
  }
}


@keyframes slideIn {
  from {
    opacity: 1;
    max-height: 270px;
  }
  to {
    opacity: 0;
    max-height: 0px;
  }
}


.skillButton {
animation: fade-in-up 1s ease-in-out forwards;
 animation-delay: 0.4s;
 opacity: 0;
 transition: 0.2s ease;

  margin-top: 1rem;
  color: #909090;
  cursor: default;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;

  &:hover {
      color: #eeeeee;

      .caret {
        fill: #eeeeee;
      }

      .caretActive {
        fill: #eeeeee;
      }
  }

  width: 100%
}

.caret {
  width: 16px;
  height: 16px;
  fill: #909090;
  transition: 0.2s ease;
}

.caretActive {
  transform: rotate(90deg);
  transition: 0.2s ease;
  
  fill: #eeeeee;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
  height: 100vh;
  flex: 1;

  flex-shrink: 2;
  align-items: center;
}

.wrapper {
  margin: 32px;
}

.title {
  opacity: 0;
  font-size: 64px;
  font-weight: bolder;

  animation: fade-in-up 1s ease-in-out forwards;
  animation-delay: 0.3s;
}

.description {
  opacity: 0;
  max-width: 500px;
  animation: fade-in-up 1s ease-in-out forwards;
  animation-delay: 0.4s;
}

.extendedDescription {
  display: flex;
  max-width: 500px;
  word-wrap: break-word;
  // position: absolute;

  flex-direction: column;

  & > ul > li {
    margin-top: 0.5rem;
  }
}

.skillIcons {
    object-fit: contain;
}

.subtitle {
  animation: fade-in-up 1s ease-in-out forwards;
  opacity: 0;
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
  animation-delay: 0;
}

.subtitle._2 {
  animation-delay: 0.1s;
}

.subtitle._3 {
  animation-delay: 0.2s;
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