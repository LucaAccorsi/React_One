import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: string
}

const initialState: CounterState = {
  value: "all",
}

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {

    setToggle: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToggle } = toggleSlice.actions

export default toggleSlice.reducer