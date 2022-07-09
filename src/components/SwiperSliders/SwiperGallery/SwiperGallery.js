import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs } from "swiper"
import CardMedia from "@mui/material/CardMedia"
import { IMAGE_BASE_URL } from "../../../constants/cloudinery"
import Box from "@mui/material/Box"
import { useState } from "react"

export default function SwiperGallery({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <Box>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image) => {
          return (
            <SwiperSlide key={image.src}>
              <CardMedia
                component="img"
                sx={{
                  maxHeight: 500,
                  minHeight: 250,
                  objectFit: "cover",
                  width: "100%",
                }}
                image={IMAGE_BASE_URL + image.src}
                alt={""}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={8}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        style={{ marginTop: 10 }}
      >
        {images.map((image) => {
          return (
            <SwiperSlide key={image.src}>
              <CardMedia
                component="img"
                sx={{
                  height: 100,
                  objectFit: "cover",
                }}
                image={IMAGE_BASE_URL + image.src}
                alt={""}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Box>
  )
}
