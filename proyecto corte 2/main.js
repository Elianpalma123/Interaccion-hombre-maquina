import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const contenedor= document.getElementById('escena');
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

const geometry0 = new THREE.SphereGeometry( 2, 32, 16 );
const geometry1 = new THREE.SphereGeometry( 2, 32, 16 );


const material0 = new THREE.MeshBasicMaterial( { color: 0xFFD000 } );
const material1 = new THREE.MeshBasicMaterial( { color: 0xA11500} );
const material2 = new THREE.MeshBasicMaterial( { color: 0x02C717} );

const sol = new THREE.Mesh( geometry0, material0 );
const planeta = new THREE.Mesh(geometry1, material1);
const planeta2 = new THREE.Mesh(geometry1, material2);

scene.add( sol );
scene.add(planeta);
scene.add(planeta2);

//Camara
camera.position.z = 15;

//scroll


addEventListener("click", (event) => 
{
  
  const randomColor = Math.random() * 0xffffff;

  sol.material.color.set(randomColor);

  const randomColor2 = Math.random() * 0xffffff;

  planeta.material.color.set(randomColor2);

  const randomColor3 = Math.random() * 0xffffff;

  planeta2.material.color.set(randomColor3);

})

function animate( time ) {

  //  Figura1.rotation.x = time / 2000;
  //  Figura1.rotation.y = time / 1000;
    planeta.position.x = sol.position.x + (10*Math.sin(time*0.001));
    planeta.position.y = sol.position.y + (10*Math.cos(time*0.001));

    planeta2.position.x = sol.position.x + (15*Math.cos(time*0.002));
    planeta2.position.y = sol.position.y + (15*Math.sin(time*0.002));

    renderer.render( scene, camera );

}
