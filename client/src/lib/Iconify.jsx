import { Icon } from "@iconify/react";

export function Iconify({ icon, size = 24, className = "", ...props }) {
  return (
    <Icon
      icon={icon}
      width={size}
      height={size}
      className={`flex justify-center items-center ${className}`}
      {...props}
    />
  );
}
