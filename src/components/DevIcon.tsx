function DevIcon({ title }: { title: string }) {
  return <i className={`text-primary text-lg devicon-${title}-plain`} />;
}

export default DevIcon;
