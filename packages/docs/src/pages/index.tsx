import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


import styles from './index.module.css';

const LogoHorizontal = require('@site/static/img/irHorizontal.svg').default;
const LogoHorizontalReversed = require('@site/static/img/irHorizontal--reversed.svg').default;
const LogoVerticalReversed = require('@site/static/img/irVertical--reversed.svg').default;
const LogoVerticalDark = require('@site/static/img/irVertical--dark.svg').default;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const {isDarkTheme} = useThemeConfig();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {siteConfig.<LogoVerticalDark className={styles.featureSvg} role="img" style={{width:"100%",aspectRatio:0.5, height:150, contentFit:"cover"}}/>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg homePageButton"
            to="/face-detection">
            Face Detection
          </Link>
          <Link
              className="button button--secondary button--lg homePageButton"
              to="/image-labeling">
            Image Labeling
          </Link>
          <Link
              className="button button--secondary button--lg homePageButton"
              to="/object-detection">
            Object Detection
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}