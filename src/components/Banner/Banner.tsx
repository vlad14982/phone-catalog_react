import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Banner.module.scss';
import { BANNERS } from '../../constants/constJS';
import React, { useRef } from 'react';
import { BREAKPOINTS } from '../../types/breakpoint';

const initializeSwiperNavigation = (
  swiper: SwiperType,
  prevRef: React.RefObject<HTMLDivElement>,
  nextRef: React.RefObject<HTMLDivElement>,
) => {
  if (swiper.params.navigation) {
    const nav = swiper.params.navigation as {
      prevEl: HTMLElement | null;
      nextEl: HTMLElement | null;
    };

    nav.prevEl = prevRef.current;
    nav.nextEl = nextRef.current;
  }
};

export const Banner: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.banner}>
      <div className={`${styles.bannerContainer} swiper-container`}>
        <div className={styles.swiperButtonPrevCustom} ref={prevRef}></div>
        <div className={styles.swiperButtonNextCustom} ref={nextRef}></div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={swiper =>
            initializeSwiperNavigation(swiper, prevRef, nextRef)
          }
          autoplay={{ delay: 5000 }}
          speed={500}
          loop={true}
        >
          {BANNERS.map((slide, index) => (
            <SwiperSlide key={index}>
              <picture className={styles.slideContainer}>
                <source
                  media={`(min-width: ${BREAKPOINTS.desktop}px)`}
                  srcSet={slide.imageDesktop}
                />
                <source
                  media={`(min-width: ${BREAKPOINTS.tablet}px)`}
                  srcSet={slide.imageTablet}
                />
                <img
                  className={`${styles.slideImage} image`}
                  src={slide.imageMobile}
                  alt={slide.altText}
                  loading="lazy"
                />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
