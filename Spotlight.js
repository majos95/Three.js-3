class Spotlight{
	constructor(x, y, z){'use strict';
		this.spotlightBase = new THREE.Group();

		this.cone = new THREE.Mesh();
		this.sphereMesh = null;
		this.coneMesh = null;

		this.build(x,y,z);
	}

	build(x, y, z){'use strict';
		var colorSphere = 0xaeb0af;
		var colorCone = 0x6d7075;
		
		var radius = 0.4;
		var segments = 15;
		
		this.buildSphere(x, y, z, radius , segments, colorSphere);
		this.buildCone(x, y, z, radius, segments, colorCone);
	
	}


	buildSphere(x, y, z, radius, segments, color){'use strict';
		var geometry, material;

		geometry = new THREE.SphereGeometry(radius, segments, segments);
		material = new THREE.MeshPhongMaterial({ color: color });
		this.sphereMesh = new THREE.Mesh(geometry, material);

		this.spotlightBase.position.set(x,y,z);
		this.spotlightBase.add(this.sphereMesh);
		this.sphereMesh.add(this.cone);

		this.sphereMesh.position.set(0,0,0);
	}

	buildCone(x, y, z, radius, segments, color){'use strict';
		var  geometry, material;

		geometry = new THREE.ConeGeometry(radius*1.5, radius*2, segments);
		material = new THREE.MeshPhongMaterial({ color: color });
		this.coneMesh = new THREE.Mesh(geometry,material);

		this.coneMesh.position.set(0,0.75*radius,0);
		this.cone.add(this.coneMesh);
	}


	rotateSpotlightX(angle){'use strict';
		this.spotlightBase.rotateX(angle);
	}

	rotateSpotlightZ(angle){'use strict';
		this.spotlightBase.rotateZ(angle);
	}
	

	changeMaterial(index){'use strict';
 		this.spotlightBase.material = this.materials[index];
 	}

	getSpotlight(){'use strict';
		return this.spotlightBase;
	}
}