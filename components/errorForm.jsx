import React from "react";
import { IoMdClose } from "react-icons/io";

export default function ErrorForm({ children }) {
  return (
    <div className="bg-[#ffe2e5] grid grid-cols-[auto_1fr] gap-3 px-4 py-3 text-[#dd0528] rounded-sm text-sm">
      <IoMdClose className="text-xl" />
      {children}
    </div>
  );
}
