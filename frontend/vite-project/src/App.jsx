import MainSaler from '../src/page/mainSaler.jsx';
import Footer from '../src/components/shared/Footer/footer.jsx';
import Header_White from '../src/components/shared/Header_White/Header.jsx';
import RegistrationSalesman from '../src/components/page_seller/registrationSalesman/registrationSalesman.jsx';
import MyAds from '../src/components/page_seller/myAds/myAds.jsx';
import Layout from './components/page_seller/myAds/Layout.jsx';
import SubscriptionPage from './components/page_seller/myAds/menuAdmin/SubscriptionPage/subscriptionPage.jsx';
import LoginSalesman from './components/page_seller/loginSalesman/LoginSalesman.jsx';
import Settings from './components/page_seller/myAds/menuAdmin/SettingsPage/settings.jsx';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Message from './components/shared/Message/message.jsx';
import Messages from './components/shared/Messages/messages.jsx';
import Redact from './components/page_seller/myAds/redact/redact.jsx';
import Header from './components/shared/Header_Users/Header.jsx';
import MainUsers from './components/page_users/mainPage/mainUsers.jsx';
import Vehicles from './components/page_users/vehicles/vehicles.jsx';
import Admin from './components/page_admin/admin.jsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/mainUsers"
                        index
                        element={
                            <>
                                <Header />
                                <MainUsers />
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/vehicles"
                        index
                        element={
                            <>
                                <Header />
                                <Vehicles />
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/"
                        element={
                            <>
                                <MainSaler />
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/registrationSalesman"
                        element={
                            <>
                                <Header_White />
                                <RegistrationSalesman />
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/login-sales"
                        element={
                            <>
                                <Header_White />
                                <LoginSalesman />
                                <Footer />
                            </>
                        }
                    />

                    <Route path="/my-ads" element={<Layout />}>
                        <Route index element={<MyAds />} />
                        <Route path="messages" element={<Message />} />
                        <Route path="/my-ads/subscription" element={<SubscriptionPage />} />
                        <Route path="profile" element={<Settings />} />
                    </Route>

                    <Route
                        path="/redact"
                        element={
                            <>
                                <Header_White />
                                <Redact />
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/messages"
                        element={
                            <>
                                <Header_White />
                                <Messages />
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/admin"
                        element={
                            <>
                                <Admin />
                                <Footer />
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
