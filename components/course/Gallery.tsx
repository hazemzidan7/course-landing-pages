import type { CourseGalleryImage } from '@/lib/courses/types';
import { CourseImage } from '@/components/ui/CourseImage';

export function Gallery({ gallery }: { gallery?: CourseGalleryImage[] }) {
  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="section gallery">
      <h2>Real Training Experience</h2>
      <div className="gallery__grid">
        {gallery.map((item, index) => (
          <figure key={item.alt} className="gallery__item">
            <CourseImage image={item.src ? { src: item.src, alt: item.alt } : undefined} placeholderLabel={`Gallery photo ${index + 1}`} />
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  );
}
