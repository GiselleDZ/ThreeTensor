import * as THREE from '../build/three.module.js'
// import { GLTFLoader } from './jsm/loaders/GLTFLoader.js'
import Scene from './Scene'

const AlienInstructor = () => {
  const loader = new THREE.GLTFLoader()

  loader.load(
    'http://gisellezatonyl.com/models/Alien-Doing-JumpingJacks.glb',
    function(gltf) {
      Scene.add(gltf.scene)
    },
    undefined,
    function(error) {
      console.error(error, 'Cannot load the GLB asset')
    }
  )
}

export default AlienInstructor
