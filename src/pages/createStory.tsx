import React, { useState } from "react";
import DrawingCanvas from "../components/DrawingCanvas";
import { mockApiResponse } from "./api/mockApiResponse";

const CreateStory: React.FC = () => {
  const [storyPrompt, setStoryPrompt] = useState("");
  const [story, setStory] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStoryPrompt(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      {!story ? (
        <div className="max-w-md p-6 bg-white dark:bg-gray-900 rounded-md shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">
            Create Your Story
          </h1>
          <form onSubmit={() => setStory(mockApiResponse)}>
            <label
              htmlFor="storyPrompt"
              className="block text-xl font-medium mb-2 text-gray-700 dark:text-gray-300"
            >
              Enter a prompt for your story:
            </label>
            <input
              type="text"
              id="storyPrompt"
              name="storyPrompt"
              value={storyPrompt}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md mb-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            >
              Generate Story
            </button>
          </form>
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center">
          <div className="flex flex-row items-start">
            <div className="w-1/2">
              <DrawingCanvas
                drawingPrompt={story.pages[currentPage].drawing_prompt}
              />
            </div>
            <div className="w-1/2 p-4">
              <p className="text-xl text-gray-700 dark:text-gray-300">
                {story.pages[currentPage].text}
              </p>
            </div>
          </div>
          {currentPage < story.pages.length - 1 && (
            <button
              className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next Page
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CreateStory;
