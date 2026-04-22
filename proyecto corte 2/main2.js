import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const contenedor= document.getElementById('adn');
const W = contenedor.clientWidth;
const H = contenedor.clientHeight;


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 60, W / H, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(W,H);
renderer.setAnimationLoop( animate );
contenedor.appendChild( renderer.domElement );

////Luces
const light0 = new THREE.AmbientLight( 0x404040, 700 ); // soft white light
scene.add( light0 );

//Geometrias

const loaderadn = new GLTFLoader();

let ADN = null; 

loaderadn.load('adn/source/ADN.glb', function (gltf) {

    ADN = gltf.scene;

    ADN.scale.set(10, 10, 10);

    ADN.position.set(0, 0, 0);

    scene.add(ADN);

});

//Camara
camera.position.z = 15;


function animate( time ) {
    if (ADN) ADN.rotation.y = time / 1000;
    renderer.render( scene, camera );

}