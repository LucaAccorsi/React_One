import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: string
}

const initialState: CounterState = {
  value: "",
}

export const resetSlice = createSlice({
  name: 'reset',
  initialState,
  reducers: {

    setTerm: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTerm } = resetSlice.actions

export default resetSlice.reducer