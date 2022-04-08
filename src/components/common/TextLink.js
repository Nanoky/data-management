import { Link } from "react-router-dom"

export const TextLink = ({to, children, ...props}) => {

    return (
        <Link to={to} {...props} className="text-reset text-decoration-none">
            {children}
        </Link>
    )
}