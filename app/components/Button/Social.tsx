import Button, { ButtonProps } from ".";
import cc from "classcat";

export default function SocialButton({
  type,
  children,
  social,
  sz = "md",
  ...props
}: ButtonProps & { social: "kakao" | "google" }) {
  return (
    <Button
      sz={sz}
      {...props}
      className={cc([
        social === "kakao" &&
          "!bg-[#FEE500] hover:!bg-[#f5c91b] !text-[rgba(0,0,0,0.85)]",
        social === "google" &&
          "!bg-white border text-black hover:!bg-[rgba(0,0,0,0.1)]",
      ])}
    >
      <img
        src={social === "kakao" ? "/logos/kakao.svg" : "/logos/google.webp"}
        className={cc([
          "mr-2",
          sz === "xs" && "w-3 h-3",
          sz === "sm" && "w-4 h-4",
          sz === "md" && "w-5 h-5",
          sz === "lg" && "w-6 h-6",
        ])}
      />
      {children}
    </Button>
  );
}
