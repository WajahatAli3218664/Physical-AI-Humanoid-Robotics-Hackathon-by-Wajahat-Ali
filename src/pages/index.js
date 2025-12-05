import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
    >
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.heroTitle}>
              Physical AI & Humanoid Robotics
            </Heading>
            <p className={styles.heroSubtitle}>
              From ROS 2 to Sensors, Digital Twins, NVIDIA Isaac, and Vision-Language-Action
              — a practical roadmap to building the next generation of humanoid robots.
            </p>

            <div className={styles.heroCTAs}>
              <Link
                className={clsx('button button--secondary button--lg', styles.primaryCta)}
                to="/docs/module01-ros2/intro-robotics-ros2"
              >
                🚀 Start Module 1 – ROS 2 Basics
              </Link>
              <Link
                className={clsx('button button--outline button--lg', styles.secondaryCta)}
                to="/docs/intro"
              >
                📚 Read the Book Overview
              </Link>
            </div>

            <div className={styles.heroMeta}>
              <span className={styles.pill}>Beginner → Intermediate</span>
              <span className={styles.pill}>Project-based learning</span>
              <span className={styles.pill}>Humanoid-focused</span>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroCard}>
              <p className={styles.heroCardLabel}>Course Snapshot</p>
              <ul className={styles.heroList}>
                <li>✅ 4 Modules · ROS 2 → Sensors → Digital Twin → AI Brain</li>
                <li>✅ Hands-on examples & code snippets</li>
                <li>✅ Simulation-first: Gazebo, Unity, Isaac</li>
                <li>✅ Capstone: Humanoid with natural language control</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroGlow} />
    </header>
  );
}

function ModulesOverview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Course Roadmap
        </Heading>
        <p className={styles.sectionSubtitle}>
          The book is structured like a real robotics curriculum: each module builds
          on the previous one, taking you from zero to a working humanoid in simulation.
        </p>

        <div className={styles.modulesGrid}>
          <div className={styles.moduleCard}>
            <p className={styles.moduleTag}>Module 1</p>
            <h3 className={styles.moduleTitle}>The Robotic Nervous System (ROS 2)</h3>
            <p className={styles.moduleText}>
              Learn how a robot “thinks in messages”: nodes, topics, services, actions,
              parameters and CLI tools — all using ROS 2 as the communication backbone.
            </p>
            <ul className={styles.moduleBullets}>
              <li>ROS 2 nodes & topics mental model</li>
              <li>Services, actions & parameters</li>
              <li>CLI tools, launch files, workspaces</li>
            </ul>
            <Link
              className={styles.moduleLink}
              to="/docs/module01-ros2/intro-robotics-ros2"
            >
              Read Module 1 →
            </Link>
          </div>

          <div className={styles.moduleCard}>
            <p className={styles.moduleTag}>Module 2</p>
            <h3 className={styles.moduleTitle}>Humanoid Sensors & Perception</h3>
            <p className={styles.moduleText}>
              Give your humanoid “eyes, ears, and a body sense” using cameras, IMUs,
              force/torque sensors and sensor fusion pipelines.
            </p>
            <ul className={styles.moduleBullets}>
              <li>Camera & vision pipelines in ROS 2</li>
              <li>IMU-based balance & orientation</li>
              <li>Force/torque & proprioception basics</li>
            </ul>
            <Link
              className={styles.moduleLink}
              to="/docs/module02-sensors/intro-humanoid-sensors"
            >
              Read Module 2 →
            </Link>
          </div>

          <div className={styles.moduleCard}>
            <p className={styles.moduleTag}>Module 3</p>
            <h3 className={styles.moduleTitle}>Digital Twins & Simulation</h3>
            <p className={styles.moduleText}>
              Safely prototype behaviors using URDF/Xacro, Gazebo, Unity and Isaac Sim.
              Build a high-fidelity digital twin of your humanoid.
            </p>
            <ul className={styles.moduleBullets}>
              <li>URDF modeling for humanoid robots</li>
              <li>Gazebo & Unity simulation workflows</li>
              <li>ROS 2 integration with digital twins</li>
            </ul>
            <Link
              className={styles.moduleLink}
              to="/docs/module03-digital-twin/intro-digital-twins"
            >
              Read Module 3 →
            </Link>
          </div>

          <div className={styles.moduleCard}>
            <p className={styles.moduleTag}>Module 4</p>
            <h3 className={styles.moduleTitle}>AI Robot Brain & VLA Humanoids</h3>
            <p className={styles.moduleText}>
              Plug in NVIDIA Isaac, language models, and vision-language-action
              systems so your humanoid can understand and execute natural language.
            </p>
            <ul className={styles.moduleBullets}>
              <li>Isaac Sim & Isaac ROS integration</li>
              <li>Language models + ROS 2 pipelines</li>
              <li>Capstone: VLA-driven humanoid in simulation</li>
            </ul>
            <Link
              className={styles.moduleLink}
              to="/docs/module04-isaac/intro-isaac-brain"
            >
              Read Module 4 →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function GettingStartedStrip() {
  return (
    <section className={styles.stripSection}>
      <div className="container">
        <div className={styles.stripContent}>
          <div>
            <h2 className={styles.stripTitle}>How to use this book</h2>
            <p className={styles.stripText}>
              You can treat this as a self-paced course, a reference manual, or
              a hackathon companion. Each chapter ends with small, focused tasks
              that push your humanoid project forward.
            </p>
          </div>
          <div className={styles.stripPoints}>
            <div className={styles.stripPoint}>
              <span className={styles.stripIcon}>1</span>
              <p>Start with Module 1 and get ROS 2 running.</p>
            </div>
            <div className={styles.stripPoint}>
              <span className={styles.stripIcon}>2</span>
              <p>Add sensors & simulation in Modules 2–3.</p>
            </div>
            <div className={styles.stripPoint}>
              <span className={styles.stripIcon}>3</span>
              <p>Plug in the AI brain & VLA control in Module 4.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        <ModulesOverview />
        <GettingStartedStrip />
        <section className={styles.featuresSection}>
          <div className="container">
            <HomepageFeatures />
          </div>
        </section>
      </main>
    </Layout>
  );
}
