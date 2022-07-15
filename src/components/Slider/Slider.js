import { useState } from "react"
import { Box, CardMedia } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs } from "swiper"
import { CLOUDINARY_BASE_URL } from "../../constants/constants"

export default function Slider({ images }) {
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
                image={CLOUDINARY_BASE_URL + image.src}
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
                image={CLOUDINARY_BASE_URL + image.src}
                alt={""}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Box>
  )
}
