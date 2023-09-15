"use client"
import Counter from "@/components/Counter/Counter";
import NestedLayout from "./(nested)/layout";
export default function Home({children}) {
  return (
      <NestedLayout>{children}</NestedLayout>
       
  );
}
