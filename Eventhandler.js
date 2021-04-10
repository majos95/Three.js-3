var spotlightIntensity = 3;

class EventHandler{
	constructor(){'use strict';
	}

	onResize(){ 'use strict';
    	if(currentCamera != cameraPainting){
	      this.renderer.setSize(window.innerWidth, window.innerHeight);

	      if (window.innerHeight > 0 && window.innerWidth > 0) {
	          this.currentCamera.aspect = window.innerWidth / window.innerHeight;
	          this.currentCamera.updateProjectionMatrix();
      }
    } else{

		var new_aspect = window.innerHeight/window.innerWidth;

		currentCamera.top = wallSize/4 + 10*new_aspect;
		currentCamera.bottom = wallSize/4 - 10*new_aspect;

		renderer.setSize( window.innerWidth,  window.innerHeight);
      	currentCamera.updateProjectionMatrix();

    }
  	}

  	onKeyDown(event){ 'use strict';
	  switch(event.keyCode){
	    case 53 ://'5' camara perspectiva sobre a cena
	      	fieldPerspective = true;
	     	break;

	    case 54: //'6' camara ortografica centrada no quadro
	    	paintingOrtho = true;
	    	break;

	    case 81: //'q' desligar luz direcional
	    	directional = !directional;
	    	break;

	    case 87: //"W" muda para basic
	    	if((lastMaterial == "Phong" || lastMaterial == "Lambert" ) && !isBasic){
				scene.traverse(function (node) {
	            	if (node instanceof THREE.Mesh) {
	            		node.material.dispose();
	            		if(node.material.vertexColors){
	            			node.material = new THREE.MeshBasicMaterial({vertexColors: THREE.FaceColors});
	            		} else{
	            			node.material = new THREE.MeshBasicMaterial({color : node.material.color});
	            		}
	              	}});
				isBasic = !isBasic;
	    	} else if(isBasic) {
	    		scene.traverse(function (node) {
	            	if (node instanceof THREE.Mesh) {
	            		node.material.dispose();
	            		if(lastMaterial == "Phong"){
	            			if(node.material.vertexColors){
	            			node.material = new THREE.MeshPhongMaterial({vertexColors: THREE.FaceColors, shininess : 50});
	            		} else{
	            			node.material = new THREE.MeshPhongMaterial({color : node.material.color, shininess : 50});
	            		}} else if (lastMaterial == "Lambert"){
	            			if(node.material.vertexColors){
		            			node.material = new THREE.MeshLambertMaterial({vertexColors: THREE.FaceColors});
		            		} else{
		            			node.material = new THREE.MeshLambertMaterial({color : node.material.color});
		            		}
	            		}
	              }});
	    		isBasic = !isBasic;
	    	}
	    	break;

	    case 69: //E alterna entre Lambert/Phong
	   		if(!isBasic && lastMaterial=="Phong"){
	   			scene.traverse(function (node) {
	            	if (node instanceof THREE.Mesh) {
	            		node.material.dispose();
	            		if(node.material.vertexColors){
	            			node.material = new THREE.MeshLambertMaterial({vertexColors: THREE.FaceColors});
	            		} else{
	            			node.material = new THREE.MeshLambertMaterial({color : node.material.color});
	            		}
	              }});
	   			lastMaterial = "Lambert";
	   			break;
	   		};

   			if(!isBasic && lastMaterial=="Lambert"){
   			scene.traverse(function (node) {
            	if (node instanceof THREE.Mesh) {
            		node.material.dispose();
            		if(node.material.vertexColors){
            			node.material = new THREE.MeshPhongMaterial({vertexColors: THREE.FaceColors, shininess : 50});
            		} else{
            			node.material = new THREE.MeshPhongMaterial({color : node.material.color, shininess : 50});
            		}
              }});
   			lastMaterial = "Phong";
   			};
		break;
	   }
	 }

	onKeyUp = function(event){ 'use strict';
    switch(event.keyCode){
    	 case 53 ://'5' camara perspectiva sobre a cena
    	 	currentCamera = cameraField;
    	 	currentCamera.updateProjectionMatrix();
    	 	currentCamera.lookAt(scene.position);
	      	fieldPerspective = false;
	     	break;

	    case 54: //'6' camara ortografica centrada no quadro
	    	currentCamera = cameraPainting;
    	 	currentCamera.updateProjectionMatrix();
    	 	currentCamera.lookAt(scene.position);
	    	paintingOrtho = false;
	    	break;

	    case 81: //'q' desligar luz direcional
	    	if (directional){
	    		directionalLight.intensity = 1;
	    	} else{
	    		directionalLight.intensity = 0;
	    	}
	    	break;

	    case 49:
	    	if(spotLight1.intensity != 0){
	    		spotLight1.intensity = 0;

	    	} else {
	    		spotLight1.intensity = spotlightIntensity;
	    	}
	    	break;

	    case 50:
	    	if(spotLight2.intensity != 0){
	    		spotLight2.intensity = 0;

	    	} else {
	    		spotLight2.intensity = spotlightIntensity;
	    	}
	    	break;

	    case 51:
	    	if(spotLight3.intensity != 0){
	    		spotLight3.intensity = 0;

	    	} else {
	    		spotLight3.intensity = spotlightIntensity;
	    	}
	    	break;

	    case 52:
	    	if(spotLight4.intensity != 0){
	    		spotLight4.intensity = 0;

	    	} else {
	    		spotLight4.intensity = spotlightIntensity;
	    	}
	    	break;

    	}
	}
}
