import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

interface ExpandableImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const ExpandableImage: React.FC<ExpandableImageProps> = ({ src, alt = '', className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close]);

  return (
    <>
      <button
        type="button"
        className={`image-expand__button ${className || ''}`}
        onClick={open}
        aria-label="Open image in full view"
      >
        <img src={src} alt={alt} />
        <span className="image-expand__hint">Click to expand</span>
      </button>

      {isOpen &&
        createPortal(
          <div
            className="image-expand__overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            onClick={close}
          >
            <div className="image-expand__dialog" onClick={(e) => e.stopPropagation()}>
              <img src={src} alt={alt} />
              <button
                type="button"
                className="image-expand__close"
                aria-label="Close image preview"
                onClick={close}
              >
                ×
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default ExpandableImage;


