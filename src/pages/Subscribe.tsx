import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import 'swiper/css';
import "../styles/Subscribe.css";

interface SubscriptionPlan {
  id: number;
  title: string;
  duration: string;
  description: string;
  price: string;
}

const Subscribe: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const subscriptionPlans: SubscriptionPlan[] = [
    {
      id: 1,
      title: "БЕЗЛИМИТ",
      duration: "на 1 месяц",
      description:
        "Безлимитное количество карточек с вопросами для свиданий на 1 месяц",
      price: "2500 ₽",
    },
    {
      id: 2,
      title: "БЕЗЛИМИТ",
      duration: "на 3 месяца",
      description:
        "Безлимитное количество карточек с вопросами для свиданий на 3 месяца",
      price: "6000 ₽",
    },
    {
      id: 3,
      title: "БЕЗЛИМИТ",
      duration: "на 6 месяцев",
      description:
        "Безлимитное количество карточек с вопросами для свиданий на 6 месяцев",
      price: "10000 ₽",
    },
  ];

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="subscription-page">
      <header className="subscription-header">
        <h1>подписка</h1>
        <p>
          У тебя активна подписка "БЕЗЛИМИТ" <br /> до 29.12
        </p>
      </header>
      <div className="subscription-options">
        <Swiper
          spaceBetween={21}
          slidesPerView={1.5} 
          centeredSlides={true}
          onSlideChange={handleSlideChange}
          className="subscription-swiper"
        >
          {subscriptionPlans.map((plan, index) => (
            <SwiperSlide key={plan.id}>
              <div
                className={`subscription-card ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <h2>{plan.title}</h2>
                <p className="duration">{plan.duration}</p>
                <p className="description">{plan.description}</p>
                <p className="price">{plan.price}</p>
                <button className="renew-button">Продлить</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Subscribe;