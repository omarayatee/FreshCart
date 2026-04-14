import Image from "next/image";
import FeaturedProducts from "./_Components/FeaturedProducts/FeaturedProducts";
import Slider from "./_Components/Slider/Slider";
import img1 from "../assets/images/image1.png"
import img2 from "../assets/images/image2.png"
import img3 from "../assets/images/image3.png"
// import HomeCategories from "./_Components/HomeCategories/HomeCategories";
import { lazy, Suspense } from "react";
import { HashLoader } from "react-spinners";
const LazyHomeCategoryComponent = lazy( () => import("./_Components/HomeCategories/HomeCategories"))




export default function Home() {
  return (<>
  <Slider heightClass="h-75" listOfImages= {[img1.src, img2.src, img3.src]} />

  <Suspense fallback={<div className="h-screen flex items-center justify-center">
        <HashLoader />
      </div>}>
    <LazyHomeCategoryComponent />
  </Suspense>

  

  <FeaturedProducts />
  
  </>

  );
}
