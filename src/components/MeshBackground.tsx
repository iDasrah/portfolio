import React from 'react'
import { MeshGradient, type MeshGradientProps } from "@paper-design/shaders-react";

const MeshBackground = (props: MeshGradientProps) => {
    const defaultProps = {
        style: {
            width: "100%",
            height: "100%",
        }
    }

    return <MeshGradient {...defaultProps} {...props} style={{...defaultProps.style, ...props.style}} />
}
export default MeshBackground
