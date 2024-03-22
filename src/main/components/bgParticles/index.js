import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import devTheme from "../../../core/theme";

const BgParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: devTheme.palette.background.default,
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: "#8be9fd",
        },
        links: {
          color: "#8be9fd",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.1,
        },
        shape: {
          type: "circle",
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div style={{ position: "absolute", width: "100%", height: "100%", zIndex: -1 }}>
        <Particles id="tsparticles" options={options} />;
      </div>
    );
  }

  return <></>;
};

export default BgParticles;
