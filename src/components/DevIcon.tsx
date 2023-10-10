function DevIcon({ title }: { title: string }) {
  return <i className={`text-black text-lg devicon-${title}-plain`} />;
}

export default DevIcon;
