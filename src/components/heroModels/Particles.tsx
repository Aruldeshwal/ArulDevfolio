import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Particle = {
  position: [number, number, number];
  speed: number;
};

interface ParticlesProps {
  count?: number;
}

function getPseudoRandom(seed: number) {
  const x = Math.sin(seed + 1.234) * 10000;
  return x - Math.floor(x);
}

const Particles: React.FC<ParticlesProps> = ({ count = 200 }) => {
  const mesh = useRef<THREE.Points>(null);

  // create particles once
  const particles = useMemo<Particle[]>(() => {
    const temp: Particle[] = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (getPseudoRandom(i * 3) - 0.5) * 10,
          getPseudoRandom(i * 3 + 1) * 10 + 5, // higher starting point
          (getPseudoRandom(i * 3 + 2) - 0.5) * 10,
        ],
        speed: 0.005 + getPseudoRandom(i * 7) * 0.001,
      });
    }
    return temp;
  }, [count]);

  // allocate position array
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      arr[i * 3] = p.position[0];
      arr[i * 3 + 1] = p.position[1];
      arr[i * 3 + 2] = p.position[2];
    });
    return arr;
  }, [particles, count]);

  // animate
  useFrame(() => {
    const geometry = mesh.current?.geometry;
    if (!geometry) return;

    const positionAttr = geometry.attributes.position as THREE.BufferAttribute;
    const array = positionAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      let y = array[i * 3 + 1];
      y -= particles[i].speed;
      if (y < -2) y = Math.random() * 10 + 5;
      array[i * 3 + 1] = y;
    }

    positionAttr.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
        attach="attributes-position"
        args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
