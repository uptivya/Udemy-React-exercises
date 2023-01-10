import { Routes, Route, Navigate } from "react-router-dom"
import { ContactPage, HomePage, LoginPage, Error404, Navbar } from "."
import { UserProvider } from "./context/UserProvider"

export const MainPage = () => {
  return (
    <UserProvider>
        <h1>Main Page</h1>
        <Navbar />
        <hr/>
        <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='contact' element={ <ContactPage /> } />
            <Route path='login' element={ <LoginPage /> } />
            <Route path='404' element={ <Error404 /> } />
            <Route path='/*' element={ <Navigate to='404' /> } />
        </Routes>
    </ UserProvider>
  )
}
