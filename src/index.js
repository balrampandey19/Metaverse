console.log("HI my name in Balram Pandey")

// Decleration of a new scene with Three.js
const scene = new THREE.Scene(); 
scene.background = new THREE.Color("#bfd1e5")

// Camera and renderer configuration 


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(renderer.domElement);
renderer.render( scene, camera );