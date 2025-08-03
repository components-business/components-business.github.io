<script>
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
</script>

<div class="h-screen">
  <Canvas>
    <Scene />
  </Canvas>
</div>

<style>
  .h-screen {
    height: 100%;
    width: 100%;
  }
</style>
