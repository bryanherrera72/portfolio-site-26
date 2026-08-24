interface NavItemProps {
  title: string;
  link: string;
}
export default function NavItem({ title, link }: NavItemProps) {
  return (
    <div>
      {title}
      {link}
    </div>
  );
}
