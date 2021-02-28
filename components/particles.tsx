import * as MyParticles from "react-tsparticles";

export default function Particles() {
  return (
    <div>
      <MyParticles
        id="tsparticles"
        options={{
          background: {
            color: "#201e21",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
          fpsLimit: 60,
          backgroundMode: {
            enable: true,
            zIndex: -1,
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "random",
              animation: {
                enable: true,
                speed: 20,
                sync: true,
              },
            },
            line_linked: {
              color: "random",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 5,
              random: true,
              animation: {
                enable: false,
                speed: 20,
                minimumValue: 0.1,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
