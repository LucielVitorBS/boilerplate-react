// Initial state
export const initialState = {
   data: 'data'
}

// Actions

// Action creators

// Reducer
export default (state = initialState, action = {}) => {
   switch (action.type) {
      default:
         return state
   }
}

// Selectors
export const selectState = ({page}) => page 