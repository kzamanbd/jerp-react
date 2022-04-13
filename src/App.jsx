import AppLayout from "./components/AppLayout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBarMenu from "./components/SideBarMenu";
import AppRouter from "./navigation/AppRouter";

export default function App() {
    return (
        <AppLayout>
            <Header />
            <SideBarMenu />
            <main id="main-section" className="main-section">
                <AppRouter/>
            </main>
            <Footer />
        </AppLayout>
    );
}