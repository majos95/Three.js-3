var tmp;

class Painting{
	constructor(x, y, z, wallSize){
		//this.painting = new THREE.Object3D();
		this.painting = new THREE.Group();

		

		this.build(x, y, z, wallSize);
	}

	build(x,y,z, wallSize){ 'use strict';
		var paintingBackgroung = 0x828282;
		var paintingFrame = 0x877e58;
		var blackSquares = 0x000000;
		var whiteDots = 0xffffff;

		var side = 0.9;
		var radius = 0.2;
		var dist = 0.3;
		var dist_radius = 1.2;

		var topLeft = new THREE.Vector3(x + 1.1, y + wallSize/4 + 4.3, z + wallSize/4 + 6.3);
		var topRight = new THREE.Vector3(x + 1.1, y + wallSize/4 + 4.3, z + wallSize/4 - 6.3);
		
		var currentPointBoxes = new THREE.Vector3();
		var currentPointDots = new THREE.Vector3();
		
		//background
		this.buildParallelepiped(x + 1, y + wallSize/4, z + wallSize/4 , 0.1 , 9.4, 14, paintingBackgroung);
		
		//populate painting with squares and dots
		var i = 0;
		while (i <= 13){
			this.buildParallelepiped(topLeft.x, topLeft.y, topLeft.z - i, 0.1, side, side, blackSquares);
			currentPointBoxes.z = topLeft.z - i;
			this.buildCylinder(topLeft.x, topLeft.y - dist*2, topLeft.z - dist*2 - i, radius, radius, 0.1, 10, 10 , false, 0, 2*Math.PI, whiteDots);
			currentPointDots.z = topLeft.z - dist*2 - i;
			i += 1.2;
			var j = dist_radius;
			while(j <= 9 ){
				this.buildParallelepiped(topLeft.x, topLeft.y - j, currentPointBoxes.z, 0.1, side, side, blackSquares);
				if(j< 8.4){
					this.buildCylinder(topLeft.x, topLeft.y - dist*2 -j, currentPointDots.z, radius, radius, 0.1, 10, 10, false, 0, 2*Math.PI, whiteDots);
				}
				j += 1.2;
			}
		}
		//fraction squares on right
		var j =0;
		while(j <= 9 ){
				this.buildParallelepiped(topRight.x, topLeft.y - j, topRight.z - 0.3, 0.1, 0.9, 0.3, blackSquares);
				j += 1.2;
		}
		//fraction of bottom dots
		var i=0;
		while(i<=13){
		 	this.buildCylinder(topLeft.x, topLeft.y - dist*2 - 8.4, topLeft.z - dist*2 - i, radius, radius, 0.1, 10, 10 , false, 0, Math.PI, whiteDots);
			i += 1.2;
		 } 	

		//frame
		this.buildParallelepiped(x + 1.1, y + wallSize/4 + 4.95, z + wallSize/4, 0.1, 0.5, 14, paintingFrame);
		this.buildParallelepiped(x + 1, y + wallSize/4 - 4.95, z + wallSize/4, 0.1, 0.5, 14, paintingFrame);
		this.buildParallelepiped(x + 1, y + wallSize/4, z + wallSize/4 - 7, 0.1, 10.4, 0.5, paintingFrame);
		this.buildParallelepiped(x + 1, y + wallSize/4, z + wallSize/4 + 7, 0.1, 10.4, 0.5, paintingFrame);
		
	}

	buildCylinder(x, y, z, radiusTop, radiusBottom, height, rsegments, hsegments, openEnded, thetaStart, thetaEnd, color){'use strict';
		var mesh, geometry, material;

		geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, rsegments, hsegments, openEnded, thetaStart, thetaEnd);
		material = new THREE.MeshPhongMaterial({ color: color });
	    mesh = new THREE.Mesh(geometry, material);

	    mesh.position.set(x, y, z);
	    mesh.rotateZ(Math.PI/2);
	    this.painting.add(mesh);
	}
		

	buildParallelepiped(x, y, z, geoW, geoH, geoD, color){ 'use strict';
	    var mesh, geometry, material;

	    geometry = new THREE.CubeGeometry(geoW, geoH, geoD);
		material = new THREE.MeshPhongMaterial({ color: color });
	    mesh = new THREE.Mesh(geometry, material);
	
	    
	    mesh.position.set(x, y, z);
	    this.painting.add(mesh);

 	 }

  	getPainting(){
  		return this.painting;
  	}
}