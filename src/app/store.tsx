import { configureStore, combineReducers } from '@reduxjs/toolkit'      // importo subito il metodo configureStore
import counterReducer from '../features/counter/counterSlice'           
import resetSlice from '../features/slice/resetSlice'                   // importo il file Slice (in questo caso resetSlice)
import toggleSlice from '../features/slice/toggleSlice'                  

export const store = configureStore({
  reducer: {
  counter: counterReducer,
  reset: resetSlice,                                                    // introduco nel reducer il NOME dell'action e il nome della costante che contiene la logica action
  toggle: toggleSlice,
  }
  
})

 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch