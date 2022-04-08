import { Header } from "../common/HeaderComponent"
import 'bootstrap/dist/css/bootstrap.min.css';

export const NormalPage = ({children}) => {

    return (
        <div className="container-fluid">
            <Header expand="lg" fixed="top" dark color="dark" />
            <div className="mt-5 py-1"></div>
            <div className="container">
                {children}
            </div>
        </div>
    )
}