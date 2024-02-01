import { createContext, Dispatch, useContext, useReducer } from 'react'
import { InfoMenuItem, Planet } from '@/app/types'

type PlanetMenuState = {
  info: InfoMenuItem
  menuOpen: boolean
}

type PlanetMenuAction =
  | { type: 'SET_INFO'; info: InfoMenuItem }
  | { type: 'OPEN_MENU' }
  | { type: 'CLOSE_MENU' }

const initialState: PlanetMenuState = {
  info: 'overview',
  menuOpen: false,
}

export const PlanetMenuContext = createContext({} as PlanetMenuState)
export const PlanetMenuDispatchContext = createContext(
  {} as Dispatch<PlanetMenuAction>
)

export function PlanetMenuProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [planetMenu, dispatch] = useReducer(planetMenuReducer, initialState)

  return (
    <PlanetMenuContext.Provider value={planetMenu}>
      <PlanetMenuDispatchContext.Provider value={dispatch}>
        {children}
      </PlanetMenuDispatchContext.Provider>
    </PlanetMenuContext.Provider>
  )
}

export function usePlanetMenu() {
  return useContext(PlanetMenuContext)
}

export function usePlanetMenuDispatch() {
  return useContext(PlanetMenuDispatchContext)
}

function planetMenuReducer(state: PlanetMenuState, action: PlanetMenuAction) {
  console.log('planetMenuReducer', state, action)
  switch (action.type) {
    case 'SET_INFO':
      return { ...state, info: action.info }
    case 'OPEN_MENU':
      return { ...state, menuOpen: true }
    case 'CLOSE_MENU':
      return { ...state, menuOpen: false }
  }
}
