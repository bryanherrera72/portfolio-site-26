import NavItem from "./NavItem/NavItem";
export default function NavItems() {
  return (
    <div className="flex flex-row justify-between gap-x-20">
      <NavItem val={"01"} title="about" link="" />
      <NavItem val={"02"} title="projects" link="" />
      <NavItem val={"03"} title="blog" link="" />
      <NavItem val={"04"} title="contact" link="" />
    </div>
  );
}
