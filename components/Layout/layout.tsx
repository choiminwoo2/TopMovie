import { Fragment } from "react";
import Header from './header'
type childPorps = {
    children ?: JSX.Element
}
const Layout = (props : childPorps) => {
    return (
        <Fragment>
            <Header />
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout;