interface NavItemProps {
  title: string; //title of the section
  link: string; //link for routing on click
  val: string; // number for style. I want the number to group with the element.
}
export default function NavItem({ title, link, val }: NavItemProps) {
  return (
    <div className="flex flex-row gap-1">
      <p className="text-highlight-font">[{val}]</p>
      <p className="text-standard-font">{title}</p>
      {link}
    </div>
  );
}
