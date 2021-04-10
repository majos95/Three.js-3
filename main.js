var camera, scene, renderer, eventHandler;

var room,painting, directionalLight;
var sculpture;

var spotlights = new Array(4);
var spotLight1, spotLight2, spotLight3, spotLight4;

var lastMaterial = "Phong";
var isBasic = false;

var currentCamera, cameraPainting, cameraField;
var paintingOrtho = false, fieldPerspective = false;

var directional = true;

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
var aspect = SCREEN_HEIGHT/SCREEN_WIDTH;

var wallSize = 40;


function createScene(){'use strict';
	scene = new THREE.Scene();
	room = new Room(0,0,0, wallSize);

	scene.add(room.getRoomBody());
	//scene.add(new THREE.AxesHelper(50));

    directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
    directionalLight.position.set(10,3,0);
    scene.add( directionalLight );
  
	painting = new Painting(0, 0, 0, wallSize);
	scene.add(painting.getPainting());

	sculpture = new Sculpture(0, 0, 0, wallSize);
	scene.add(sculpture.getSculpture());

    //Spotlight luz

    spotLight1 = new THREE.SpotLight(0xeb4934, 0, wallSize);
    spotLight1.target = painting.getPainting();
    spotLight1.castShadow = true;
    spotLight1.position.set(wallSize/2 , wallSize/2 -2, wallSize/3 -2);
 
    scene.add(spotLight1.target);
    scene.add(spotLight1);

    spotLight2 = new THREE.SpotLight(0xf5dd42, 0, wallSize);
    spotLight2.target = painting.getPainting();
    spotLight2.castShadow = true;
    spotLight2.position.set(wallSize/2 , wallSize/2 - 2, 2);
   
    scene.add(spotLight2.target);
    scene.add(spotLight2);

    spotLight3 = new THREE.SpotLight(0x9642f5, 0, wallSize);
    spotLight3.target = sculpture.getSculpture();
    spotLight3.castShadow = true;
    spotLight3.position.set(1, wallSize/2 - 3, -wallSize/3);
    scene.add(spotLight3.target);
    scene.add(spotLight3);

    spotLight4 = new THREE.SpotLight(0xf542d4, 0, wallSize);
    spotLight4.target = sculpture.getSculpture();
    spotLight4.castShadow = true;
    spotLight4.position.set(wallSize/3, wallSize/2 - 3, -wallSize/2 + 2);
    scene.add(spotLight4.target);
    scene.add(spotLight4)

    //Positioning spotlights

    spotlights[0] = new Spotlight(wallSize/2, wallSize/2 - 2 , wallSize/3 -2);
    spotlights[0].rotateSpotlightZ(-Math.PI/3);
    scene.add(spotlights[0].getSpotlight());

    spotlights[1] = new Spotlight(wallSize/2 , wallSize/2 - 2, 2);
    spotlights[1].rotateSpotlightZ(-Math.PI/3);
    spotlights[1].rotateSpotlightX(-Math.PI/9);
    scene.add(spotlights[1].getSpotlight());

    spotlights[2] = new Spotlight(1, wallSize/2 - 3, -wallSize/3);
    spotlights[2].rotateSpotlightZ(Math.PI/3);
    spotlights[2].rotateSpotlightX(-Math.PI/9);
    scene.add(spotlights[2].getSpotlight());

    spotlights[3] = new Spotlight( wallSize/3, wallSize/2 - 3, -wallSize/2 +2);
    spotlights[3].rotateSpotlightX(-Math.PI/3);
    spotlights[3].rotateSpotlightZ(-Math.PI/10);
    scene.add(spotlights[3].getSpotlight());

}


function createCameras(){'use strict';
	
	cameraField = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    cameraField.position.x = 40;
    cameraField.position.y = 15;

    cameraPainting = new THREE.OrthographicCamera(-wallSize/2, 0, wallSize/4 + 10*aspect , wallSize/4 - 10*aspect, 1, 1000);
    cameraPainting.position.x = 60;

    currentCamera = cameraField;
    currentCamera.lookAt(scene.position);
}


function render(){'use strict';
	renderer.render(scene, currentCamera);
}


function update(){'use strict';
}

function init(){'use strict';
	renderer = new THREE.WebGLRenderer({antialias: true, fullscreen: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    eventHandler = new EventHandler();

    createScene();
    createCameras();
    render();

    window.addEventListener("keydown", eventHandler.onKeyDown);
    window.addEventListener("keyup", eventHandler.onKeyUp);
    window.addEventListener("resize", eventHandler.onResize);
}


function animate(){'use strict';
	requestAnimationFrame(animate);

  	update();
  	render();
}


