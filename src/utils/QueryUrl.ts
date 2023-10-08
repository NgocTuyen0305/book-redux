import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const QueryUrl = ({ currentPage, limitPage }) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location: ", location);

  return useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", currentPage.toString());
    searchParams.set("limit", limitPage.toString());
    navigate(`?${searchParams.toString()}`);
  }, [currentPage, limitPage, location.search, navigate]);
};

export default QueryUrl;
