
import * as THREE from 'three';

//* Инициализация сцены START
const scene = new THREE.Scene();
//* Инициализация сцены END


//* Добавление объектов в сцену START
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({color: "#54cdfc"});

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
);

scene.add(cubeMesh);
//* Добавление объектов в сцену END


//* Инициализация камеры START
const camera = new THREE.PerspectiveCamera(
  75,
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
renderer.render(scene, camera);

//* Инициализация отрисовки END