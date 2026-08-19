import React, { useEffect, useRef, useState } from 'react';
import bg3 from '../assets/bg-3.png';
import bg4 from '../assets/bg-4.png';
import bg5 from '../assets/bg-5.png';
import bg6 from '../assets/bg-6.png';
import bg7 from '../assets/bg-7.png';
import bg8 from '../assets/bg-8.png';
import secondaryBg from '../assets/secondary-bg.png';

const photos = [
  {
    src: bg6,
    alt: 'Youngsters Services crew in branded jerseys during a residential move',
    caption: 'Residential Moving',
    tag: 'Moving'
  },
  {
    src: bg5,
    alt: 'Trailer packed with household items after a junk removal job',
    caption: 'Loaded & Hauling',
    tag: 'Junk Removal'
  },
  {
    src: bg7,
    alt: 'Youngsters Services team in front of the moving truck',
    caption: 'The Crew',
    tag: 'Our Team'
  },
  {
    src: bg8,
    alt: 'Cargo van packed with boxes, furniture, and household junk',
    caption: 'Full Van Pickup',
    tag: 'Junk Removal'
  },
  {
    src: bg3,
    alt: 'Crew carrying furniture during a winter residential move',
    caption: 'Home Moves',
    tag: 'Moving'
  },
  {
    src: bg4,
    alt: 'Team member carefully handling a refrigerator',
    caption: 'Appliance Delivery',
    tag: 'Delivery'
  },
  {
    src: secondaryBg,
    alt: 'Crew moving a large vending machine on a dolly',
    caption: 'Heavy Item Moves',
    tag: 'Moving'
  }
];

const WorkGallery = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const count = photos.length;

  const goTo = (next) => {
    setIndex((next + count) % count);
  };

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % photos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const offsetFor = (i) => {
    let offset = i - index;
    if (offset > count / 2) offset -= count;
    if (offset < -count / 2) offset += count;
    return offset;
  };

  const active = photos[index];

  return (
    <section className="work-gallery">
      <div className="container">
        <h2 className="section-title">Photos On the Job</h2>
        <p className="section-subtitle">
          Real moves and junk removal from our Guelph crew
        </p>

        <div
          className="work-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
            setPaused(true);
          }}
          onTouchEnd={(e) => {
            const delta = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(delta) > 40) {
              goTo(index + (delta < 0 ? 1 : -1));
            }
            setPaused(false);
          }}
        >
          <button
            type="button"
            className="work-carousel-nav prev"
            onClick={() => goTo(index - 1)}
            aria-label="Previous photo"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="work-carousel-stage" aria-live="polite">
            {photos.map((photo, i) => {
              const offset = offsetFor(i);
              const position =
                offset === 0 ? 'active' : offset === -1 ? 'prev' : offset === 1 ? 'next' : 'hidden';
              return (
                <figure
                  key={photo.alt}
                  className={`work-carousel-slide ${position}`}
                  onClick={() => offset !== 0 && goTo(i)}
                >
                  <img src={photo.src} alt={photo.alt} />
                  <figcaption>
                    <span className="work-gallery-tag">{photo.tag}</span>
                    <span className="work-gallery-caption">{photo.caption}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          <button
            type="button"
            className="work-carousel-nav next"
            onClick={() => goTo(index + 1)}
            aria-label="Next photo"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="work-carousel-dots">
          {photos.map((photo, i) => (
            <button
              key={photo.alt}
              type="button"
              className={`work-carousel-dot ${i === index ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Show ${photo.caption}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;
