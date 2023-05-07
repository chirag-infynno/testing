import { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="h-1 w-full bg-themeColor-200 rounded-full">
      <div
        className="h-full bg-themeColor-900 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
export default Loader;
