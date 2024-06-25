import * as THREE from 'three';
//create scene and camera
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('app').appendChild(renderer.domElement)

// Create a geometry (a cube in this case)
const geometry = new THREE.BoxGeometry();
const  material = new THREE.MeshPhongMaterial({color: 0x00ff00});
const cube = new THREE.MESH(geometry, material);
scene.add(cube);


// create point of light

