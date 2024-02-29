uniform float uTime;
varying vec2 vUv;
uniform vec2 uPointer;
uniform vec2 uResolution;
uniform vec2 uOpacity;

void main(void)
{
    // Rename the uniform
    vec2 uv=vUv;
    // Normalize the mouse coordinates
    vec2 pointer=(uPointer+1.)/2.;
    
    vec4 color=vec4(pointer.x,pointer.y,1.,mix(.25,1.,uv.y));
    gl_FragColor=color;
}