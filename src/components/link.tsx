const Link = ({ href, className, target, children }: any) => {
  return (
    <a className={className} href={href} target={target}>
      {children}
    </a>
  );
};

export default Link;
