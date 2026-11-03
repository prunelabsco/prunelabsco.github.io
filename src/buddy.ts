import { gsap } from "gsap";

/* Reactions copied from the video engine (_engine/src/buddy.tsx): look, nod, shake, hmm, wow.
   Eyes never track the pointer; they only glance when something happens. */

const calm = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

export function buddy(root: SVGSVGElement) {
  const q = <T extends Element>(s: string) => root.querySelector(s) as T;
  const float = q(".b-float");
  const body = q(".b-body");
  const eyes = q(".b-eyes");
  const lids = root.querySelectorAll(".b-eye");
  const mark = q<SVGTextElement>(".b-mark");
  const gaze = Number(root.dataset.gaze ?? -26);

  gsap.set(eyes, { x: gaze, y: -8, transformOrigin: "50% 50%" });
  gsap.set(lids, { transformOrigin: "50% 50%" });
  gsap.set(body, { transformOrigin: "50% 100%" });
  gsap.set(mark, { transformOrigin: "50% 100%" });

  const still = calm();
  if (!still) {
    gsap.to(float, { y: -6, duration: 1.4, ease: "sine.inOut", yoyo: true, repeat: -1 });
    gsap
      .timeline({ repeat: -1, repeatDelay: 3.3, delay: 2.5 })
      .to(lids, { scaleY: 0.08, duration: 0.07 })
      .to(lids, { scaleY: 1, duration: 0.11 });
  }

  const showMark = (text: "?" | "!", hold = 0.9) => {
    mark.textContent = text;
    gsap
      .timeline()
      .fromTo(mark, { opacity: 0, y: 0, scale: 0.6 }, { opacity: 1, y: -40, scale: 1, duration: 0.3, ease: "back.out(2)" })
      .to(mark, { opacity: 0, duration: 0.25 }, `+=${hold}`);
  };

  return {
    /** jump up from below, squash on landing, open the eyes */
    enter(delay = 0.2) {
      if (still) return;
      gsap
        .timeline({ delay })
        .from(body, { y: 420, rotation: 10, duration: 0.45, ease: "back.out(2.2)" })
        .fromTo(body, { scaleY: 1, scaleX: 1 }, { scaleY: 0.88, scaleX: 1.1, duration: 0.1, yoyo: true, repeat: 1 }, "-=0.08")
        .from(lids, { scaleY: 0.06, duration: 0.2, ease: "back.out(2)" }, "-=0.05");
    },
    /** glance at an element */
    look(target: Element) {
      if (still) return;
      const a = root.getBoundingClientRect();
      const b = target.getBoundingClientRect();
      const dx = b.left + b.width / 2 - (a.left + a.width / 2);
      const dy = b.top + b.height / 2 - (a.top + a.height / 2);
      const d = Math.hypot(dx, dy) || 1;
      gsap.to(eyes, { x: (dx / d) * 60, y: -8 + (dy / d) * 34, duration: 0.35, ease: "power3.out", overwrite: "auto" });
    },
    rest() {
      if (still) return;
      gsap.to(eyes, { x: gaze, y: -8, duration: 0.5, ease: "power2.out", overwrite: "auto" });
    },
    nod() {
      if (still) return;
      gsap
        .timeline()
        .to(body, { y: 16, duration: 0.14, ease: "power2.out", yoyo: true, repeat: 3 })
        .to(eyes, { scaleY: 0.45, duration: 0.15, yoyo: true, repeat: 1 }, 0);
    },
    shake() {
      if (still) return;
      gsap.to(body, { keyframes: { rotation: [11, -9, 6, -3, 0] }, duration: 0.8, ease: "none" });
    },
    hmm() {
      if (still) return;
      gsap
        .timeline()
        .to(eyes, { x: gaze - 46, scaleY: 0.75, duration: 0.3, ease: "power2.out" })
        .to(body, { rotation: -7, duration: 0.3, ease: "power2.out" }, 0)
        .to([eyes, body], { x: (i) => (i ? 0 : gaze), scaleY: 1, rotation: 0, duration: 0.4, ease: "power2.inOut" }, 1.4);
      showMark("?", 1);
    },
    wow() {
      if (still) return;
      gsap
        .timeline()
        .to(body, { y: -24, scale: 1.08, duration: 0.18, ease: "power2.out", yoyo: true, repeat: 1 })
        .to(lids, { scaleY: 1.35, duration: 0.15, yoyo: true, repeat: 1, repeatDelay: 0.4 }, 0);
      showMark("!", 0.6);
    },
  };
}
