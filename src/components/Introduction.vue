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
  </div>
  <img class="hidden" src="../assets/img/ferologo.svg">
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