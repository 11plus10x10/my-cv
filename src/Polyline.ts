import * as THREE from "three";

export class Polyline {
    points: Array<THREE.Vector3>;
    count: number;
    geometry: THREE.BufferGeometry;
    position: Float32Array;
    prev: Float32Array;
    next: Float32Array;

    constructor(points: Array<THREE.Vector3>) {
        this.points = points;
        this.count = points.length;
        this.geometry = new THREE.BufferGeometry();
        this.position = new Float32Array(this.count * 3 * 2);
        this.prev = new Float32Array(this.count * 3 * 2);
        this.next = new Float32Array(this.count * 3 * 2);

        const side = new Float32Array(this.count * 1 * 2);
        const uv = new Float32Array(this.count * 2 * 2);
        const index = new Uint16Array((this.count - 1) * 3 * 2);

        for (let i = 0; i < this.count; i++) {
            const i2 = i * 2;
            side.set([-1, 1], i2);
            const v = i / (this.count - 1);
            uv.set([0, v, 1, v], i * 4);

            if (i === this.count - 1) continue;
            index.set([i2 + 0, i2 + 1, i2 + 2], (i2 + 0) * 3);
            index.set([i2 + 2, i2 + 1, i2 + 3], (i2 + 1) * 3);
        }
        this.geometry.setAttribute("position", new THREE.BufferAttribute(this.position, 3));
        this.geometry.setAttribute("prev", new THREE.BufferAttribute(this.prev, 3));
        this.geometry.setAttribute("next", new THREE.BufferAttribute(this.next, 3));
        this.geometry.setAttribute("side", new THREE.BufferAttribute(side, 1));
        this.geometry.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
        this.geometry.setIndex(new THREE.BufferAttribute(index, 1));

        //  Update geometry.
        const tmp = new THREE.Vector3();
        this.points.forEach((p, i) => {
            p.toArray(this.position, i * 3 * 2);
            p.toArray(this.position, i * 3 * 2 + 3);
            if (!i) {
                tmp.copy(p).sub(this.points[i + 1].add(p));
                tmp.toArray(this.prev, i * 3 * 2);
                tmp.toArray(this.prev, i * 3 * 2 + 3);
            } else {
                p.toArray(this.next, (i - 1) * 3 * 2);
                p.toArray(this.next, (i - 1) * 3 * 2 + 3);
            }
            if(i === this.points.length - 1) {
                tmp.copy(p).sub(this.points[i - 1]).add(p);
                tmp.toArray(this.next, i * 3 * 2);
                tmp.toArray(this.next, i * 3 * 2 + 3)
            } else {
                p.toArray(this.prev, (i + 1) * 3 * 2);
                p.toArray(this.prev, (i + 1) * 3 * 2 +3);
            }
        });

        this.geometry.attributes.position.needsUpdate = true;
        this.geometry.attributes.prev.needsUpdate = true;
        this.geometry.attributes.next.needsUpdate = true;
    }
}
