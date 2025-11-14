let scrolls = document.getElementById("navmain");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 726 && window.scrollY < 1440) {
    scrolls.classList.add("scrolled");
    document.getElementById("logo").style.color = "black";
  } else if (window.scrollY < 726 || window.scrollY > 1440) {
    scrolls.classList.remove("scrolled");
    document.getElementById("logo").style.color = "white";
  }
});

function sendMail() {
  var params = {
    name: document.getElementById("inputName").value,
    email: document.getElementById("inputEmail").value,
    message: document.getElementById("inputAddress").value,
  };
  const seviceID = "service_6con3he";
  const templateID = "template_fmbqzeo";

  emailjs
    .send(seviceID, templateID, params)
    .then((res) => {
      document.getElementById("inputName").value = "";
      document.getElementById("inputEmail").value = "";
      document.getElementById("inputAddress").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
// photo-blur
window.addEventListener("load", () => {
  document.getElementById("photo").classList.add("active");
});

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});
lenis.on("scroll", (e) => {
  console.log(e);
});
