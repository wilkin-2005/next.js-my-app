
import "@/src/app/globals.css";
import styles from "@/src/components/hero/hero.module.css";

interface heroProps {
  title: string;
  imgIds: number;
}

export default function Hero({ title, imgIds } : heroProps)
{
    /* Wilmers Hero-sektion */
    return (
      <section className="">
        <div className={styles.imgGrid}>
          {/* imgIds gör att det inte blir samma bilder på de olika Hero:s som finns på olika sidor. */}
          <img alt="" src={"https://picsum.photos/700/350?random=" + 11*imgIds} />
          <img alt="" src={"https://picsum.photos/700/350?random=" + 21*imgIds} />
          <img alt="" src={"https://picsum.photos/700/350?random=" + 31*imgIds} />
        </div>

        <div>
          {/* Hejsan React och Next.js! */}
          <h1 className="main-header">{title}</h1>

          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id nisi magna. Vivamus pretium diam at eros suscipit fringilla. Vivamus id felis tortor. Nullam id augue massa. Curabitur laoreet fringilla magna vel vulputate. Sed nec sapien egestas, commodo arcu nec, finibus odio. Aliquam condimentum ante sodales imperdiet tempus. Proin gravida est nec enim porta, nec ultricies magna vestibulum. Aenean non sapien et nunc consequat placerat nec at felis. Sed varius vel metus sed porttitor. Nunc vel ultrices sem.
          </p>
          
          {/* <a className={styles.button}>Knapp 1</a>
          <a className={styles.button}>Knapp 2</a> */}
        </div>
      </section>
    );
}