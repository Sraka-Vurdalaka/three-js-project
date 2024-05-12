
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//* Инициализация сцены START
const scene = new THREE.Scene();
//* Инициализация сцены END


//* Добавление объектов в сцену START
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "#54cdfc" });

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial,

);

scene.add(cubeMesh);
//* Добавление объектов в сцену END


//* Инициализация камеры START
const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  30);


camera.position.z = 5;
scene.add(camera);
//* Инициализация камеры END

//* Инициализация отрисовки START 
const canvas = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});
renderer.setSize(window.innerWidth, window.innerHeight);
//* Инициализация отрисовки END


//*инициализация поворота камеры orbit controls START
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

const renderLoop = () => {
  controls.update();
  renderer.render(scene, camera);  
  window.requestAnimationFrame(renderLoop);
}
renderLoop();
//*инициализация поворота камеры orbit controls END