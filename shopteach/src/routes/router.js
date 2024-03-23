import Home from "../components/pages/Home/home"
import CartShopping from "../components/pages/Cart/cartShopping"
import SignIn from "../components/pages/UserAuth/signIn/signIn"
import SignUp from "../components/pages/UserAuth/signUp/signUp"
import ForgotPassword from "../components/pages/ForgotPassword/ForgotPassword"
import Profile from "../components/pages/Profile/Profie"
import Order from "../components/pages/Profile/Order"
import SmartPhoneProduct from "../components/pages/CategoryProduct/SmartPhoneProduct/SmartPhoneProduct"
import BrandPhone from "../BrandProduct/BrandPhone/BrandPhone"
import PracticalShipping from "../practical/FreeShiping/PracticalShipping"
import FlashSale from "../FlashSale/FlashSale"
import Outstanding from "../Outstanding/Outstanding"
import ProductPage from "../ProductPage/ProductPage"
import ProductFilterPhone from "../components/pages/ProductFilterSearch/ProductPhone/ProductFilterPhone"
import CheckOut from "../CheckOut/CheckOut"
import InforCheckOut from "../CheckOut/InforCheckOut"
const publicRouter=[
    {
        path:'/',
        component:Home
    },
    {
        path:'/cart',
        component:CartShopping
    },
    {
        path:'/signIn',
        component:SignIn,
        layout:null
    },
    {
        path:'/signUp',
        component:SignUp,
        layout:null
    },
    {
        path:'/forgotPassword',
        component:ForgotPassword,
        layout:null
    },
    {
        path:'/profile',
        component:Profile,
    },
    {
        path:'/order',
        component:Order,
    },
    {
        path:'/productSmartPhone',
        component:SmartPhoneProduct
    },
    {
        path:'/brandphone',
        component:BrandPhone
    },
    {
        path:'/practicalShipping',
        component:PracticalShipping
    },
    {
        path:'/flashsale',
        component:FlashSale
    },
    {
        path:'/outstanding',
        component:Outstanding
    },
    {
        path:'/productpage/:idProduct',
        component:ProductPage
    },
    {
        path:'/productFilterPhone',
        component:ProductFilterPhone
    },
    {
        path:'/checkOut',
        component:CheckOut
    },
    {
        path:'/inforCheckOut',
        component:InforCheckOut
    },

]

export {
    publicRouter
}