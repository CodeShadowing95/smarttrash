"use client";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild
}: LoginButtonProps) => {
  const onClick = () => {
    console.log("clicked");
  }

  return (
    <span className="w-full flex flex-col gap-4 mt-10 cursor-pointer" onClick={onClick}>
      {children}
    </span>
  )
} 