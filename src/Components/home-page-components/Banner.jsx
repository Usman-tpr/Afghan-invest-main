import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useTranslation } from 'react-i18next';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: 'linear',
    ltr: true,
  };

  const { t } = useTranslation();


  return (
    <div className="banner">
      <Slider {...settings}>
        <div className="banner-item banner-text" >
          <div className="banner-caption">
            <h1 className="text-4xl font-bold"><span className='text-white'>{t('home-banner.slider-ist.heading')}</span></h1>
            <p className='mt-5'>{t('home-banner.slider-ist.description')}</p>
           <button class="glow-on-hover mt-5" type="button">{t('home-banner.redirect-btn')}</button>

          </div>
        </div>
        <div className="banner-item banner-text-1">
          <div className="banner-caption">
            <h1 className="text-4xl font-bold"><span className='text-white'>{t('home-banner.slider-2nd.heading')}</span></h1>
            <p className='mt-5'>{t('home-banner.slider-2nd.description')}</p>
           <button class="glow-on-hover mt-5" type="button">{t('home-banner.redirect-btn')}</button>

          </div>
        </div>
        <div className="banner-item banner-text-2">
          <div className="banner-caption">
            <h1 className="text-4xl font-bold"><span className='text-white'>{t('home-banner.slider-3rd.heading')}</span></h1>
            <p className='mt-5'>{t('home-banner.slider-3rd.description')}</p>
           <button class="glow-on-hover mt-5" type="button">{t('home-banner.redirect-btn')}</button>

          </div>
        </div>
        <div className="banner-item banner-text-3">
          <div className="banner-caption">
            <h1 className="text-4xl font-bold"><span className='text-white'>{t('home-banner.slider-4th.heading')}</span></h1>
            <p className='mt-5'>{t('home-banner.slider-4th.description')}</p>
           <button class="glow-on-hover mt-5" type="button">{t('home-banner.redirect-btn')}</button>

          </div>
        </div>
        <div className="banner-item banner-text-3">
          <div className="banner-caption">
            <h1 className="text-4xl font-bold"><span className='text-white'>{t('home-banner.slider-5th.heading')}</span></h1>
            <p className='mt-5'>{t('home-banner.slider-5th.description')}</p>
           <button class="glow-on-hover mt-5" type="button">{t('home-banner.redirect-btn')}</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
