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
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


// create point of light
const pointLight =  new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Create ambient Light
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);


function animate () {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;


  renderer.render(scene, camera);
}

animate()
dan_m-stackup-threejs-intro