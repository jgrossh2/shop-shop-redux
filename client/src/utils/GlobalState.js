import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';
// establish global state object
// storeContext empty conatiner waiting for data provided as state
const StoreContext = createContext();
const { Provider } = StoreContext;
// used to manage and update state
const StoreProvider = ({ value = [], ...props }) => {
    // state is global state object
    // dispatch is method to execute to update state, looking for action object passed in as argument
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
      });
    // use this to confirm it works!
    console.log(state);
    // value prop allows us to pass in more data for state if needed
    // ...props needed to allow the provider component access to render
    return <Provider value={[state, dispatch]} {...props} />;
};

  const useStoreContext = () => {
    return useContext(StoreContext);
  };

  export { StoreProvider, useStoreContext };
