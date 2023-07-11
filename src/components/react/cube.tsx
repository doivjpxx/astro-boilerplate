import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

function Dodecahedron(): JSX.Element {
  const { viewport } = useThree();

  const ref = useRef<any>();
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    ref.current.rotation.set(x, y, 0);
    ref.current.rotation.set(-y, x, 0);
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <dodecahedronGeometry attach="geometry" />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

const Cube = () => {
  return (
    <Canvas
      style={{
        zIndex: 1,
        position: "absolute",
        height: 300,
        width: 300,
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Dodecahedron />
    </Canvas>
  );
};

export default Cube;
