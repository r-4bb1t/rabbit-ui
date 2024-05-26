import { icons } from "lucide-react";

export default function Icon({
  name,
  color,
  size,
}: {
  name: keyof typeof icons;
  color?: string;
  size?: number;
}) {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
}
