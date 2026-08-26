//Note: See design. Likely my landing page with the light descriptor.
export default function Page() {
  return (
    <>
      {/* TODO: REMOVE BORDERS */}
      <div className="flex flex-col items-center flex-1 m-5 border-1 border-green-500">
        <div>HELLO IM</div>
        <div>BRYAN HERRERA</div>
        <div>Software Engineer who builds scalable systems and delightful user experiences.</div>
        <div>View my work (container here) </div>
      </div>
      <div className="flex flex-col items-center  flex-1 m-5 border-1 border-green-500">
        <div>RIGHT CONTENT looks like a small desktop window on this side.</div>
      </div>
    </>
  );
}
