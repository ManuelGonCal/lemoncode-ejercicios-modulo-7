import React from "react";
import { MemberList } from "../components/member-list";
import { MemberSearch } from "../components/member-search";

export const ListPage: React.FC = () => {

  return (
    <>
      <h2>Hello from List page</h2>
      <MemberSearch />
      <MemberList />
    </>
  );
};
