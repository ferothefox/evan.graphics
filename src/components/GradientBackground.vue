<template>
<div class="background">
        <div class="noise"></div>
    <div class="gradientBackground">

        <div class="bg-circle _1" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
            rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
        </div>

        <div class="bg-circle _2"
            style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
        </div>

        <div class="bg-circle _3"
            style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
        </div>

        <div class="bg-circle _4"
            style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
        </div>

        <div class="bg-circle _5"
            style="transform: translate3d(0px, 0px, 0px) scale3d(2, 2, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
        </div>

        <div class="bg-circle _6"
            style="transform: translate3d(0px, 0px, 0px) scale3d(2, 2, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
        </div>

    </div>
</div>
</template>

<style scoped>
    .gradientBackground {
        position: fixed;
        left: 0%;
        top: 0%;
        right: 0%;
        bottom: 0%;
        z-index: -1;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        opacity: 0.25;
        filter: blur(12.5rem);
        mix-blend-mode: hard-light;
    }

    .bg-circle {
        position: absolute;
        left: 0%;
        top: 0%;
        right: auto;
        bottom: auto;
        width: 30vw;
        height: 30vw;
        border-radius: 100%;
        background-color: #455268;
    }

    .bg-circle._1 {
        width: 40vw;
        height: 40vw;
        margin-top: -16%;
        margin-left: -16%;
        border-radius: 20%;
        background-color: #b1b1b1;
        opacity: 1;
    }

    .bg-circle._2 {
        margin-top: -20%;
        border-radius: 40%;
        background-color: #969696;
        opacity: 0.5;
    }

    .bg-circle._3 {
        width: 40vw;
        height: 40vw;
        margin-top: -12%;
        margin-left: 52%;
        background-color: #dadada;
    }

    .bg-circle._4 {
        left: auto;
        right: 0rem;
        width: 60vw;
        height: 60vw;
        margin-top: -32%;
        margin-right: -10%;
        background-color: #666;

    }

    .bg-circle._5 {
        left: auto;
        right: 0%;
        bottom: 0%;
        margin-top: 24%;
        margin-right: -8%;

        background-color: #6b6b6b;
    }

    .bg-circle._6 {
        left: auto;
        right: 0%;
        bottom: 0%;
        width: 40vw;
        height: 40vw;
        margin-top: 35%;
        margin-right: -16%;
        margin-bottom: -20%;

        background-color: #acacac;

    }

    .noise {
        overflow: hidden;
    }

    .noise {
        position: fixed;
        left: 0%;
        top: 0%;
        right: 0%;
        bottom: 0%;
        z-index: -1;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
    }

    @keyframes noiseAnimation {
        0% {
            transform: translate(0)
        }

        10% {
            transform: translate(-5%, -5%)
        }

        20% {
            transform: translate(-10%, 5%)
        }

        30% {
            transform: translate(5%, -10%)
        }

        40% {
            transform: translate(-5%, 15%)
        }

        50% {
            transform: translate(-10%, 5%)
        }

        60% {
            transform: translate(15%)
        }

        70% {
            transform: translateY(10%)
        }

        80% {
            transform: translate(-15%)
        }

        90% {
            transform: translate(10%, 5%)
        }

        to {
            transform: translate(5%)
        }
    }

    @keyframes colorRotate {
        from {
            background-color: #9c9cc4;
        }

        10% {
            background-color: #799bb1;
        }

        50% {
            background-color: #8dd18d;
        }

        75% {
            background-color: #c386a5;
        }

        100% {
            background-color: #8989c7;
        }
    }

    .bg-circle._1 {
        animation: scale1 4s infinite alternate;
    }

    .bg-circle._2 {
        animation: scale2 4s infinite alternate;
        animation-delay: 0.9s;
    }

    .bg-circle._3 {
        animation: scale3 4s infinite alternate;
    }

    .bg-circle._4 {
        animation: scale4 4s infinite alternate;
    }

    .bg-circle._5 {
        animation: scale5 4s infinite alternate;
        animation-delay: 12s;
    }

    .bg-circle._6 {
        animation: scale6 4s infinite alternate;
    }

    @keyframes scale1 {
        from {
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
        }

        to {
            transform: translate3d(0px, 0px, 0px) scale3d(1.5, 1.7, 1) rotateX(20deg) rotateY(60deg) rotateZ(0deg) skew(0deg);
        }
    }

    @keyframes scale2 {
        from {
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
        }

        to {
            transform: translate3d(0px, 0px, 0px) scale3d(1.5, 2, 1) rotateX(20deg) rotateY(60deg) rotateZ(0deg) skew(0deg);
        }
    }

    @keyframes scale3 {
        from {
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
        }

        to {
            transform: translate3d(0px, 0px, 0px) scale3d(1.5, 1.7, 1) rotateX(20deg) rotateY(60deg) rotateZ(0deg) skew(0deg);
        }
    }

    @keyframes scale4 {
        from {
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
        }

        to {
            transform: translate3d(0px, 0px, 0px) scale3d(1.5, 1.7, 1) rotateX(20deg) rotateY(60deg) rotateZ(0deg) skew(0deg);
        }
    }

    @keyframes scale5 {
        from {
            transform: translate3d(0px, 0px, 0px) scale3d(2, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
        }

        to {
            transform: translate3d(0px, 100px, 0px) scale3d(1.5, 1.7, 1) rotateX(20deg) rotateY(60deg) rotateZ(0deg) skew(0deg);
        }
    }

    @keyframes scale6 {
        from {
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
        }

        to {
            transform: translate3d(0px, 0px, 0px) scale3d(1.5, 1.7, 1) rotateX(20deg) rotateY(60deg) rotateZ(0deg) skew(0deg);
        }
    }

    .noise:after {
        content: "";
        pointer-events: none;
        will-change: transform;
        animation: noiseAnimation 1s steps(4) infinite;
        opacity: 0.5;
        background-image: url("https://assets.website-files.com/61951265d7110a723766c703/61951306d6dbb6562f844696_Noise.png");
        width: 200%;
        height: 200%;
        display: block;
        position: absolute;
        top: -50%;
        left: -50%;
    }
</style>