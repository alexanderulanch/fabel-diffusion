import React from "react";
import Link from "next/link";
import useDarkMode from "../hooks/useDarkMode";
import useParallax from "../hooks/useParallax"; // Import the useParallax hook
import styles from "src/styles/Home.module.css";

const { headerText } = styles;

const Home: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  useParallax(); // Use the parallax hook in your Home component

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800`}
    >
      {/* Header Image */}
      <div className="w-full h-screen relative overflow-hidden">
        {/* Hero Section */}
        <section className="absolute top-1/2 left-1/2 transform hero-text -translate-y-1/2 -translate-x-1/2 text-center pt-8 pb-8">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 inline-block text-white leading-normal whitespace-nowrap pt-2 ${headerText} ${styles.dropShadow} ${styles.heroText}`}
          >
            Storytime Reimagined
          </h1>
          <p className={`text-xl mb-6 text-white ${styles.dropShadow}`}>
            Generate one-of-a-kind, personalized children's stories using
            advanced artificial intelligence, tailored to your child's interests
          </p>
          <Link href="/createStory" legacyBehavior>
            <a
              className={`inline-block px-4 py-2 text-xl text-white font-semibold rounded-md create-story-button ${styles.dropShadow}`}
            >
              Create Your Story
            </a>
          </Link>
        </section>

        {/* Add layers for the parallax effect */}
        <div
          className="parallax-layer background background-layer"
          data-speed="0.05"
        />
        <div
          className="parallax-layer midground midground-layer"
          data-speed="0.1"
        />
        <div
          className="parallax-layer foreground foreground-layer"
          data-speed=".25"
        />
      </div>

      {/* Features Section */}
      <section className="max-w-4xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="flex flex-col items-center bg-white dark:bg-gray-700 shadow-md rounded-lg">
          <div className="w-full h-45 rounded-t-lg overflow-hidden">
            <img
              src="/images/personalized-stories.png"
              alt="Feature 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center flex-grow mt-4 p-4">
            <h2 className="text-xl font-bold mb-2">Personalized Stories</h2>
            <p>
              Create unique stories tailored to your child's interests and
              preferences.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-700 shadow-md rounded-lg">
          <div className="w-full h-45 rounded-t-lg overflow-hidden">
            <img
              src="/images/ai-powered-stories.png"
              alt="Feature 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center flex-grow mt-4 p-4">
            <h2 className="text-xl font-bold mb-2">AI-Powered</h2>
            <p>
              Our AI technology generates creative and engaging stories for
              children.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-700 shadow-md rounded-lg">
          <div className="w-full h-45 rounded-t-lg overflow-hidden">
            <img
              src="/images/illustrate-your-own-book.png"
              alt="Illustration Feature"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center flex-grow mt-4 p-4">
            <h2 className="text-xl font-bold mb-2">Custom Illustrations</h2>
            <p>
              Illustrate your own book and add a personal touch to bring your
              story to life.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section (if applicable) */}
      {/* ... */}

      {/* Additional content */}
      {/* ... */}
    </main>
  );
};

export default Home;
