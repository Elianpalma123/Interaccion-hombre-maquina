import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const contenedor= document.getElementById('cabaio');
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
const geometry = new THREE.CapsuleGeometry( 4, 5, 4, 8, 1 );
const geometry1 = new THREE.CylinderGeometry( 1, 1, 10, 32 );
const geometry2 = new THREE.SphereGeometry( 4, 32, 16 );
const geometry3 = new THREE.CapsuleGeometry( 3, 4, 4, 8, 1 );
const geometry4 = new THREE.ConeGeometry( 1.5, 7, 10 );
const geometry5 = new THREE.TetrahedronGeometry();
const geometry6 = new THREE.SphereGeometry( 1, 10, 16 );

const material = new THREE.MeshBasicMaterial( { color: 0xBD9437} );
const balnco = new THREE.MeshBasicMaterial( { color: 0xFFFFFF} );


const capsule = new THREE.Mesh( geometry, material );
const pata1 = new THREE.Mesh( geometry1, material );
const pata2 = new THREE.Mesh( geometry1, material );
const pata3 = new THREE.Mesh( geometry1, material );
const pata4 = new THREE.Mesh( geometry1, material );
const cabeza = new THREE.Mesh( geometry2, material );
const boca = new THREE.Mesh( geometry3, material );
const oreja1 = new THREE.Mesh( geometry4, material );
const oreja2 = new THREE.Mesh( geometry4, material );
const cola = new THREE.Mesh( geometry5, material );
const ojo1 = new THREE.Mesh( geometry6, balnco );
const ojo2 = new THREE.Mesh( geometry6, balnco );


scene.add( capsule );
capsule.rotation.z = Math.PI / 2;

scene.add( pata1 );
pata1.position.set(2, -3, 3);
scene.add( pata2 );
pata2.position.set(-3, -3, -3);
scene.add( pata3 );
pata3.position.set(2, -3, -3);
scene.add( pata4 );
pata4.position.set(-3, -3, 3);

scene.add( cabeza );
cabeza.position.set(5, 6, 0);

scene.add( boca );
boca.position.set(7, 6, 0);
boca.rotation.z = Math.PI / 2;

scene.add( oreja1 );
oreja1.position.set(4, 9, -2.5);
scene.add( oreja2 );
oreja2.position.set(4, 9, 2.5);

scene.add( cola );
cola.position.set(-5, 4, 0);
cola.rotation.z = Math.PI / 2;

scene.add( ojo1 );
ojo1.position.set(7, 7, -3);
scene.add( ojo2 );
ojo2.position.set(7, 7, 3);

//Camara
camera.position.z = 25;

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();


function animate( time ) {

    

    controls.update();
    renderer.render( scene, camera );

}