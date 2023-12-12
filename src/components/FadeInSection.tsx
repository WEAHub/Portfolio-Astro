import React from "react";

export default function FadeInSection(props: React.PropsWithChildren) {
  const [isVisible, setVisible] = React.useState(true)
  const domRef: any = React.useRef()
  let observer: IntersectionObserver

  React.useEffect(() => {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;
        setVisible(isIntersecting)
        if(isIntersecting) {
          observer.unobserve(domRef.current!)
        }
      });
    });

    observer.observe(domRef.current!);
    
    return () => observer.unobserve(domRef.current!);
  }, []);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(10vh)',
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'opacity .5s ease-out, transform .5s ease-out',
        willChange: 'opacity, visibility',
      }}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}