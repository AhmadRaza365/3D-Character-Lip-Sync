import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { Character } from "./Character";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";

export const Experience = () => {
  const backgroundTexture = useTexture("/textures/roomBackground.jpg");
  const backgroundTexture2 = useTexture("/textures/roomBackground2.jpg");
  const viewPort = useThree((state) => state.viewport);

  return (
    <>
      <OrbitControls />
      <Character position={[0, -3, 4]} scale={2} />
      <Environment preset="sunset" />
      <mesh>
        <planeGeometry args={[viewPort.width, viewPort.height]} />
        <meshBasicMaterial map={backgroundTexture2} />
      </mesh>
    </>
  );
};
