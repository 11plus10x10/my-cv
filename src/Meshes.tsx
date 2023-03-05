import * as React from "react";
import * as THREE from "three";
import { Polyline } from "./Polyline";
import chroma from "chroma-js";
import { useFrame } from "@react-three/fiber";

const tst = chroma.scale([
    "#CDB4DB",
    "#FFC8DD",
    "#FFAFCC",
    "#BDE0FE",
    "#A2D2FF",
    "#F8A3A8",
]).mode("lch");

const tst2 = chroma.scale([
    "#2175D8",
    "#6aa6d2",
    "#2175D8",
    ]
).mode("lch");

const original = chroma.scale([
    "#2175D8",
    "#DC5DCE",
    "#CC223D",
    "#F07414",
    "#FDEE61",
    "#74C425"
]).mode("lch");

const conf = {
    nx: 40,
    ny: 100,
    angle: Math.PI / 3,
    chromaScale: tst2,
    darken: -1,
    timeCoef: 0.1,
};

const uTime = {
    value: 0,
};

const uTimeCoef = {
    value: conf.timeCoef,
};

const vertexShader = `
      uniform float uTime, uTimeCoef;
      uniform float uSize;
      uniform mat2 uMat2;
      uniform vec3 uRnd1;
      uniform vec3 uRnd2;
      uniform vec3 uRnd3;
      uniform vec3 uRnd4;
      uniform vec3 uRnd5;
      attribute vec3 next, prev; 
      attribute float side;
      varying vec2 vUv;

      vec2 dp(vec2 sv) {
        return (1.5 * sv * uMat2);
      }

      void main() {
        vUv = uv;

        vec2 pos = dp(position.xy);

        // Well... I know I should update geometry instead...
        // Computing normal here is not needed
        // vec2 sprev = dp(prev.xy);
        // vec2 snext = dp(next.xy);
        // vec2 tangent = normalize(snext - sprev);
        // vec2 normal = vec2(-tangent.y, tangent.x);
        // float dist = length(snext - sprev);
        // normal *= smoothstep(0.0, 0.02, dist);

        vec2 normal = dp(vec2(1, 0));
        normal *= uSize;

        float time = uTime * uTimeCoef;
        vec3 rnd1 = vec3(cos(time * uRnd1.x + uRnd3.x), cos(time * uRnd1.y + uRnd3.y), cos(time * uRnd1.z + uRnd3.z));
        vec3 rnd2 = vec3(cos(time * uRnd2.x + uRnd4.x), cos(time * uRnd2.y + uRnd4.y), cos(time * uRnd2.z + uRnd4.z));
        normal *= 1.0
          + uRnd5.x * (cos((position.y + rnd1.x) * 20.0 * rnd1.y) + 1.0)
          + uRnd5.y * (sin((position.y + rnd2.x) * 20.0 * rnd2.y) + 1.0)
          + uRnd5.z * (cos((position.y + rnd1.z) * 20.0 * rnd2.z) + 1.0);
        pos.xy -= normal * side;

        gl_Position = vec4(pos, 0.0, 1.0);
      }
    `;

const fragmentShader = `
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      varying vec2 vUv;
      void main() {
        gl_FragColor = vec4(mix(uColor1, uColor2, vUv.x), 1.0);
      }
    `;

const dx = 2 / (conf.nx);
const dy = -2 / (conf.ny - 1);
const ox = -1 + dx / 2;
const oy = 1;
const mat2 = Float32Array.from([
    Math.cos(conf.angle),
    - Math.sin(conf.angle),
    Math.sin(conf.angle),
    Math.cos(conf.angle),
]);

export const Meshes: React.FC = () => {
    useFrame(({ clock }) => {
        uTime.value = clock.elapsedTime;
    });
    const { randFloat: rnd } = THREE.MathUtils;
    const meshes: Array<THREE.Mesh> = [];
    const polylines: Array<Polyline> = [];
    for (let i = 0; i < conf.nx; i++){
        const points: Array<THREE.Vector3> = [];
        for (let j = 0; j < conf.ny; j++){
            const x = ox + i * dx;
            const y = oy + j * dy;
            points.push(new THREE.Vector3(x, y, 0));
        }
        const polyline = new Polyline(points);
        polylines.push(polyline);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime,
                uTimeCoef,
                uMat2: { value: mat2 },
                uSize: { value: 1.5 / conf.nx },
                uRnd1: {value: new THREE.Vector3(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1))},
                uRnd2: {value: new THREE.Vector3(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1))},
                uRnd3: {value: new THREE.Vector3(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1))},
                uRnd4: {value: new THREE.Vector3(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1))},
                uRnd5: {value: new THREE.Vector3(rnd(0.2, 0.5), rnd(0.3, 0.6), rnd(0.4, 0.7))},
                uColor1: { value: new THREE.Color(conf.chromaScale(i / conf.nx).hex())},
                uColor2: { value: new THREE.Color(conf.chromaScale(i / conf.nx).darken(conf.darken).hex())},
            },
            vertexShader,
            fragmentShader,
        });
        meshes.push(new THREE.Mesh(polyline.geometry, material));
    }
    const tst = meshes.map((mesh) => <primitive key={`${rnd(1,666)}-${new Date().getTime()}`} object={mesh}/>);

    return (
        <>
            {tst}
        </>
    );
};
