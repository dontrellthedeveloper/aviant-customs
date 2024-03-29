import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(1000), { radius: 1.8 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 200;
        ref.current.rotation.y -= delta / 25;
    });

    return (
        <group >
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color='#E5E4E2'
                    size={0.001}
                    sizeAttenuation={true}
                    depthWrite={false}
                    rotation={[0, 0, Math.PI / 100]}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => {
    return (
        <div className='stars__canvas-styles'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
