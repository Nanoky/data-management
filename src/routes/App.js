import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home/page";
import { ItemPage } from "../pages/item/page";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/items" element={<ItemPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;