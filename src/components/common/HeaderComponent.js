import { useEffect, useState } from "react";
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from "reactstrap";
import { TextLink } from "./TextLink";
import { useMobileViewDetector } from "./utilities/Window";


export const Header = ({brand, ...props}) => {
    const [open, setOpen] = useState(
        (props.expand) ? 
            (props.expand == "sm" ||
            props.expand == "md" || 
            props.expand == "lg" || 
            props.expand == true
            ) 
        : false
    );
    const isMobile = useMobileViewDetector()

    useEffect(() => {

        let expand = (props.expand) ? 
            (props.expand == "sm" ||
            props.expand == "md" || 
            props.expand == "lg" || 
            props.expand == true
            ) 
        : false;

        setOpen((isMobile) ? false : expand);
    });

    return (
        <div>
            <Navbar {...props} expand={open}>
                <NavbarToggler onClick={() => {setOpen(!open)}} />
                <Collapse navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink>
                                <TextLink to="/">
                                    Home
                                </TextLink>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <TextLink to="/items">
                                    Items
                                </TextLink>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}