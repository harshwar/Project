<template>
  <canvas ref="bjsCanvas" style="width: 100%; height: 100%;"></canvas>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, PointLight, StandardMaterial, Color3, Texture, MeshBuilder } from '@babylonjs/core';

// This component now accepts an "imageUrl" property from its parent
const props = defineProps({
  imageUrl: String
});

const bjsCanvas = ref(null);

onMounted(() => {
  if (bjsCanvas.value) {
    const engine = new Engine(bjsCanvas.value, true);
    const scene = new Scene(engine);
    const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, Vector3.Zero(), scene);
    camera.attachControl(bjsCanvas.value, true);

    const ambientLight = new HemisphericLight("ambientLight", new Vector3(0, 1, 0), scene);
    ambientLight.intensity = 0.5;
    const pointLight = new PointLight("pointLight", new Vector3(0, 1, -2), scene);
    pointLight.intensity = 0.8;

    const plane = MeshBuilder.CreatePlane("plane", { width: 1.6, height: 1 }, scene);
    const material = new StandardMaterial("material", scene);
    material.diffuseColor = new Color3(1, 1, 1); // Set to white to show full texture color
    plane.material = material;

    // This "watch" function will update the texture whenever the imageUrl prop changes
    watch(() => props.imageUrl, (newUrl) => {
      if (newUrl) {
        material.diffuseTexture = new Texture(newUrl, scene);
      }
    });

    engine.runRenderLoop(() => {
      scene.render();
      if (plane) {
        plane.rotation.y += 0.01;
      }
    });

    window.addEventListener('resize', () => {
      engine.resize();
    });
  }
});
</script>
