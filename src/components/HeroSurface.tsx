import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GRID = 80;

function Surface() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(6, 6, GRID, GRID);
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const geo = meshRef.current.geometry;
    const pos = geo.attributes.position;
    const t = clock.getElapsedTime() * 0.15;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);

      const r = Math.sqrt(x * x + y * y);

      const z =
        Math.sin(r * 2.0 - t * 3.0) * 0.3 * Math.exp(-r * 0.25) +
        Math.sin(x * 1.5 + t * 1.2) * Math.cos(y * 1.5 + t * 0.8) * 0.15 +
        Math.sin(x * 0.8 - y * 0.6 + t * 2.0) * 0.1 +
        Math.cos(r * 3.0 + t * 0.5) * 0.08 * Math.sin(t * 0.3);

      pos.setZ(i, z);
    }

    pos.needsUpdate = true;
    geo.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2.6, 0, -0.3]} position={[0, -0.2, 0]}>
      <meshStandardMaterial
        color="#2dd4bf"
        wireframe
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

const HeroSurface = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 2.5, 4.5], fov: 45, near: 0.1, far: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 5, 2]} intensity={0.6} />
        <Surface />
      </Canvas>
    </div>
  );
};

export default HeroSurface;
