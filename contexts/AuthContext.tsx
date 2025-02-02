import { getProfileService } from "@/services/auth-service";
import { createContext, useEffect, useState } from "react";

export const AuthStoreContext = createContext<any>(null);

const AuthStoreProvider = ({children}: any) => {
    //global state (variable)
    const [isAuth, setIsAuth] = useState(false);
    const [profile, setProfile] = useState(false);
    const [isAuthLoading, setIsAuthLoading] = useState(true);

    const initAuth = async () => {
        try {
            const res = await getProfileService();  
            if (res.data.data.user){
                setProfile(res.data.data.user);
                setIsAuth(true);  //update isAth เป็น true เมื่อ Login สำเร็จ
            } else {
                setIsAuth(false);
            }
        } catch (error) {
            setIsAuth(false); // 401 token หมดอายุ หรือ ไม่ใช่ token ในระบบ
        } finally {
            setIsAuthLoading(false);
        }
    }

    useEffect(() => {
        initAuth();
    },[]);

    const onUpdateAuthData = async () => {
        const res = await getProfileService();  
        if (res.data.data.user){
            setProfile(res.data.data.user);
            setIsAuth(true);  //update isAth เป็น true เมื่อ Login สำเร็จ
        } else {
            setIsAuth(false);
        }
    };

    const onLogout = () => {
        setIsAuth(false);
        setProfile(null!); //เครื่องหมาย ! หมายถึงบังคับให้เป็น null
    }
    
    const authStoreData = {
        isAuth: isAuth,
        onUpdateAuthData: onUpdateAuthData,
        profile: profile,
        isAuthLoading: isAuthLoading,
        onLogout: onLogout
    }

    return (
        <AuthStoreContext.Provider value={authStoreData}>
            {children}
        </AuthStoreContext.Provider>
    )
}

export default AuthStoreProvider;