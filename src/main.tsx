import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./core/store/store";
import ThemeProvider from "./UI/ThemeProvider/ThemeProvider.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Provider>
);
