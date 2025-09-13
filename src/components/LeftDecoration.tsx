import React from 'react'
import MeshBackground from "./MeshBackground.tsx";

const LeftDecoration = () => {
    return (
        <div className="left-container">
            <MeshBackground colors={["#fff", "#b5b5b5"]} distortion={1} swirl={.2} offsetX={0} offsetY={0} scale={1} rotation={90} speed={.5} style={{borderRadius: "0 0 16rem 16rem"}} />
        </div>
    )
}
export default LeftDecoration
