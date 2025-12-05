import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>

          {/* MODULE 1 */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/module01-ros2/intro-ros2">
            Module 1 — ROS 2: The Robotic Nervous System
          </Link>

          {/* MODULE 2 */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/module02-digital-twin/intro-digital-twin">
            Module 2 — The Digital Twin (Gazebo & Unity)
          </Link>

          {/* MODULE 3 */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/module03-isaac-brain/intro-isaac-brain">
            Module 3 — The AI-Robot Brain (NVIDIA Isaac)
          </Link>

          {/* MODULE 4 */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/module04-vla-humanoid/intro-vla">
            Module 4 — Vision-Language-Action + Capstone
          </Link>

        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Physical AI & Humanoid Robotics Book">
      <HomepageHeader />

      <main className="container margin-vert--lg">
        <div style={{ textAlign: 'center', fontSize: '1.2rem', opacity: 0.85 }}>
          <p>
            Explore the full roadmap of humanoid robotics — sensors, digital twins, AI control,
            and full autonomous skill pipelines.
          </p>
        </div>
      </main>
    </Layout>
  );
}
