"use client";

import * as THREE from "three";
import React, { ComponentPropsWithRef, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTheme } from "next-themes";

export type FuncProps = {
  init: () => THREE.Vector3[];
  update: (pc: THREE.Points<THREE.BufferGeometry>, group: THREE.Group) => void;
};

export type ParticleProps = {
  max?: number;
  size?: number;
  color?: string;
  darkcolor?: string;
  opacity?: number;
};

export type CameraProps = {
  pos?: THREE.Vector3;
  lookAt?: THREE.Vector3;
  rotation?: THREE.Vector3;
};

export type CurveProps = {
  func: FuncProps;
  cam?: CameraProps;
  particles?: ParticleProps;
};

export const FuncRenderer = ({
  func,
  cam = {
    pos: new THREE.Vector3(0, 0, 0),
    lookAt: new THREE.Vector3(0, 0, 0),
    rotation: new THREE.Vector3(0, 0, 0),
  },
  particles = {
    max: 10000,
    size: 1,
    color: "#000",
    darkcolor: "#fff",
    opacity: 1,
  },
}: CurveProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const { gl, camera } = useThree();
  const { theme } = useTheme();

  const isDarkMode = theme === "dark";

  useEffect(() => {
    if (cam.pos) camera.position.copy(cam.pos);
    if (cam.lookAt) camera.lookAt(cam.lookAt);
    if (cam.rotation) {
      camera.rotateX(cam.rotation.x);
      camera.rotateY(cam.rotation.y);
      camera.rotateZ(cam.rotation.z);
    }

    // Initialize and set up the points on mount
    if (groupRef.current) {
      const arrayCurve = func.init();
      const romCurve = new THREE.CatmullRomCurve3(arrayCurve);
      const points = romCurve.getPoints(particles.max);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      const pcMat = new THREE.PointsMaterial({
        size: particles.size,
        color: isDarkMode ? particles.darkcolor : particles.color,
        opacity: particles.opacity,
        transparent: true,
      });
      // pcMat.blending = THREE.AdditiveBlending;

      const pc = new THREE.Points(geometry, pcMat);
      groupRef.current.add(pc);
    }

    return () => {
      // Clean up any resources if needed
    };
  }, [cam, func, particles, camera, isDarkMode]);

  useFrame(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    if (groupRef.current && groupRef.current.children.length > 0) {
      const pc = groupRef.current.children[0] as THREE.Points;
      if (pc.geometry) {
        func.update(pc, groupRef.current);
      }
    }
  });

  return <group ref={groupRef} />;
};

const Renderer: React.FC<
  ComponentPropsWithRef<typeof FuncRenderer> & {
    cam?: CameraProps;
  }
> = ({ cam = { pos: new THREE.Vector3(0, 0, 0) }, ...props }) => {
  return (
    <Canvas gl={{ alpha: true }} className="transform">
      <pointLight position={[0, 0, 0]} color="#9BC995" />
      <perspectiveCamera position={cam.pos} />
      <FuncRenderer cam={cam} {...props} />
    </Canvas>
  );
};

export default Renderer;
