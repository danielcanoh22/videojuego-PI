import * as THREE from "three";

class Trojan {
  private scene: THREE.Scene;
  public mesh: THREE.Mesh;

  constructor(
    scene: THREE.Scene,
    position: { x: number; y: number; z: number },
    model: THREE.Mesh
  ) {
    this.scene = scene;
    this.mesh = model;
    this.mesh.position.set(position.x, position.y, position.z);
    this.scene.add(this.mesh);
  }

  update() {
    // Logic to move or update the Trojan
  }

  destroy() {
    this.scene.remove(this.mesh);
    this.mesh.geometry.dispose();

    if (Array.isArray(this.mesh.material)) {
      this.mesh.material.forEach((material) => {
        material.dispose();
      });
    } else {
      this.mesh.material.dispose();
    }
  }
}

export default Trojan;
