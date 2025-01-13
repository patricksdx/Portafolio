import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Model = () => {
  const { scene } = useGLTF("/models/Conejo.gltf"); // Cambia la ruta por tu archivo GLTF
  const ref = useRef();

  // Hook para rotar el modelo constantemente
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.006; // Velocidad de rotación (ajusta según prefieras)
    }
  });

  return <primitive object={scene} ref={ref} position={[0, 0, 0]} />;
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [20, 8, 8], fov: 5 }}>
      {/* Luz ambiental */}
      <ambientLight intensity={1} />
      {/* Luz direccional */}
      <directionalLight position={[5, 5, 5]} intensity={1} />
      {/* Modelo GLTF */}
      <Model />
      {/* Controles de cámara con el mouse */}
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;