import React, {ReactNode} from "react";
import Header from "./header";
import Seo from "./seo";
interface ILayout{
    pageTitle:string;
    children:ReactNode | JSX.Element
}
const Layout=({pageTitle,children}:ILayout) => {
    return <div>
        <Seo title={pageTitle} />

        <Header />
        <main>
            {children}
        </main>
    </div>
}
export default Layout