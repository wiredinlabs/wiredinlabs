"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

function StarModel() {
  const ref = useRef();
  const { scene } = useGLTF("/models/star.glb");

  const [scrollT, setScrollT] = useState(0);

  const initialPosition = new THREE.Vector3(26.5, 8, -60);
  const finalPosition = new THREE.Vector3(-50.5, 22, -60); // mirrored X, lower Y
  const initialScale = new THREE.Vector3(0.063, 0.063, 0.063);

  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById("about");
      const services = document.getElementById("services");

      if (!about || !services) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const aboutTop = about.offsetTop;
      const aboutHeight = about.offsetHeight;
      const servicesTop = services.offsetTop;
      const servicesHeight = services.offsetHeight;

      const scrollStart = aboutTop + aboutHeight * 0.1;
      const scrollEnd = servicesTop + servicesHeight * 0.05;

      const rawT = (scrollY - scrollStart) / (scrollEnd - scrollStart);
      const clampedT = Math.min(Math.max(rawT, 0), 1); // clamp between 0–1
      setScrollT(clampedT);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    if (!ref.current) return;

    // Interpolate position
    ref.current.position.lerpVectors(initialPosition, finalPosition, scrollT);

    // Interpolate scale from 0.063 → 0.08
    const minScale = 0.063;
    const maxScale = 0.075;
    const scaleT = scrollT < 0.8 ? 0 : (scrollT - 0.8) / 0.2;
    const easedT = Math.min(Math.max(scaleT, 0), 1);
    const currentScale = minScale + (maxScale - minScale) * easedT;
    ref.current.scale.set(currentScale, currentScale, currentScale);

    // Traverse through meshes for color + rotation updates
    ref.current.traverse((child) => {
      if (child.isMesh) {
        const material = child.material;

        if (scrollT === 1) {
          // Final position — ensure straight and black
          if (material.color.getHexString() !== "000000") {
            material.color.set("#000000");
            material.emissive.set("#000000");
            material.needsUpdate = true;
          }
        } else {
          // Not at final — restore original color
          if (material.color.getHexString() !== "e4ed05") {
            material.color.set("#E4ED05");
            material.emissive.set("#E4ED05");
            material.needsUpdate = true;
          }
        }
      }
    });
  });

//   SMOOTHER
//   useFrame(() => {
//     if (!ref.current) return;
  
//     const current = ref.current;
  
//     // --- Smooth Position ---
//     const targetPosition = new THREE.Vector3().lerpVectors(initialPosition, finalPosition, scrollT);
//     current.position.lerp(targetPosition, 0.1); // 0.1 controls how smooth it is
  
//     // --- Smooth Scale ---
//     const minScale = 0.063;
//     const maxScale = 0.075;
//     const scaleT = scrollT < 0.8 ? 0 : (scrollT - 0.8) / 0.2;
//     const easedT = Math.min(Math.max(scaleT, 0), 1);
//     const targetScale = minScale + (maxScale - minScale) * easedT;
//     const newScale = new THREE.Vector3(targetScale, targetScale, targetScale);
//     current.scale.lerp(newScale, 0.1); // smoother scale
  
//     // --- Material and Rotation Handling ---
//     current.traverse((child) => {
//       if (child.isMesh) {
//         const material = child.material;
  
//         if (scrollT === 1) {
//           // Final state — black and straight
//           if (material.color.getHexString() !== "000000") {
//             material.color.set("#000000");
//             material.emissive.set("#000000");
//             material.needsUpdate = true;
//           }
//         } else {
//           // Reset to yellow
//           if (material.color.getHexString() !== "e4ed05") {
//             material.color.set("#E4ED05");
//             material.emissive.set("#E4ED05");
//             material.needsUpdate = true;
//           }
//         }
//       }
//     });
//   });

  useEffect(() => {
    if (ref.current) {
      ref.current.position.copy(initialPosition);

      ref.current.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = false;
          child.material = new THREE.MeshStandardMaterial({
            color: "#E4ED05",
            emissive: "#E4ED05",
            emissiveIntensity: 0.2,
            toneMapped: false,
          });
          child.material.needsUpdate = true;
        }
      });
    }
  }, []);

  return <primitive object={scene} ref={ref} scale={initialScale} />;
}

export default function StarCanvas() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 10]} castShadow />
      <StarModel />
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={1} intensity={0.1} />
      </EffectComposer>
      <OrbitControls enableZoom={false} enableRotate={false} />
    </Canvas>
  );
}
