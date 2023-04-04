import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {Environment, OrbitControls, Preload, useGLTF} from "@react-three/drei";

import CanvasLoader from "../Loader";
import {Bloom, EffectComposer} from "@react-three/postprocessing";

function RimLight({ brightness, color }) {
    return (
        <rectAreaLight
            width={2}
            height={2}
            intensity={brightness}
            color={color}
            position={[1, 4, -2]}
            rotation={[0, 180, 0]}
            castShadow
        />
    );
}

const Diamond = () => {
    const diamond = useGLTF("/diamond3/scene.gltf");


    return (

        <primitive object={diamond.scene} scale={2.5} position-y={0} rotation-y={0} />
    );
};

const DiamondCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            {/*<ambientLight/>*/}
            {/*<directionalLight position={[10, 10, 5]} intensity={500} />*/}
            {/*<directionalLight position={[-10, -10, -5]} intensity={1000} />*/}
            {/*<hemisphereLight intensity={1.15} groundColor='black' />*/}

            {/*<spotLight*/}
            {/*    position={[-20, 50, 10]}*/}
            {/*    angle={0.12}*/}
            {/*    penumbra={1}*/}
            {/*    intensity={10000}*/}
            {/*    castShadow*/}
            {/*    shadow-mapSize={1024}*/}
            {/*/>*/}

            {/*<pointLight intensity={100} />*/}

            <ambientLight intensity={0.5} />
            <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />

            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={1.2}
                    enableZoom={false}
                    // maxPolarAngle={Math.PI / 2}
                    // minPolarAngle={Math.PI / 2}
                />
                <Diamond />

                <Preload all />
            </Suspense>
            {/*<Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />*/}
            <EffectComposer>
                <Bloom luminanceThreshold={1} intensity={1} levels={9} mipmapBlur />
            </EffectComposer>
        </Canvas>
    );
};

export default DiamondCanvas;
