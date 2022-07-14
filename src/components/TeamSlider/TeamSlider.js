import { Container, Grid, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import Person1 from "../../assets/xperson_transparent.png.pagespeed.ic.csjhCv60Hy.webp"
import Person2 from "../../assets/xperson_transparent_2.png.pagespeed.ic.kQKb75h-nO.webp"
import CardMedia from "@mui/material/CardMedia"
import { Pagination } from "swiper"

export default function TeamSlider() {
  return (
    <Container size="md">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        pagination={true}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h4"
                sx={{
                  textAlign: {
                    md: "left",
                    xs: "center",
                  },
                  color: "#7d7d7d",
                }}
              >
                {`“What's difference between croasan and React ? Both of them is sweet, but croasan
                make me abdominal pain whene I use it a lot”`}
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  textAlign: {
                    md: "left",
                    xs: "center",
                  },
                  color: "#7d7d7d",
                }}
              >
                <cite> — Artyom Harutyunyan</cite>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <CardMedia
                component="img"
                image={Person1}
                alt="green iguana"
                sx={{
                  maxWidth: 400,
                }}
              />
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h4"
                sx={{
                  textAlign: {
                    md: "left",
                    xs: "center",
                  },
                  color: "#7d7d7d",
                }}
              >
                “I hate Front-end , but I also like Back-end, particularly Node JS”
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  textAlign: {
                    md: "left",
                    xs: "center",
                  },
                  color: "#7d7d7d",
                }}
              >
                <cite> — Martin Elizbaryan</cite>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <CardMedia
                component="img"
                image={Person2}
                alt="green iguana"
                sx={{
                  maxWidth: 400,
                }}
              />
            </Grid>
          </Grid>
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}
