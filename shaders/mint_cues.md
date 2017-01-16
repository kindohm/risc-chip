# Cues for Mint

These are the rough cue marks for where and what to change.

##### 11 sec, line 12
```glsl
p = floor(p * 30.);// * bands.x);
p = floor(p * 10. * bands.x);
```

##### 35 sec - 1:10 sec, line 9, line 11
```glsl
p = mix(p, uv, 1.0);
p = mix(p, uv, .0);
 
p = floor(p * 10. * bands.x);
p = floor(p * 10.);
```

##### 1:30, line 22, line 14-17
```glsl
vec4 bb = texture2D(backbuffer, (uvN() - center) * 1.0 + center);
vec4 bb = texture2D(backbuffer, (uvN() - center) * 1.02 + center);
 
c += snoise(vec3(p * 1., time * s)) * red;//  * bands.x * 2.;
c += snoise(vec3(p * 1.1, time * s)) * teal;// * bands.y  * 2.;
c += snoise(vec3(p * 1.2, time) * s) * orange;// * bands.z * 2.;
c = pow(c, 3.* white);
```

##### 2:40, line 10, line 5 - 6
```glsl
p = vec2(x/abs(y), 1./abs(y)) + vec2(0, time * 3. - (bands.y * .25));

float x = p.x * 8.;
float y = pow(p.y, 5.3 * bands.y )  * 3.; 
```

##### 3:44, line 18, 23, 17?
```glsl
c *= abs(y);

// c = mix(c *8., bb.rgb, bb.a );

c = pow(c, 1.* white);
```

##### 4: - 4:10, line 28
```glsl
c += l * hsv2rgb(vec3(length(bands), rand(uv + time) * 2.+.8, .5)) * .0  -> 10.;
p = vec2(x/abs(y - .01), 1./abs(y - 4.01)) + vec2(0, time * 3. - (bands.y * .25));
```