import { useEffect, useRef } from "react";
import Matter from "matter-js";
import MatterAttractors from "matter-attractors";
import MatterWrap from "matter-wrap";

// Register plugins once at module scope
Matter.use(MatterAttractors);
Matter.use(MatterWrap);

const MatterAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const { Engine, Runner, Render, World, Body, Mouse, Common, Bodies, Events } = Matter;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Create engine
    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0;

    // Create renderer
    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        showVelocity: false,
        width: width,
        height: height,
        wireframes: false,
        background: "transparent",
        pixelRatio: Math.min(window.devicePixelRatio, 2),
      },
    });

    // Create runner
    const runner = Runner.create();

    const world = engine.world;

    // Determine screen size for performance & particle scaling
    const isMobile = width < 768;

    // Create attractor body at center — smaller cursor attractor ball
    const attractorRadius = isMobile ? 12 : 20;
    const attractiveBody = Bodies.circle(
      width / 2,
      height / 2,
      attractorRadius,
      {
        render: {
          fillStyle: "rgba(77, 242, 255, 0.04)",
          strokeStyle: "rgba(77, 242, 255, 0.12)",
          lineWidth: 1,
        },
        isStatic: true,
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 0.4e-6,
                y: (bodyA.position.y - bodyB.position.y) * 0.4e-6,
              };
            },
          ],
        },
      }
    );

    World.add(world, attractiveBody);

    // Total number of attracted diverse geometric particles
    const bodyCount = isMobile ? 25 : 40;

    // ─── Color palette matching the website's dark/cyan/blue theme ───
    // Lighter, more translucent shapes for a clean, premium feel
    const polygonFills = [
      "rgba(77, 242, 255, 0.06)",   // subtle cyan
      "rgba(45, 107, 255, 0.05)",   // subtle blue
      "rgba(71, 231, 231, 0.04)",   // teal hint
      "rgba(255, 255, 255, 0.03)",  // faint white
    ];
    const polygonStrokes = [
      "rgba(77, 242, 255, 0.15)",   // cyan edge
      "rgba(45, 107, 255, 0.12)",   // blue edge
      "rgba(71, 231, 231, 0.10)",   // teal edge
      "rgba(255, 255, 255, 0.08)",  // white edge
    ];
    const circleFills = [
      "rgba(77, 242, 255, 0.10)",   // glowing cyan dot
      "rgba(45, 107, 255, 0.08)",   // blue dot
      "rgba(71, 231, 231, 0.07)",   // teal dot
      "rgba(255, 255, 255, 0.05)",  // faint white dot
    ];
    const circleStrokes = [
      "rgba(77, 242, 255, 0.20)",
      "rgba(45, 107, 255, 0.15)",
      "rgba(71, 231, 231, 0.12)",
      "rgba(255, 255, 255, 0.10)",
    ];

    for (let i = 0; i < bodyCount; i += 1) {
      const x = Common.random(0, width);
      const y = Common.random(0, height);
      const colorIdx = Math.floor(Common.random(0, polygonFills.length));
      const ci = Math.floor(Common.random(0, circleFills.length));
      
      // Determine shape type (0 to 7) to have exactly 8 diverse types
      const type = i % 8;
      let body;

      if (type === 0) {
        // 1. Tiny Glowing Circle
        body = Bodies.circle(x, y, Common.random(2, 6), {
          mass: 0.1,
          frictionAir: 0.04,
          render: {
            fillStyle: circleFills[ci],
            strokeStyle: circleStrokes[ci],
            lineWidth: 1,
          },
        });
      } else if (type === 1) {
        // 2. Medium Circle
        body = Bodies.circle(x, y, Common.random(6, 12), {
          mass: 0.3,
          frictionAir: 0.05,
          render: {
            fillStyle: circleFills[ci],
            strokeStyle: circleStrokes[ci],
            lineWidth: 1,
          },
        });
      } else if (type === 2) {
        // 3. Large Soft Circle (Faint Halo)
        body = Bodies.circle(x, y, Common.random(14, 22), {
          mass: 0.5,
          frictionAir: 0.06,
          render: {
            fillStyle: "rgba(77, 242, 255, 0.02)",
            strokeStyle: "rgba(77, 242, 255, 0.06)",
            lineWidth: 1,
          },
        });
      } else if (type === 3) {
        // 4. Triangle (Geometric 3-sided polygon)
        const s = Common.random(10, 20);
        body = Bodies.polygon(x, y, 3, s, {
          mass: s / 20,
          frictionAir: 0.05,
          angle: Common.random(0, 360),
          render: {
            fillStyle: polygonFills[colorIdx],
            strokeStyle: polygonStrokes[colorIdx],
            lineWidth: 1,
          },
        });
      } else if (type === 4) {
        // 5. Square (Geometric 4-sided polygon)
        const s = Common.random(10, 18);
        body = Bodies.polygon(x, y, 4, s, {
          mass: s / 20,
          frictionAir: 0.05,
          angle: Common.random(0, 360),
          render: {
            fillStyle: polygonFills[colorIdx],
            strokeStyle: polygonStrokes[colorIdx],
            lineWidth: 1,
          },
        });
      } else if (type === 5) {
        // 6. Rectangle (Stretched Slab)
        const w = Common.random(16, 28);
        const h = Common.random(8, 14);
        body = Bodies.rectangle(x, y, w, h, {
          mass: (w * h) / 300,
          frictionAir: 0.05,
          angle: Common.random(0, 360),
          render: {
            fillStyle: polygonFills[colorIdx],
            strokeStyle: polygonStrokes[colorIdx],
            lineWidth: 1,
          },
        });
      } else if (type === 6) {
        // 7. Pentagon (Geometric 5-sided polygon)
        const s = Common.random(12, 22);
        body = Bodies.polygon(x, y, 5, s, {
          mass: s / 20,
          frictionAir: 0.05,
          angle: Common.random(0, 360),
          render: {
            fillStyle: polygonFills[colorIdx],
            strokeStyle: polygonStrokes[colorIdx],
            lineWidth: 1,
          },
        });
      } else {
        // 8. Hexagon (Geometric 6-sided polygon)
        const s = Common.random(12, 24);
        body = Bodies.polygon(x, y, 6, s, {
          mass: s / 20,
          frictionAir: 0.05,
          angle: Common.random(0, 360),
          render: {
            fillStyle: polygonFills[colorIdx],
            strokeStyle: polygonStrokes[colorIdx],
            lineWidth: 1,
          },
        });
      }

      World.add(world, body);
    }

    // Mouse-driven attractor via window listener (does not block page scrolling)
    let mousePos = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mousePos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    Events.on(engine, "afterUpdate", function () {
      Body.translate(attractiveBody, {
        x: (mousePos.x - attractiveBody.position.x) * 0.04,
        y: (mousePos.y - attractiveBody.position.y) * 0.04,
      });
    });

    // Start
    Runner.run(runner, engine);
    Render.run(render);

    // Handle resize
    const handleResize = () => {
      const newWidth = container.offsetWidth;
      const newHeight = container.offsetHeight;
      render.canvas.width = newWidth;
      render.canvas.height = newHeight;
      render.options.width = newWidth;
      render.options.height = newHeight;
    };

    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 250);
    };

    window.addEventListener("resize", debouncedResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(resizeTimeout);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world);
      Engine.clear(engine);
      if (render.canvas) {
        render.canvas.remove();
      }
      render.textures = {};
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      className="matter-canvas-wrapper"
      aria-hidden="true"
    />
  );
};

export default MatterAnimation;
