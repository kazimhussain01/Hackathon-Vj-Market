'use client'
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { Toaster } from "react-hot-toast"

const Providers = ({ children }: { children: React.ReactNode }) => {
    return(
        <Provider store={store}>    
            {children}
            <Toaster/>
        </Provider>
    )
}

export default Providers;