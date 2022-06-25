<template>
  <div class="container">
    <div class="subtitles">
      <div class="subtitle _1">Artist</div>
      <div class="subtitle _2">Designer</div>
      <div class="subtitle _3">Developer</div>
    </div>
    <div class="title">Evan Song</div>

    <div class="description">
      I am an experienced designer and developer. I build effective interface
      systems and UIs for high-demand products.
    </div>
    <!-- <a href="asdfasdf" class="cta-button">buttttttonnnnnn
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="arrowIcon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          fill="currentColor"
          d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
        ></path>
      </svg>
    </a> -->
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
  height: 100vh;
}

.title {
  font-size: 64px;
  font-weight: bolder;

  margin-left: 128px;
}

.description {
  margin-left: 128px;
  max-width: 400px;
}

.cta-button {
  margin-left: 128px;
  font-size: 1.25rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  color: black;

  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  user-select: none;
  background: white;
  border: 0;
  border-radius: 1rem;
  appearance: none;
  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px !important;

  text-decoration: none;
}

.cta-button:hover {
  .arrowIconStem {
      transform: translateX(2px);
  }
}

.arrowIcon {
  transition: transform 0.2s;
  transform: translateX(0);
  width: 1em;
  height: 1em;
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}

.arrowIconStem {
  stroke-dasharray: 10;
  stroke-dashoffset: 10;
  transition: stroke-dashoffset 0.2s;
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
  animation-delay: 0.4s;
}

.subtitle._3 {
  animation-delay: 0.8s;
}

.subtitles {
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-left: 128px;
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
    transform: translateY(-16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
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