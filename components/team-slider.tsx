"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import TeamMemberCard from './team-member-card';
import AnimatedSection from './animated-section';
import { type TeamMember } from "@/lib/api" ;
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// interface TeamMember {
//   id: number;
//   name: string;
//   role: string;
//   image: string;
//   skills?: string[]
//   social_links?: {
//     twitter?: string;
//     linkedin?: string;
//     github?: string;
//   };
// }

interface TeamSliderProps {
  members: TeamMember[];
}

export default function TeamSlider({ members }: TeamSliderProps) {
  return (
    <div className="relative py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="team-slider"
      >
        {members.map((member, index) => (
          <SwiperSlide key={member.id} className="py-4">
            <AnimatedSection delay={index * 0.1} className="hover-scale">
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                socialLinks={member.social_links}
                href={`/team/${member.id}`}
                skills={member.skills}
              />
            </AnimatedSection>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .team-slider .swiper-button-next,
        .team-slider .swiper-button-prev {
          color: #3b82f6;
          background: rgba(0, 0, 0, 0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .team-slider .swiper-button-next:hover,
        .team-slider .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: scale(1.1);
        }

        .team-slider .swiper-button-next:after,
        .team-slider .swiper-button-prev:after {
          font-size: 1.2rem;
        }

        .team-slider .swiper-pagination-bullet {
          background: #3b82f6;
          opacity: 0.5;
        }

        .team-slider .swiper-pagination-bullet-active {
          opacity: 1;
          background: #3b82f6;
        }
      `}</style>
    </div>
  );
}
