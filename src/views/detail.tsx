import React from "react";
import { Link } from "react-router-dom";
import { CardDetail } from "../components/card-detail";

export const DetailPage: React.FC = () => {

  return (
    <>
      <CardDetail />
      <Link to="/">Back to list page</Link>
    </>
  );
};
