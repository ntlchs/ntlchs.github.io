function DevIcon({ title }: { title: string }) {
  return (
    <>
      <i
        className={`text-black text-lg devicon-${title}-plain`}
        title={title}
      />
      {/* add tooltip */}
    </>
  );
}

export default DevIcon;
