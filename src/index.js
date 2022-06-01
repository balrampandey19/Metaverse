console.log("HI my name in Balram Pandey")

// Decleration of a new scene with Three.js
const scene = new THREE.Scene(); 
scene.background = new THREE.Color("#bfd1e5")

// Camera and renderer configuration 


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(renderer.domElement);

// Crrating a cube

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );



// Create a cone


const cone_geometry = new THREE.ConeGeometry( 5, 20, 32 );
const cone_material = new THREE.MeshPhongMaterial( {color: 0xed810a} );
const cone = new THREE.Mesh( cone_geometry, cone_material );
cone.position.set(-10,5,0);
scene.add( cone );


// Create cylinder Geometry


const geometry_cyl = new THREE.CylinderGeometry( 5, 5, 20, 32 );
const material_cyl = new THREE.MeshPhongMaterial( {color: 0xbaa019} );
const cylinder = new THREE.Mesh( geometry_cyl, material_cyl );
cylinder.position.set(20,5,0);

scene.add( cylinder );



camera.position.z = 5;

// set up a flat space of the Meta verse

const geometry_space = new THREE.BoxGeometry(100,0.2,50);
const material_space = new THREE.MeshPhongMaterial({color:0xffffff});
const space = new THREE.Mesh(geometry_space,material_space);
scene.add(space);




// Setting the scene light

const ambient_light = new THREE.AmbientLight(0xbda355);
const directional_light = new THREE.DirectionalLight(0xffffff,1);
ambient_light.add(directional_light);
scene.add(ambient_light)





camera.position.set(10,5,40);

function animate() {
    cube.rotation.x += 0.05
    cube.rotation.y += 0.05
    cone.rotation.x += 0.01
    cone.rotation.y += 0.01

    cylinder.rotation.x += 0.01
    cylinder.rotation.y += 0.01
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();



renderer.render( scene, camera );