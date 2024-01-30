import React from "react";
import shapes, { IconShape } from "./shapes"; // Import your shapes from the directory

interface IconProps {
  name: string;
  width: string;
  height: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, width, height, className }) => {
  const shape: IconShape = shapes[name] || shapes.notFound;
  const { viewBox, shape: path } = shape;

  return (
    <svg
      viewBox={viewBox}
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {path}
    </svg>
  );
};

export default Icon;
