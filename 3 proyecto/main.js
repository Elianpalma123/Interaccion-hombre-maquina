import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165/build/three.module.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set(0, 1, 5);

const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);

document.body.appendChild(renderer.domElement);

//Luz
const light0 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light0);

const light1 = new THREE.DirectionalLight(0xffffff, 2);
light1.position.set(5, 5, 5);


scene.add(light1);
scene.background = new THREE.Color(0x111111);

//
const geometry0 = new THREE.PlaneGeometry(50, 50);
const geometry1 = new THREE.SphereGeometry(0.4, 32, 32);

const geometry2 = new THREE.BoxGeometry(0.4, 0.25, 1);
const geometry3 = new THREE.BoxGeometry(0.15, 0.15, 0.8);

//material
const materialFloor = new THREE.MeshStandardMaterial({color: 0x222222});
const materialTarget = new THREE.MeshStandardMaterial({color: 0xD12A2A});
const materialGun = new THREE.MeshStandardMaterial({color: 0x919191});
const materialBarrel = new THREE.MeshStandardMaterial({color: 0x000000});


const piso = new THREE.Mesh(geometry0,materialFloor);

const objetivo = new THREE.Mesh(geometry1,materialTarget);

const arma1 = new THREE.Mesh(geometry2,materialGun);

const arma2 = new THREE.Mesh(geometry3,materialBarrel);

//escena
scene.add(piso);
piso.rotation.x = -Math.PI / 2;
piso.position.y = -2;

scene.add(objetivo);

camera.add(arma1);

arma1.position.set(0.6, -0.6, -1);

arma1.add(arma2);
arma2.position.z = -0.8;

scene.add(camera);

//funciones

const raycaster = new THREE.Raycaster();

let score = 0;

const scoreText = document.querySelector(".puntos");

function cambioObjetivo() {

    objetivo.position.x = (Math.random() - 0.5) * 8;

    objetivo.position.y = Math.random() * 2;

    objetivo.position.z = -(Math.random() * 15);

}

cambioObjetivo();

let yaw = 0;
let pitch = 0;

document.body.addEventListener("click", () => {

    document.body.requestPointerLock();

});

document.addEventListener("mousemove", (event) => {

    if (document.pointerLockElement === document.body) {

        yaw -= event.movementX * 0.002;

        pitch -= event.movementY * 0.002;

        pitch = Math.max(
            -1.2,
            Math.min(1.2, pitch)
        );

    }

});

window.addEventListener("mousedown", () => {

    raycaster.setFromCamera(
        new THREE.Vector2(0, 0),
        camera
    );

    const hits = raycaster.intersectObject(objetivo);

    if (hits.length > 0) {

        score++;

        scoreText.innerHTML = `Puntos: ${score}`;

        cambioObjetivo();

    }

});

function animate() {

    camera.rotation.order = "YXZ";

    camera.rotation.y = yaw;

    camera.rotation.x = pitch;

    objetivo.rotation.y += 0.02;

    renderer.render(scene, camera);

}

window.addEventListener("resize", () => {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});