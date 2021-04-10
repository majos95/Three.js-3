class Sculpture{
	constructor(x, y, z, wallSize){
		this.sculpture = new THREE.Group();

		this.build(x, y, z, wallSize);
	}


	build(x, y, z, wallSize){
		var colorBase = 0x99978e;
		//platform
		this.buildParallelepiped(x + wallSize/4, y +3.5 , z - wallSize/4, 5, wallSize/6, 5, colorBase);

		this.buildIcosahedron(wallSize/4, 8.5, -wallSize/4);
		
	}

	buildParallelepiped(x, y, z, geoW, geoH, geoD, color){ 'use strict';
	    var mesh, geometry, material;

	    geometry = new THREE.CubeGeometry(geoW, geoH, geoD);
	    material = new THREE.MeshPhongMaterial({ color: color }); 
	    mesh = new THREE.Mesh(geometry, material);

	    mesh.position.set(x, y, z);
	    this.sculpture.add(mesh);

 	}

 	buildIcosahedron(x, y, z){'use strict';
	 	var geometry, material, mesh;

	 	geometry = this.PLEASE_GIMME_ICOSAEDRO();
	 	material = new THREE.MeshPhongMaterial({vertexColors: THREE.FaceColors});
	 	mesh = new THREE.Mesh(geometry,material);

	 	mesh.position.set(x,y,z);
	 	this.sculpture.add(mesh);
 	}

 	

	PLEASE_GIMME_ICOSAEDRO(){
	var geo = new THREE.Geometry();
		var t = ( 1 + Math.sqrt( 5 ) ) / 2;

		var vertices = [
			new THREE.Vector3(-1, t, 0), 
			new THREE.Vector3(1, t, 0), 
			new THREE.Vector3(- 1, - t, 0), 
			new THREE.Vector3(1, - t, 0),
			new THREE.Vector3(0, - 1, t), 
			new THREE.Vector3(0, 1, t), 
			new THREE.Vector3(0, - 1, - t), 
			new THREE.Vector3(0, 1, - t),
			new THREE.Vector3(t, 0, - 1),
			new THREE.Vector3(t, 0, 1), 
			new THREE.Vector3(- t, 0, - 1), 
			new THREE.Vector3(- t, 0, 1)
		];

		for(var i=0; i<12 ;i++){
			geo.vertices.push(vertices[i]);
		}

		//build the triangles counterclockwise!!!!!!!!! i am crying cause i cant :(

		geo.faces.push(new THREE.Face3(0,11,5));
		geo.faces.push(new THREE.Face3(0,5,1));
		geo.faces.push(new THREE.Face3(0,1,7));
		geo.faces.push(new THREE.Face3(0,7,10));
		geo.faces.push(new THREE.Face3(0,10,11));
		geo.faces.push(new THREE.Face3(1,5, 9));
		geo.faces.push(new THREE.Face3(5,11,4));
		geo.faces.push(new THREE.Face3(11,10,2));
		geo.faces.push(new THREE.Face3(10,7,6));
		geo.faces.push(new THREE.Face3(7,1 ,8));
		geo.faces.push(new THREE.Face3(3,9,4));
		geo.faces.push(new THREE.Face3(3,4,2));
		geo.faces.push(new THREE.Face3(3,2,6));
		geo.faces.push(new THREE.Face3(3,6,8));
		geo.faces.push(new THREE.Face3(3,8,9));
		geo.faces.push(new THREE.Face3(4,9,5));
		geo.faces.push(new THREE.Face3(2,4,11));
		geo.faces.push(new THREE.Face3(6,2,10));
		geo.faces.push(new THREE.Face3(8,6,7));
		geo.faces.push(new THREE.Face3(9,8,1));
		geo.computeFaceNormals();


		geo.faces[0].color = new THREE.Color('aliceblue');
		geo.faces[1].color = new THREE.Color('cadetblue');
		geo.faces[2].color = new THREE.Color('lightskyblue');
		geo.faces[3].color = new THREE.Color('darkturquoise');
		geo.faces[4].color = new THREE.Color('honeydew');
		geo.faces[5].color = new THREE.Color('lavender');
		geo.faces[6].color = new THREE.Color('lightblue');
		geo.faces[7].color = new THREE.Color('lightcyan');
		geo.faces[8].color = new THREE.Color('lightsteelblue');
		geo.faces[9].color = new THREE.Color('powderblue');
		geo.faces[10].color = new THREE.Color('thistle');
		geo.faces[11].color = new THREE.Color('lavenderblush');
		geo.faces[12].color = new THREE.Color('aquamarine');
		geo.faces[13].color = new THREE.Color('mediumturquoise');
		geo.faces[14].color = new THREE.Color('mintcream');
		geo.faces[15].color = new THREE.Color('mistyrose');
		geo.faces[16].color = new THREE.Color('paleturquoise');
		geo.faces[17].color = new THREE.Color('dodgerblue');
		geo.faces[18].color = new THREE.Color('mediumaquamarine');
		geo.faces[19].color = new THREE.Color('cornflowerblue');


		return geo;
	}

	changeMaterial(index){'use strict';
 		this.sculpture.material = this.materials[index];
 	}

	getSculpture(){
 		return this.sculpture;
 	}
}
