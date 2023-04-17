// DrawingCanvas.tsx
import React, { useRef, useEffect, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { Undo as UndoIcon, Trash as TrashIcon } from "lucide-react";

const DrawingCanvas: React.FC<{ drawingPrompt: string; pageText: string }> = ({
  drawingPrompt,
  pageText,
}) => {
  const canvasRef = useRef(null);
  const [scribbleExists, setScribbleExists] = useState(false);

  const onChange = async () => {
    const paths = await canvasRef.current.exportPaths();
    if (!paths.length) return;
    setScribbleExists(true);
    // Handle the exported image data here
  };

  const undo = () => {
    canvasRef.current.undo();
  };

  const reset = () => {
    setScribbleExists(false);
    canvasRef.current.resetCanvas();
  };

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold mb-4">{drawingPrompt}</h2>
      {scribbleExists || (
        <div className="absolute grid w-full h-full p-3 place-items-center pointer-events-none text-xl">
          <span className="opacity-40">Draw something here.</span>
        </div>
      )}
      <ReactSketchCanvas
        ref={canvasRef}
        className="w-full aspect-square border-none cursor-crosshair"
        strokeWidth={4}
        strokeColor="black"
        onChange={onChange}
        withTimestamp={true}
        style={{ width: "600px", height: "400px" }} // Adjust the size of the canvas here
      />
      {scribbleExists && (
        <div className="animate-in fade-in duration-700 text-left">
          <button className="lil-button" onClick={undo}>
            <UndoIcon className="icon" />
            Undo
          </button>
          <button className="lil-button" onClick={reset}>
            <TrashIcon className="icon" />
            Clear
          </button>
        </div>
      )}
      <div className="mt-4 text-xl">{pageText}</div>{" "}
      {/* Display the text for the page here */}
    </div>
  );
};

export default DrawingCanvas;
