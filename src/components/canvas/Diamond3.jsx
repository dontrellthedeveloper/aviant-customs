import { useRef } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import {
    useGLTF,
    Caustics,
    CubeCamera,
    Environment,
    OrbitControls,
    RandomizedLight,
    AccumulativeShadows,
    MeshRefractionMaterial,
    MeshTransmissionMaterial
} from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useControls } from 'leva'
import { RGBELoader } from 'three-stdlib'

function Diamond(props) {
    const ref = useRef()
    const { nodes } = useGLTF('/dflat.glb')
    // Use a custom envmap/scene-backdrop for the diamond material
    // This way we can have a clear BG while cube-cam can still film other objects
    // const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')

    const texture = useLoader(RGBELoader, '/studio_small_08_4k.hdr')

    // Optional config
    const config = useControls({
        bounces: { value: 3, min: 0, max: 8, step: 1 },
        aberrationStrength: { value: 0.01, min: 0, max: 0.1, step: 0.01 },
        ior: { value: 2.75, min: 0, max: 10 },
        fresnel: { value: 1, min: 0, max: 1 },
        color: '#add8e6',
        fastChroma: true
    })
    return (
        // <CubeCamera resolution={256} frames={1} envMap={texture}>
        //     {(texture) => (
        //         // <Caustics
        //         //     backfaces
        //         //     color={config.color}
        //         //     position={[0, -0.5, 0]}
        //         //     lightSource={[5, 5, -10]}
        //         //     worldRadius={0.1}
        //         //     ior={1.8}
        //         //     backfaceIor={1.1}
        //         //     intensity={0.1}>
        //         //
        //         // </Caustics>
        //
        //
        //     )}
        // </CubeCamera>
    <mesh  ref={ref} geometry={nodes.Diamond_1_0.geometry} {...props}>
        <MeshRefractionMaterial
            {...config}
            envMap={texture}
            toneMapped={false} />
    </mesh>
    )
}

export default function Diamond3() {
    return (
        <Canvas camera={{ position: [-5, 0.5, 5], fov: 45 }}>
            {/*<color*/}
            {/*    attach="background" args={['black']}*/}
            {/*/>*/}
            <ambientLight intensity={0.5} />
            <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Diamond rotation={[0, 0.715, 0]}
                     // position={[0, -0.175 + 0.5, 0]}
                     scale={2.0}
                     position={[0, 0, 0]}

            />
            {/* <Caustics color="#FF8F20" position={[0, -0.5, 0]} lightSource={[5, 5, -10]} worldRadius={0.01} ior={1.2} intensity={0.005}>
        <mesh castShadow receiveShadow position={[-2, 0.5, -1]} scale={0.5}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshTransmissionMaterial resolution={1024} distortion={0.25} color="#FF8F20" thickness={1} anisotropy={1} />
        </mesh>
      </Caustics> */}
            {/* <mesh castShadow receiveShadow position={[1.75, 0.25, 1]} scale={0.75}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="hotpink" />
      </mesh> */}
             <AccumulativeShadows
        temporal
        frames={100}
        color="orange"
        colorBlend={2}
        toneMapped={true}
        alphaTest={0.8}
        opacity={1}
        scale={12}
        position={[0, -0.5, 0]}>
        <RandomizedLight amount={8} radius={10} ambient={0.5} intensity={1} position={[5, 5, -10]} bias={0.001} />
      </AccumulativeShadows>
            {/*<Environment*/}

            {/*    files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />*/}
            <OrbitControls
                enableZoom={false}
                makeDefault
                autoRotate
                autoRotateSpeed={1.2} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
            <EffectComposer>
                <Bloom luminanceThreshold={1} intensity={.25} levels={.5} mipmapBlur />
            </EffectComposer>
        </Canvas>
    )
}
