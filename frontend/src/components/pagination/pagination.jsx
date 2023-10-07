import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
 
export function CircularPagination({recordPerPage, filteredData}) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = filteredData.slice(firstIndex, lastIndex);

  const getItemProps = (index) =>
    ({
      variant: currentPage === index ? "filled" : "text",
      color: "gray",
      onClick: () => setCurrentPage(index),
      className: "rounded-full",
    });
 
  const next = () => {
    if (currentPage === 5) return;
 
    setCurrentPage(currentPage + 1);
  };
 
  const prev = () => {
    if (currentPage === 1) return;
 
    setCurrentPage(currentPage - 1);
  };
 
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton {...getItemProps(4)}>4</IconButton>
        <IconButton {...getItemProps(5)}>5</IconButton>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={currentPage === 5}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}