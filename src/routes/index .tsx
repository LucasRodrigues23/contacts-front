import { Navigate, Route } from "react-router"
import { Routes } from "react-router-dom"
import { Dashboard } from "../pages/dashboard"
import { LoginPage } from "../pages/login"
import { ProtectRoutes } from "../components/ProtectedRoutes"


export const SampleRoutes = () => {
    return (
        <Routes>
            <Route element={<ProtectRoutes />}>
                <Route path='/' element={<Dashboard />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>

    )
}