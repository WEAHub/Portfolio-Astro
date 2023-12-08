import type { Route } from "../interfaces/Router";
import RouterLink from "./RouterLink.tsx";
import { useEffect, useState } from "react";

const defaultRoutes: Route[] = [
  {
    title: "Sobre mi",
    section: "#about",
    active: true
  },
  {
    title: "Experiencia",
    section: "#experience",
    active: false
  },
  {
    title: "Proyectos",
    section: "#projects",
    active: false
  }
]

export default function Router() {

  const [hash, setHash] = useState<String>(!!window.location.hash ? window.location.hash : '#about');
  const [routes, setRoutes] = useState<Route[]>(defaultRoutes);

  const updateRoutes = () => setRoutes(routes.map(route => ({
    ...route,
    active: hash === route.section
  })))


  const checkScroll = () => {
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {

      const newHash: string = '#' + section.id;
      const { top } = section.getBoundingClientRect();
      const inView: boolean = top > 0 && top < 150;

      if(inView) {
        setHash(newHash);
        window.history.replaceState(null, '', newHash)
      }

    });
  }

  useEffect(updateRoutes, [hash])

  useEffect(() => {
    document.addEventListener('scroll', checkScroll);
    return () => document.addEventListener('load', checkScroll)
  }, [])

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {
          routes.map(route => (
            <RouterLink key={route.title} title={route.title} section={route.section} active={route.active}></RouterLink>
          ))
        }
      </ul>
    </nav>
  )
}
