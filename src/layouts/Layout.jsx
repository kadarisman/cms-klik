import Header from "@/layouts/part/Header"
import Footer from "@/layouts/part/Footer"

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
export default Layout