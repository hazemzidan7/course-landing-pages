import Image from 'next/image';
import type { CourseImageRef } from '@/lib/courses/types';

interface CourseImageProps {
  image?: CourseImageRef;
  placeholderLabel: string;
  placeholderPrefix?: string;
  priority?: boolean;
  sizes?: string;
}

// Renders a real course photo via next/image when the Course data provides
// one. Until then, shows a clearly marked local placeholder so no stock or
// fake photography is used. Swap in a real `image` on the Course object —
// no component changes needed.
export function CourseImage({ image, placeholderLabel, placeholderPrefix = 'Photo placeholder', priority, sizes }: CourseImageProps) {
  if (image) {
    return (
      <div className="course-image">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes ?? '(max-width: 767px) 100vw, 50vw'}
          style={{ objectFit: 'cover' }}
        />
      </div>
    );
  }

  return (
    <div className="course-image course-image--placeholder">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/placeholder.svg" alt="" aria-hidden="true" />
      <span className="course-image__badge">
        {placeholderPrefix} — {placeholderLabel}
      </span>
    </div>
  );
}
