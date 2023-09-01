import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

import {particlesConfig} from './particles-config'

export const ParticlesBackground = () => {

  const particlesInit = useCallback((engine) => {
    loadFull(engine)
  }, [])


  return (
    <>
      <Particles
        options={particlesConfig}
        init={particlesInit}
        />
    </>
  )
}
