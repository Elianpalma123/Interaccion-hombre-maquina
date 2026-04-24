import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const contenedor= document.getElementById('galeria-canvas');

const W = contenedor.clientWidth;
const H = contenedor.clientHeight;


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 60, W / H, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(W,H);
renderer.setAnimationLoop( animate );
contenedor.appendChild( renderer.domElement );


////Luces
const light0 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light0 );

//Geometrias

const geometry = new THREE.BoxGeometry( 5, 5, 5 );
const geometry0 = new THREE.BoxGeometry( 2, 7, 2 );
const geometry1 = new THREE.BoxGeometry( 5, 8, 5 );

//Materiales
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

//Figuras
const Cabeza = new THREE.Mesh( geometry, material );
const cuerpo = new THREE.Mesh( geometry1, material );
const brazo1 = new THREE.Mesh( geometry0, material );
const brazo2 = new THREE.Mesh( geometry0, material );
const pierna1 = new THREE.Mesh( geometry0, material );
const pierna2 = new THREE.Mesh( geometry0, material );

//anadir a escena
scene.add( Cabeza );
Cabeza.position.y = 5;
scene.add(cuerpo);
cuerpo.position.y = -2;

scene.add(brazo1);
brazo1.position.y = -2;
brazo1.position.x = 4;

scene.add(brazo2);

brazo2.position.set( -4, -2, 2);
brazo2.rotation.x = Math.PI / 1.5;


scene.add(pierna1);
pierna1.position.set( -2, -9, 2);
pierna1.rotation.x = Math.PI / 1.5;


scene.add(pierna2);
pierna2.position.y = -9;
pierna2.position.x = 2;

//Camara
camera.position.z = 25;
camera.position.x = 10;

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

//scroll


let Valuescroll = 0;
addEventListener('scroll', () => 
{
  Valuescroll = window.scrollY;
  console.log(Valuescroll);
})

function animate( time ) {

//  Figura1.rotation.x = time / 2000;
//  Figura1.rotation.y = time / 1000;
    
    controls.update();
    renderer.render( scene, camera );

}