uniform float uTime;
varying vec2 vUv;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform vec2 uOpacity;

void main(void)
{
    // Rename the uniform
    vec2 uv=vUv;
    
    // vec4 color=vec4(vUv*mouse,1.*mouse.y,uOpacity.x);
    vec4 color=vec4(uMouse.x,uv.x*abs(sin(uTime)),1.-uv.x,mix(.25,1.,uv.y));
    gl_FragColor=color;
}