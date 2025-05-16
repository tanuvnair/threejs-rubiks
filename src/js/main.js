import * as THREE from "three";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

// Creating a cube
const cube_geometry = new THREE.BoxGeometry(1, 1, 1, 1);
const cube_material = new THREE.MeshPhongMaterial({ color: 0x2300ff });
const cube = new THREE.Mesh(cube_geometry, cube_material);
scene.add(cube);
camera.position.z = 10;

// Creating light
const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 10);
scene.add(light);

function animate() {
  renderer.render(scene, camera);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}
renderer.setAnimationLoop(animate);
