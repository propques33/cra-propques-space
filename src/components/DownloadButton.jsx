import React from "react";
import { MdFileDownload } from "react-icons/md";

const DownloadButton = () => {
  const handleDownload = () => {
    const downloadLink = `https://drive.google.com/file/d/1Ihk5LQPdR48qBjySgBSzBZk3L-rV6eqC/view?usp=sharing`;

    // Trigger file download
    const link = document.createElement("a");
    link.href = downloadLink;
    link.download = "file.pdf"; // Set a default name for the file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="md:text-base text-xs text-blue-500 flex items-center justify-center gap-1 "
    >
      <MdFileDownload className="md:block hidden"/>
       Property Brochure
    </button>
  );
};

export default DownloadButton;
