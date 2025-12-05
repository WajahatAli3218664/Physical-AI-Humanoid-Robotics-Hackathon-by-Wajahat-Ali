import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.heroButtons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/module01-ros2/intro-ros2">
            Start with Module 1
          </Link>
        </div>
      </div>
    </header>
  );
}

const modules = [
  {
    id: 'module01',
    title: 'Module 1: The Robotic Nervous System (ROS 2)',
    description:
      'Build the communication backbone of your humanoid using ROS 2 nodes, topics, services, and actions.',
    to: '/docs/module01-ros2/intro-ros2',
  },
  {
    id: 'module02',
    title: 'Module 2: The Digital Twin (Gazebo & Unity)',
    description:
      'Create a precise digital twin of your humanoid and its world using Gazebo and Unity for simulation.',
    to: '/docs/module02-digital-twin/intro-digital-twin',
  },
  {
    id: 'module03',
    title: 'Module 3: The AI-Robot Brain (NVIDIA Isaac)',
    description:
      'Use NVIDIA Isaac to give your humanoid high-fidelity perception, navigation, and manipulation capabilities.',
    to: '/docs/module03-isaac-brain/intro-isaac-brain',
  },
  {
    id: 'module04',
    title: 'Module 4: Vision-Language-Action + Capstone',
    description:
      'Wire language models and vision into your robot to build a full VLA-driven autonomous humanoid.',
    to: '/docs/module04-vla-humanoid/intro-vla',
  },
];

function ModulesGrid() {
  return (
    <section className={styles.modulesSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Explore the Book Modules
        </Heading>
        <div className={styles.modulesGrid}>
          {modules.map((module) => (
            <Link
              key={module.id}
              to={module.to}
              className={clsx('card padding--lg', styles.moduleCard)}>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
              <span className={styles.moduleLink}>Read this module →</span>
            </Link>
          ))}
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
      description="Physical AI & Humanoid Robotics – a four-module journey from ROS 2 to full VLA-driven humanoids.">
      <HomepageHeader />
      <main>
        <ModulesGrid />
      </main>
    </Layout>
  );
}
