import React from 'react';
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";


export function PinkSphere(){
    return (
        <Canvas className="canvas" style={{height: '100%', width: '100%'}}>
            <OrbitControls enableZoom={true} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} />
            <Suspense fallback={null}>
                <Sphere key={undefined} material={undefined} quaternion={undefined} position={undefined} attach={undefined} onUpdate={undefined} up={undefined} scale={2} rotation={undefined} matrix={undefined} layers={undefined} dispose={undefined} clear={undefined} geometry={undefined} raycast={undefined} id={undefined} onClick={undefined} onContextMenu={undefined} onDoubleClick={undefined} onPointerDown={undefined} onPointerMove={undefined} onPointerUp={undefined} onPointerCancel={undefined} onPointerEnter={undefined} onPointerLeave={undefined} onPointerOver={undefined} onPointerOut={undefined} onWheel={undefined} type={undefined} name={undefined} onPointerMissed={undefined} visible={undefined} uuid={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} morphTargetInfluences={undefined} morphTargetDictionary={undefined} isMesh={undefined} updateMorphTargets={undefined}>
                <MeshDistortMaterial color="hotpink" opacity={0.1} Transparent/>
                </Sphere>
            </Suspense>
        </Canvas>

    )
}