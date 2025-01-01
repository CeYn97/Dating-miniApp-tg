import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/Subscribe.css";

interface SubscriptionPlan {
  id: number;
  title: string;
  subscribeInfo: string;
  duration: string;
  description: string;
  price: string;
}

const Subscribe: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const subscriptionPlans: SubscriptionPlan[] = [
    {
      id: 1,
      subscribeInfo: " У тебя активна подписка БЕЗЛИМИТ до 29.12",
      title: "БЕЗЛИМИТ",
      duration: "на 1 месяц",
      description:
        "Безлимитное количество карточек с вопросами для свиданий на 1 месяц",
      price: "2500 ₽",
    },
    {
      id: 2,
      subscribeInfo: "У тебя осталось 15 карточек",
      title: "10 КАРТОЧЕК",
      duration: "",
      description: "10 карточек с вопросами для свиданий",
      price: "750 ₽",
    },
    {
      id: 3,
      subscribeInfo: " У тебя активна подписка БЕЗЛИМИТ на 3 месяца",
      title: "БЕЗЛИМИТ",
      duration: "на 3 месяца",
      description:
        "Безлимитное количество карточек с вопросами для свиданий на 1 месяц",
      price: "5000 ₽",
    },
  ];

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="subscription-page">
      <header className="subscription-header">
        <h1>подписка</h1>
        <p>{subscriptionPlans[activeIndex]?.subscribeInfo}</p>
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
                } ${plan.id === 2 ? "special-card" : ""}`}
              >
                <h2>{plan.title}</h2>
                {plan.duration && <p className="duration">{plan.duration}</p>}
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
