import React, { useRef, useEffect, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNightMap from "../../assets/textures/8k_earth_nightmap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import { TextureLoader } from "three";
import * as THREE from "three";

export function Earth3D(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthNightMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );
  const [active, setActive] = useState(false)

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
    earthRef.current.rotation.x = elapsedTime / 12;
    cloudsRef.current.rotation.x = elapsedTime / 12;
  });

  return (
      <>
        {/* <hemisphereLight intensity={1} /> */}
      <ambientLight intensity={1.5} />
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={2.2} />
      <mesh ref={cloudsRef} position={[-1, 0, 3]} scale={active ? 1.5 : 1} onClick={() => setActive(!active)}>
        <Stars/>
        <sphereGeometry args={[1, 32, 32]} />
        <meshLambertMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[-1, 0, 3]} scale={active ? 1.5 : 1} onClick={() => setActive(!active)}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshLambertMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        {/* <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> */}
      </mesh>
      </>
  );
}
