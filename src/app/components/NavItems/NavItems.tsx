import NavItem from "./NavItem/NavItem";
export default function NavItems() {
  return (
    <div className="flex flex-row justify-between gap-2">
      <NavItem title="about" link="" />
      <NavItem title="projects" link="" />
      <NavItem title="blog" link="" />
      <NavItem title="contact" link="" />
    </div>
  );
}
