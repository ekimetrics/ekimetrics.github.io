import React from 'react';
import clsx from 'clsx';
import { MDXProvider } from '@mdx-js/react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import type { Props } from '@theme/BlogPostItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function BlogPostPreview(props: Props): JSX.Element {
  const {
    frontMatter,
    metadata,
    isBlogPostPage = false,
  } = props;

  const { date, permalink, tags, readingTime } = metadata;
  const { title, description, header_image_url, keywords } = frontMatter;

  const headerImageURL = useBaseUrl(header_image_url);
  const imageUrl = useBaseUrl(headerImageURL, { absolute: true });

  const [year, monthIdx, day] = date.substring(0, 10).split('-');
  const formattedDate = `${MONTHS[parseInt(monthIdx, 10) - 1]} ${parseInt(day, 10)}, ${year}`;

  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';

  return (
    <Link
      to={permalink}
      className="card"
      style={{ borderRadius: 10, textDecoration: 'none', color: 'inherit' }}
    >
      <div className="card__image">
        <img
          src={headerImageURL}
          alt={`Header image for ${title}`}
          title={title}
        />
      </div>

      <div className="card__body">
        <Head>
          {keywords?.length && <meta name="keywords" content={keywords.join(',')} />}
          {imageUrl && <meta property="og:image" content={imageUrl} />}
          {imageUrl && <meta name="twitter:image" content={imageUrl} />}
          {imageUrl && <meta name="twitter:image:alt" content={`Image for ${title}`} />}
        </Head>

        <article>
          <header>
            <TitleHeading
              style={{ fontFamily: 'InterCustom', fontSize: 16 }}
              className={clsx('margin-bottom--sm', 'gold')}
            >
              {title}
            </TitleHeading>

            {description && (
              <p style={{ fontFamily: 'InterCustom', fontSize: 14, lineHeight: 1.2 }}>
                {description}
              </p>
            )}

            <div className="margin-vert--md">
              <time dateTime={date} className={styles.blogPostDate}>
                {formattedDate}
                {readingTime && <> · {Math.ceil(readingTime)} min read</>}
              </time>
            </div>
          </header>

          {tags.length > 0 && (
            <footer className="row margin-vert--sm">
              <div className="col">
                {tags.map(({ label, permalink: tagPermalink }) => (
                  <span className="badge badge--primary" key={tagPermalink}>
                    <Link to={tagPermalink}>{label}</Link>
                  </span>
                ))}
              </div>
            </footer>
          )}
        </article>
      </div>
    </Link>
  );
}

export default BlogPostPreview;
