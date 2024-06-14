import React from "react";

type Props = { children: React.ReactNode };

export default function template({ children }: Props) {
  return (
    <>
      <main className="">{children}</main>
    </>
  );
}
