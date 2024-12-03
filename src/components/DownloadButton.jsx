import React from "react";
import { MdFileDownload } from "react-icons/md";

const DownloadButton = () => {
  const handleDownload = () => {
    const downloadLink = `https://drive.google.com/file/d/1Ihk5LQPdR48qBjySgBSzBZk3L-rV6eqC/view?usp=sharing`;

    // Open link in a new tab
    const link = document.createElement("a");
    link.href = downloadLink;
    link.target = "_blank"; // Open in new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="md:text-base text-xs text-blue-500 flex items-center justify-center md:gap-1 "
      >
      <MdFileDownload className="-mr-2 md:mr-0 " size={30} />
      Property Brochure
    </button>
  );
};

export default DownloadButton;
