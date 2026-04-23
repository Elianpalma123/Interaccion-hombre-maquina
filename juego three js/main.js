import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );


////Luces
const light0 = new THREE.AmbientLight( 0x404040,10 );
scene.add( light0 );


const light1 = new THREE.DirectionalLight(0x8CEDFF, 2);
light1.position.set( 8, 17, 2 );

scene.add(light1);

const helper1 = new THREE.DirectionalLightHelper(light1, 5);
scene.add(helper1);

const light2 = new THREE.DirectionalLight(0xff0000, 2);
light2.position.set( -14.9, 20, -2 );

scene.add(light2);
const helper2 = new THREE.DirectionalLightHelper(light2, 5);
scene.add(helper2);


// Textura 
const loader = new THREE.TextureLoader();
const texture = loader.load("https://media.istockphoto.com/id/1180912197/photo/deep-space-high-definition-star-field-background-starry-outer-space-background-texture.jpg?s=170667a&w=0&k=20&c=kcyCp2mEnttCgvaVvEyFTmCDD0Xs3eMehVUut1lxeXk=");
//Geometrias
  //Personaje
const geometry0 = new THREE.CapsuleGeometry( 2.5, 2.5, 10, 18, 4 );
const geometry1 = new THREE.CylinderGeometry( 1, 1, 3.5, 32 );
const geometry2 = new THREE.CapsuleGeometry( 1, 1, 10, 14, 1 );
const geometry3 = new THREE.BoxGeometry( 3, 4, 1.6 );

  //Muerto
const geometry4 = new THREE.SphereGeometry( 2.5, 32, 16, 0, Math.PI * 2,0, Math.PI / 2,); 
const geometry5 = new THREE.CylinderGeometry( 2.5, 2.5, 1.7, 32 );
const geometry6 = new THREE.CylinderGeometry( 1, 1, 2, 32 );
const geometry7 = new THREE.SphereGeometry( 1, 32, 16 );
const geometry10 = new THREE.CircleGeometry( 2, 32 );
  //Mapa
const geometry8 = new THREE.PlaneGeometry( 30, 50 );
const geometry9 = new THREE.PlaneGeometry( 20, 40 );


//Materiales
const ROJO = new THREE.MeshToonMaterial( { color: 0xEB2E00, side: THREE.DoubleSide } );
const MORADO = new THREE.MeshToonMaterial( { color: 0x7100A3} );
const Azul = new THREE.MeshToonMaterial( { color: 0xB8FFFC} );
const Verde = new THREE.MeshToonMaterial( { color: 0x00FF00} );
const MaterialHueso = new THREE.MeshToonMaterial( { color: 0xFFFFF0} );
const MaterialSuelo = new THREE.MeshBasicMaterial( { color: 0x858585, side: THREE.DoubleSide } );
const MaterialPared = new THREE.MeshBasicMaterial( { color: 0x76799C, side: THREE.DoubleSide } );
const MaterialEspacio = new THREE.MeshBasicMaterial({map: texture,side: THREE.DoubleSide});
//Partes
  //Personaje
const Cuerpo = new THREE.Mesh( geometry0, MORADO );
const Pierna1 = new THREE.Mesh( geometry1, MORADO );
const Pierna2 = new THREE.Mesh( geometry1, MORADO );
const gafasOLoQueSea = new THREE.Mesh( geometry2, Azul );
const Maleta = new THREE.Mesh( geometry3, MORADO );
  //Muerto
const Pierna3 = new THREE.Mesh( geometry1, Verde );
const Pierna4 = new THREE.Mesh( geometry1, Verde );
const Cuerpo1 = new THREE.Mesh( geometry4, Verde );
const Cuerpo2 = new THREE.Mesh( geometry5, Verde );
const Hueso1= new THREE.Mesh( geometry6, MaterialHueso );
const Hueso2= new THREE.Mesh( geometry7, MaterialHueso );
const Hueso3= new THREE.Mesh( geometry7, MaterialHueso );
const Sangre= new THREE.Mesh( geometry10, ROJO );
  //Mapa
const Suelo = new THREE.Mesh( geometry8, MaterialSuelo );
const Pared = new THREE.Mesh( geometry8, MaterialPared );
const Espacio = new THREE.Mesh( geometry9, MaterialEspacio );


//Añadir a la escena
  //Personaje
scene.add( Cuerpo );
scene.add( Pierna1 );
Pierna1.position.set( -1.5, -3, 1 );
Pierna1.rotation.x = Math.PI / 1.5;

scene.add( Pierna2 );
Pierna2.position.set( 1.5, -3, 0 );

scene.add( gafasOLoQueSea );
gafasOLoQueSea.position.set( 0, 1.7, 2.2 );
gafasOLoQueSea.rotation.z = Math.PI / 2;

scene.add( Maleta );
Maleta.position.z = -3;
  //Muerto
scene.add( Pierna3 );
Pierna3.position.set( -1.5, -2.5, 10 );
Pierna3.rotation.x = Math.PI / 2.5;
scene.add( Pierna4 );
Pierna4.position.set( 1.5, -2.5, 10 );
Pierna4.rotation.x = Math.PI / 2.5;
scene.add( Cuerpo1 );
Cuerpo1.position.set( 0, -2.3, 12.5 );
Cuerpo1.rotation.x = Math.PI / -2;

scene.add( Cuerpo2 );
Cuerpo2.position.set( 0, -2.3, 13.2 );
Cuerpo2.rotation.x = Math.PI / 2;

scene.add( Hueso1 );
Hueso1.position.set( 0, -2.3, 15 );
Hueso1.rotation.x = Math.PI / 2;

scene.add( Hueso2 );
Hueso2.position.set( -1, -2.3, 16.5 );
scene.add( Hueso3 );
Hueso3.position.set( 1, -2.3, 16.5 );

scene.add( Sangre );
Sangre.position.set( 1, -4.5, 15 );
Sangre.rotation.x = Math.PI / 2;

  //Mapa
scene.add( Suelo );
Suelo.rotation.x = Math.PI / 2; 
Suelo.position.y = -4.7;

scene.add( Pared );
Pared.rotation.y = Math.PI / 2;
Pared.rotation.x = Math.PI / 2;
Pared.position.x = -15;
Pared.position.y = 8;

scene.add(Espacio);
Espacio.rotation.y = Math.PI / 2;
Espacio.rotation.x = Math.PI / 2;
Espacio.position.set( -14.9, 8, 0 );

//Camara

camera.position.x = 20;

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();



function animate( time ) {

	controls.update();
  renderer.render( scene, camera );
}
