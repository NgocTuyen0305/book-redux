import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { useGetAllSliderQuery } from "../redux/api/sliderApi";
import LottieLoading from "../effect/LottieLoading";

const SliderPage = () => {
  const { data, isLoading, error } = useGetAllSliderQuery();
  const [imageSlider, setImageSlider] = useState("");
  const [bannerSlider, setBannerSlider] = useState("");
  // console.log('data: ',data)
  // console.log("image: ", imageSlider);
  console.log("bannerSlider: ", bannerSlider);
  useEffect(() => {
    (async()=>{
      const images = await data?.slider[0].images[0].fileList.map(
        (items) => items.response
      );
      const image = images?.map((items) => items.uploadedFiles[0].url);
      const banners = await data?.slider[0].banner[0].fileList.map(
        (items) => items.response
      );
      const banner = banners?.map((items) => items.uploadedFiles[0].url);
      // console.log('images :',image)
      setBannerSlider(banner)
      setImageSlider(image)
    })()
  }, [data]);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <LottieLoading />
      </div>
    );
  }
  // console.log("slider: ", data);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="md:flex gap-x-3 rounded-md">
        <Carousel autoplay dots={false} className="md:w-[840px]">
          {imageSlider?.map((items,i)=> {
            return(
            <div className="rounded-md" key={i}>
              <img src={items} alt="" className="object-cover overflow-hidden rounded-md"/>
            </div>
          )})}
        </Carousel>
        <div className="md:flex flex-col justify-between hidden">
          {bannerSlider?.map((items,i)=> {
            return (
              <div className="" key={i}>
                <img src={items} alt="" className="rounded-md"/>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
};

export default SliderPage;
