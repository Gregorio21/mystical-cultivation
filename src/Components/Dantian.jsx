import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import React from 'react';
import { Physics, usePlane, useSphere } from '@react-three/cannon';


function Particle(props){
    const [ref] = useSphere(() => ({ mass: 0, ...props }));
    return (
      // @ts-ignore
      <mesh castShadow ref={ref}>
        <sphereGeometry args={[0.005,32,32]} />
        <meshLambertMaterial color="blue" />
      </mesh>
    )
}

function Sphere(props){
    return (
        <mesh receiveShadow castShadow  >
            <sphereGeometry args={[1.1,32,32]} />
            <meshLambertMaterial color="red" transparent opacity={0.05}/>
        </mesh>
    )
}

function Plane(props){
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
    return (
      // @ts-ignore
      <mesh ref={ref} receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <shadowMaterial color="#171717" transparent opacity={0.4} />
      </mesh>
    )
}


export function Dantian(props){
    return(
        <>
        
        <Canvas className="canvas" style={{height: '100%', width: '100%'}} camera={{position: [0,0,20], fov: 10}}>
            <OrbitControls enableZoom={true} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} />
            <Sphere position={[0,0,0]} />
            <Physics>
                {props.particles.map((particle, index, arr) => <Particle position={particle} castShadow key={index}/>)}
                <Plane position={[0, -2.5, 0]}/>
            </Physics>
                
        </Canvas>        
      </>
    );
}