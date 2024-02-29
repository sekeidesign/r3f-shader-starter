uniform float uTime;
varying vec2 vUv;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform vec2 uOpacity;

void main(void)
{
    // Rename the uniform
    vec2 uv=vUv;
    
    // Normalize the mouse coordinates
    // vec2 mouse=uMouse/uResolution;
    
    // vec4 color=vec4(vUv*mouse,1.*mouse.y,uOpacity.x);
    vec4 color=vec4(.1,uv.x,1.-uv.x,mix(.25,1.,uv.y));
    gl_FragColor=color;
}