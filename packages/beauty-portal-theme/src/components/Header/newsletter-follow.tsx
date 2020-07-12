import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { ReactComponent as Follow } from '../../images/icons/follow.svg';
import SocialMenu from '../SocialMenu';
import styles from './header.module.scss';

const NewsletterFollow: FunctionComponent<NewsletterFollowInterface> = ({
  links,
  label,
}) => {
  return (
    <div className={styles.follow}>
      <Link className={styles.followButton} to={'/subscribe'}>
        <Follow />
        <div className={styles.followPopup}>
          <div className="pad20">
            <SocialMenu links={links} />
            <div className={styles.newsletter}>
              <a className={styles.newsletterSubscribeButton} href="/">
                {label}
              </a>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

interface NewsletterFollowInterface {
  label: string;
  links: any;
}

export default NewsletterFollow;
