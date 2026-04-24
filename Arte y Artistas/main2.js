import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const contenedor= document.getElementById('about');
const W = contenedor.clientWidth /2;
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

const geometry2 = new THREE.BoxGeometry( 4, 1, 3 );
const geometry = new THREE.BoxGeometry( 7, 2, 3 );
const geometry3 = new THREE.CylinderGeometry( 1, 1, 3, 32 );
const geometry4 = new THREE.TorusGeometry( 7, 1, 16, 100 );



const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const material2 = new THREE.MeshBasicMaterial( { color: 0x636363 } );
const material3 = new THREE.MeshBasicMaterial({color: 0x000FAD});

const cube = new THREE.Mesh( geometry, material );
const cube2 = new THREE.Mesh( geometry2, material );
const cylinder = new THREE.Mesh( geometry3, material2 );
const cylinder2 = new THREE.Mesh( geometry3, material2 );
const torus = new THREE.Mesh( geometry4, material3 );


scene.add( cube );
scene.add(cube2);
cube2.position.y = 1.5;
scene.add( cylinder );
cylinder.position.y= -1;
cylinder.position.x = 2;
cylinder.rotation.x = Math.PI / 2;
scene.add( cylinder2 );
cylinder2.position.y= -1;
cylinder2.position.x = -2;
cylinder2.rotation.x = Math.PI / 2;
scene.add( torus );


//Camara
camera.position.z = 15;





function animate( time ) {
  torus.rotation.y = time * 0.001;
    
    renderer.render( scene, camera );

}