class Room{
	constructor(x,y,z, wallSize){
		this.roomBody = new THREE.Object3D();
		

		this.build(x,y,z, wallSize);

		
	}

	build(x,y,z, wallSize){
	var wallColor = 0xb1c3c7;
	var floorColor = 0xdbdad3;

  //build wall
	this.buildWall(x, y + wallSize/4, z, 1, wallSize/2, wallSize, wallColor);

  // Build floor
  this.buildWall(x + wallSize/4, y , z  ,  wallSize/2 , 1, wallSize, floorColor);
	}

	buildWall(x, y, z, geoW, geoH, geoD, color){
    var mesh, geometry, material;

    geometry = new THREE.CubeGeometry(geoW, geoH, geoD);
    material = new THREE.MeshPhongMaterial({ color: color }); 
    mesh = new THREE.Mesh(geometry, material);
    
    mesh.position.set(x, y, z);
    this.roomBody.add(mesh);
  }


  changeMaterial(index){'use strict';
    this.roomBody.material = this.materials[index];
  }


  getRoomBody(){
  	return this.roomBody;
  }
}