import { lazy } from "react";

const Home = lazy(() => import("../pages/home/index"))
const About = lazy(() => import("../pages/aboutme/index"))
const Contact = lazy(() => import("../pages/contact/index"))
const Catalog = lazy(() => import("../pages/catalog/index"))
const ProductDetails = lazy(() => import("../pages/product-details/index"))
const Information = lazy(() => import('../pages/information/index'))
const Services = lazy(() => import('../pages/services/index'))
const News = lazy(() => import('../pages/news/index'))
const AboutMe = lazy(() => import("../pages/aboutme/index"))

export const RouterData = [
    {
        id : 1,
        path : "/",
        component : <Home/>
    },
    {
        id : 2,
        path : "/aboutme",
        component : <About/>
    },
    {
        id : 3,
        path : "/contact",
        component : <Contact/>
    },
    {
        id : 4,
        path : "/catalog/:id",
        component : <Catalog/>
    },
    {
        id : 5,
        path : "/product/:id",
        component : <ProductDetails/>
    },
    {
        id : 6,
        path : "/custumer",
        component : <Information/>
    },
    {
        id : 7,
        path : "/services",
        component : <Services/>
    },
    {
        id : 8,
        path : "/news",
        component : <News/>
    },
    {
        id : 9,
        path : "/aboutme",
        component : <AboutMe/>
    },
]