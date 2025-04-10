import React from "react";

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`${
            currentPage === i
              ? "bg-mstheme text-white"
              : "bg-gray-100 text-gray-700 hover:bg-mstheme hover:text-white"
          } px-4 py-2 rounded-lg shadow-md transition duration-300`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      {/* Previous Button */}
      <button
        className={`${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-mstheme text-white hover:bg-mstheme_hover"
        } px-4 py-2 rounded-lg shadow-md transition duration-300`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex gap-2">{renderPageNumbers()}</div>

      {/* Next Button */}
      <button
        className={`${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-mstheme text-white hover:bg-mstheme_hover"
        } px-4 py-2 rounded-lg shadow-md transition duration-300`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
