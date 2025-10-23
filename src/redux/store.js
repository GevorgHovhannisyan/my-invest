import { configureStore,   } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"; 
import { rootReducer } from ".";

const store = configureStore({
    reducer: rootReducer,
    // middleware: getDefaultMiddleware => getDefaultMiddleware({
    //     serializableCheck: false
    // }).concat(githubApi.middleware)
})

setupListeners(store.dispatch)

export default store