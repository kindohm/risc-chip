void main () {
    vec2 uv = uv();vec2 p = uv, p2 = uv;float a = atan(uv.x, uv.y);float r = log(length(uv));vec3 c = vec3(0);
    float num = bands.y * 3. + 3.;
    a = mod(a, PI2/num);
    float x = p.x * 5.;
    float y = pow(p.y, 3.3 * bands.y )  * 3.; 
    
    p = vec2(abs(a - PI2/num/2.), r * bands.y) + vec2(0, time * -4.1 + (length(bands) * .5));
    p = mix(p, uv, .99999999);
    p2 = vec2(x/abs(y - .01), 1./abs(y + .01)) + vec2(0, time * 3. - (bands.y * .25));
    p = mix(p, p2, .0);
    p = floor(p * 30.);// * bands.x);
   
    float s = 4.;
    c += snoise(vec3(p * 1., time * s)) * red  * bands.x * 2.;
    c += snoise(vec3(p * 1.1, time * s)) * teal * bands.y  * 2.;
    c += snoise(vec3(p * 1.2, time) * s) * orange * bands.z * 2.;
    c = pow(c, 4.* white);
    // c *= abs(y);
    
    vec2 center = vec2(.5);
    center += rotate(uv, vec2(0), PI2* bands.x - PI/2.);
    vec4 bb = texture2D(backbuffer, (uvN() - center) * 1.0 + center);
    c = mix(c *8., bb.rgb, bb.a );
    
    float l =    pow(log(clamp(length(uv), 0., 1.0)), 1.5) *
                 length(bands) * 
                 clamp(snoise(vec3(uv * 50., time * 10.)), .6, 1.)* .5;
    c += l * hsv2rgb(vec3(length(bands), rand(uv + time) * 2.+.8, .5)) * 0.;
    
    gl_FragColor = vec4(c, .94);
}