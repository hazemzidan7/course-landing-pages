import type { CourseGalleryImage } from '@/lib/courses/types';
import type { Dictionary } from '@/lib/i18n/types';
import { CourseImage } from '@/components/ui/CourseImage';

export function Gallery({ gallery, dict }: { gallery?: CourseGalleryImage[]; dict: Dictionary }) {
  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="section gallery">
      <h2>{dict.sections.gallery}</h2>
      <div className="gallery__grid">
        {gallery.map((item, index) => (
          <figure key={item.alt} className="gallery__item">
            <CourseImage
              image={item.src ? { src: item.src, alt: item.alt } : undefined}
              placeholderLabel={`Gallery photo ${index + 1}`}
              placeholderPrefix={dict.courseImage.placeholder}
            />
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  );
}
