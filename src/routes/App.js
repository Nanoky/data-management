import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home/page";
import { DataPage } from "../pages/data/page";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/items" element={<DataPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;