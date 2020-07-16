import React, { FunctionComponent, useState } from 'react';
import { Preloader, Oval } from 'react-preloader-icon';
import { Link } from 'gatsby';
import classNames from 'classnames';
import SocialMenu from '../SocialMenu';
import { getYouTubeId } from '../../helpers/youtube';
import { urlFor } from '../../helpers/imageUrl';
import { ReactComponent as Skill } from '../../images/icons/skill.svg';
import { ReactComponent as Youtube } from '../../images/icons/youtube.svg';
import { ReactComponent as IconTime } from '../../images/icons/time.svg';
import styles from './styles.module.scss';

const ArticleHeader: FunctionComponent<ArticleHeaderInterface> = ({
  article,
  type,
  socialLinks,
  playLabel,
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoSourceUrl, setVideoSourceUrl] = useState('');
  const [videoLoading, setVideoLoading] = useState(false);
  const {
    headline,
    subheading,
    heroImage,
    heroVideo,
    author,
    skillLevel,
    time,
    _rawHeroImage,
    _rawHeroVideo,
    _type,
  } = article;

  const playVideo = (event: any) => {
    setVideoLoading(true);
    setVideoSourceUrl(
      `https://www.youtube.com/embed/${getYouTubeId(
        event.currentTarget.dataset.url
      )}?autoplay=1`
    );
    setShowVideo(true);
  };

  const onFrameLoad = () => {
    setVideoLoading(false);
  };

  const renderVideoThumbnail = (image, alt) => {
    return (
      <>
        <link
          rel="preload"
          as="image"
          href={`${urlFor(image)
            .width(665)
            .height(374)
            .quality(80)
            .fit('max')
            .auto('format')
            .url()
            .toString()}`}
        />

        <figure>
          <picture
            className="bp-image__placeholder"
            style={{
              paddingTop: `56.25%`,
              background: `url(${image.asset.metadata.lqip})`,
              backgroundSize: 'cover',
            }}
          >
            <source
              media="screen and (min-width: 1025px)"
              srcSet={`${urlFor(image)
                .width(665)
                .height(374)
                .quality(80)
                .fit('max')
                .auto('format')
                .url()
                .toString()}`}
            />
            <source
              media="screen and (min-width: 560px)"
              srcSet={`${urlFor(image)
                .width(436)
                .height(245)
                .quality(80)
                .fit('max')
                .auto('format')
                .url()
                .toString()}`}
            />
            <source
              media="screen and (min-width: 320px)"
              srcSet={`${urlFor(image)
                .width(414)
                .height(232)
                .fit('max')
                .auto('format')
                .url()
                .toString()}`}
            />
            <img
              src={urlFor(image)
                .width(436)
                .height(245)
                .quality(80)
                .fit('max')
                .auto('format')
                .url()}
              alt={alt}
            />
          </picture>
        </figure>
      </>
    );
  };

  return (
    <div className={styles.header}>
      <h1
        className={classNames(
          styles.headingPrimary,
          type === 'gallery' ? styles.textCenter : null
        )}
      >
        {headline}
      </h1>
      <p
        className={classNames(
          styles.textSecondary,
          type === 'gallery' ? styles.textCenter : null
        )}
      >
        {subheading}
      </p>
      <div className={styles.articleInfoWrapper}>
        <div className={styles.articleInfo}>
          {author && author.name && (
            <div className={styles.authorInfo}>
              <Link
                className={styles.link}
                to={author.slug ? `/${author.slug.current}` : `/${author.name}`}
              >
                <span>{author.name}</span>
              </Link>

              <span className={styles.divider}>|</span>
            </div>
          )}
          {(article.publishedAt || article._updatedAt) && (
            <span>{article.publishedAt || article._updatedAt}</span>
          )}
        </div>
        <SocialMenu links={socialLinks} />
      </div>
      {/* TODO: Use generic `Video` component for hero video to avoid duplicate code  */}
      {/* {renderHeroImage(_rawHeroImage, heroImage.alt)} */}
      {!(_type === 'galleryArticle') && (
        <div className={styles.heroImage}>
          {!showVideo &&
            !heroVideo &&
            renderVideoThumbnail(_rawHeroImage, heroImage.alt)}
          {!showVideo && heroVideo && !videoLoading && (
            <>
              {heroVideo.heroImage
                ? renderVideoThumbnail(
                    _rawHeroVideo.heroImage,
                    heroVideo.heroImage.alt
                  )
                : renderVideoThumbnail(_rawHeroImage, heroImage.alt)}
              <button
                type="button"
                className={styles.iconVideo}
                onClick={playVideo}
                data-url={heroVideo.url}
              >
                <Youtube />
                <span className="srOnly">{playLabel}</span>
              </button>
            </>
          )}
          {videoLoading && (
            <div className={styles.preloaderIcon}>
              <Preloader
                use={Oval}
                size={60}
                strokeWidth={11}
                strokeColor="#000"
                duration={500}
              />
            </div>
          )}
          {showVideo && (
            <iframe
              width="560"
              height="399"
              src={videoSourceUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={onFrameLoad}
            ></iframe>
          )}
        </div>
      )}
      {(skillLevel || time) && (
        <div className={styles.tutorialInfo}>
          {time && (
            <div className={styles.tutorialInfoBlock}>
              <div>
                <strong>Time</strong>
                <span>{time} mins</span>
              </div>
              <div className={styles.icon}>
                <IconTime className={'active'} />
              </div>
            </div>
          )}
          {skillLevel && (
            <div className={styles.tutorialInfoBlock}>
              <div>
                <strong>Skill</strong>
                <span>{skillLevel}</span>
              </div>
              <div className={classNames('b-skill', styles.icon)}>
                <Skill
                  className={classNames(skillLevel === 'easy' && 'active')}
                />
                <Skill
                  className={classNames(skillLevel === 'medium' && 'active')}
                />
                <Skill
                  className={classNames(skillLevel === 'difficult' && 'active')}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

interface ArticleHeaderInterface {
  article: any;
  type: any;
  socialLinks: any;
  playLabel?: string;
}

export default ArticleHeader;
