/* responsible waterr · interactions */
(function () {
  "use strict";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- preloader ---------- */
  const pre = document.getElementById("preloader");
  window.addEventListener("load", () => {
    setTimeout(() => {
      pre.classList.add("done");
      document.body.classList.add("loaded");
      setTimeout(() => pre.remove(), 1200);
    }, reduceMotion ? 0 : 1500);
  });
  // Safety: never trap the user behind the loader
  setTimeout(() => { if (pre && !pre.classList.contains("done")) { pre.classList.add("done"); } }, 4500);

  /* ---------- nav state + progress ---------- */
  const nav = document.getElementById("nav");
  const bar = document.getElementById("progressBar");
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 40);
    if (y > 600 && y > lastY) nav.style.transform = "translateY(-110%)";
    else nav.style.transform = "translateY(0)";
    lastY = y;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  const toggleMenu = (open) => {
    mobileMenu.classList.toggle("hidden", !open);
    burger.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  };
  burger.addEventListener("click", () => toggleMenu(mobileMenu.classList.contains("hidden")));
  mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );
  document.querySelectorAll(".reveal, .reveal-img, [data-stagger]").forEach((el) => io.observe(el));

  /* ---------- count-up stats ---------- */
  const counters = document.querySelectorAll("[data-count]");
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      cio.unobserve(e.target);
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const dur = 1800, t0 = performance.now();
      const fmt = (v) => Math.round(v).toLocaleString("en-CA");
      if (reduceMotion) { el.textContent = fmt(target); return; }
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = fmt(target * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => cio.observe(c));

  /* ---------- bottle size selector ---------- */
  const tabs = document.querySelectorAll(".size-tab");
  const bottleShot = document.getElementById("bottleShot");
  tabs.forEach((tab) => tab.addEventListener("click", () => {
    tabs.forEach((t) => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    document.querySelectorAll(".size-panel").forEach((p) => p.classList.remove("active"));
    document.getElementById(tab.dataset.target).classList.add("active");

    // cross-fade the product shot when the format changes
    if (bottleShot && tab.dataset.img && bottleShot.getAttribute("src") !== tab.dataset.img) {
      bottleShot.classList.add("swapping");
      const next = new Image();
      next.onload = () => {
        bottleShot.src = tab.dataset.img;
        bottleShot.alt = tab.dataset.alt || "";
        bottleShot.classList.remove("swapping");
      };
      next.src = tab.dataset.img;
    }
  }));

  /* ---------- purification rail ---------- */
  const rail = document.getElementById("rail");
  document.getElementById("railPrev").addEventListener("click", () => rail.scrollBy({ left: -340, behavior: "smooth" }));
  document.getElementById("railNext").addEventListener("click", () => rail.scrollBy({ left: 340, behavior: "smooth" }));

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-q").forEach((q) => {
    q.addEventListener("click", () => {
      const item = q.parentElement;
      const a = item.querySelector(".faq-a");
      const open = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((o) => {
        o.classList.remove("open");
        o.querySelector(".faq-a").style.maxHeight = null;
        o.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (!open) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
        q.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- hero water ripple canvas ---------- */
  const canvas = document.getElementById("ripple-canvas");
  if (canvas && !reduceMotion) {
    const ctx = canvas.getContext("2d");
    let ripples = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    const hero = canvas.parentElement;
    let last = 0;
    const spawn = (x, y) => ripples.push({ x, y, r: 4, a: 0.55 });
    hero.addEventListener("pointermove", (e) => {
      const now = performance.now();
      if (now - last < 90) return;
      last = now;
      const rect = canvas.getBoundingClientRect();
      spawn(e.clientX - rect.left, e.clientY - rect.top);
    });
    // ambient droplets
    setInterval(() => {
      if (document.hidden) return;
      spawn(Math.random() * canvas.offsetWidth, Math.random() * canvas.offsetHeight);
    }, 2600);
    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      ripples = ripples.filter((r) => r.a > 0.01);
      ripples.forEach((r) => {
        r.r += 1.4; r.a *= 0.962;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255," + r.a + ")";
        ctx.lineWidth = 1.4;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255," + r.a * 0.5 + ")";
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
  }

  /* ---------- footer year ---------- */
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
