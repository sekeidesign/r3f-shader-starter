uniform float uTime;
varying vec2 vUv;
uniform vec2 uPointer;

void main(void)
{
    // Rename the uniform
    vec2 uv=vUv;
    // Normalize the mouse coordinates
    vec2 pointer=(uPointer+1.)/2.;
    
    // Create a color based on the mouse position
    vec3 color=vec3(0.);
    color.r+=mix(.25,1.,vUv.x*pointer.x);
    color.g+=mix(.25,1.,vUv.y*pointer.y);
    color.b+=1.;
    
    vec4 outputColor=vec4(color,1.);
    gl_FragColor=outputColor;
}