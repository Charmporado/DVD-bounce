// Start scene

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 800);
document.body.appendChild(renderer.domElement);

const logoGeo = new THREE.BoxGeometry(0.3, 0.2);
const material = new THREE.MeshBasicMaterial({ color: 0xd433ff });
const logo = new THREE.Mesh(logoGeo, material);
scene.add(logo);

camera.position.z = 15;

// variables
let xpos = 0.0098;
let ypos = 0.0076;
let counter = 0;
logo.position.x = 0;
logo.position.y = 0;

// bounce bounce boing

function move() {
    requestAnimationFrame(move);

    logo.position.x += xpos;
    logo.position.y += ypos;

    if (logo.position.x > 0.85 && counter < 9) {
        xpos = -0.0098;
        logo.scale.x -= 0.2;
        logo.scale.y -= 0.2;
        logo.material.color.setRGB(1, 0.83, 0.55);
        counter++;
    }

    if (logo.position.x < -0.85 && counter < 9) {
        xpos = 0.0098;
        logo.scale.x -= 0.2;
        logo.scale.y -= 0.2;
        logo.material.color.setRGB(0, 1, 0.55);
        counter++;
    }
    if (logo.position.y > 0.9 && counter < 9) {
        ypos = -0.0076;
        logo.scale.x -= 0.2;
        logo.scale.y -= 0.2;
        logo.material.color.setRGB(0.78, 0.83, 1);
        counter++;
    }

    if (logo.position.y < -0.9 && counter < 9) {
        ypos = 0.0076;
        logo.scale.x -= 0.2;
        logo.scale.y -= 0.2;
        logo.material.color.setRGB(0.61, 0.83, 0.55);
        counter++;
    }
    // If logo size makes logo invisible, stay invisible

    if (logo.scale.x < 0 || logo.scale.y < 0) {
        logo.visible = false;
    }

    // If bounced more than 8 times, make logo invisible
    
    if (counter > 8) {
        if (logo.scale.x <= 0 && logo.scale.y <= 0) {
            logo.visible = false;
        }
    }
    renderer.render(scene, camera);
}

move();