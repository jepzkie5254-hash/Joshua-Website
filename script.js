// Fade sections in as they scroll into view
const els=document.querySelectorAll("section h2, .card, .tw");
els.forEach(e=>e.classList.add("reveal"));
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("show");io.unobserve(x.target)}}),{threshold:.1});
els.forEach(e=>io.observe(e));
