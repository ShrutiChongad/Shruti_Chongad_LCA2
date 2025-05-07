const title = document.getElementById("title");
title.addEventListener("mouseover", () => {
  title.style.color = "yellow";
});
title.addEventListener("mouseout", () => {
  title.style.color = "white";
});
const map = document.getElementById("map");
map.src = "https://www.google.com/maps/place/11%C2%B055'34.2%22N+75%C2%B020'59.9%22E/@11.9210303,75.3530371,13.04z/data=!4m4!3m3!8m2!3d11.9261679!4d75.3499629?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D";