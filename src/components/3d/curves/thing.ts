"use client";

import * as THREE from "three";
import { CurveProps } from "../renderer";

const maxParticles = 20000;

const startScatter = 0.1;

const init = () => {
  var arrayCurve = [];

  var x = 0.01,
    y = 0.01,
    z = 0.01;
  var a = 0.9;
  var b = 3.4;
  var f = 9.9;
  var g = 1;
  var t = 0.001;
  for (var i = 0; i < maxParticles; i++) {
    x = x - t * a * x + t * y * y - t * z * z + t * a * f;
    y = y - t * y + t * x * y - t * b * x * z + t * g;
    z = z - t * z + t * b * x * y + t * x * z;
    arrayCurve.push(
      new THREE.Vector3(x, y, z).multiplyScalar(
        1 - startScatter / 2 + Math.random() * startScatter,
      ),
    );
  }
  return arrayCurve;
};

const update = (pc: THREE.Points<THREE.BufferGeometry>, group: THREE.Group) => {
  //Varying the points on each frame
  // step += 0.01;
  var geometry = pc.geometry;
  var a = 0.9; //+ Math.random() * .2;
  var b = 3.4; //+ Math.random() * .1;
  var f = 9.9; //+ Math.random() * .2;
  var g = 1; //+ Math.random() * .1;
  var t = 0.001;

  var positions = geometry.attributes.position;
  const numPoints = positions.array.length / 3;

  for (let i = 0; i < numPoints; i++) {
    let x = positions.getX(i),
      y = positions.getY(i),
      z = positions.getZ(i);
    positions.setXYZ(
      i,
      x - t * a * x + t * y * y - t * z * z + t * a * f,
      y - t * y + t * x * y - t * b * x * z + t * g,
      z - t * z + t * b * x * y + t * x * z,
    );
  }
  positions.needsUpdate = true;

  // TODO: remove
  // group.rotation.x += 0.0005;
  // group.rotation.y += 0.001;
  // group.rotation.z -= 0.0005;
};

// INFO: Curve definition
const ThingCurve = {
  func: { init: init, update: update },
  cam: {
    pos: new THREE.Vector3(0, 0, 18).multiplyScalar(1.7),
    rotation: new THREE.Vector3(0, 0, 180),
  },
  particles: {
    max: maxParticles,
    size: 0.07,
    color: "#888",
    darkcolor: "#444",
    opacity: 0.4,
  }, // 87a
};

export default ThingCurve;
