"use client"
import NestedLayout from "./(nested)/layout";
export default function Home({children}) {
  return (
    <NestedLayout>{children}</NestedLayout>
  );
}
