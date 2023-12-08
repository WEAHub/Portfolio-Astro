/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />


declare global {
  
  interface Window {
    particlesInit: () => Promise<void>
    particlesLoaded: () => Promise<void>
  } 

}

let particlesInit = window.particlesInit
let particlesLoaded = window.particlesLoaded