// GamerJay Live — personalise these links before publishing.
const SITE_CONFIG = {
  youtubeChannel: "https://youtube.com/@jaybandkar",
  instagram: "https://instagram.com/",
  discord: "https://discord.com/",
  videos: [
    { title: "Epic Gameplay Highlights", url: "https://youtube.com/@jaybandkar" },
    { title: "Custom Room Showdown", url: "https://youtube.com/@jaybandkar" },
    { title: "Road to the Next Rank", url: "https://youtube.com/@jaybandkar" }
  ]
};

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) {
      menuToggle.textContent = "☰";
      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });
});

document.getElementById("liveButton")?.setAttribute("href", SITE_CONFIG.youtubeChannel);
document.getElementById("allVideos")?.setAttribute("href", SITE_CONFIG.youtubeChannel);
document.getElementById("contactButton")?.setAttribute("href", SITE_CONFIG.youtubeChannel);

document.querySelectorAll(".video-card").forEach((card, index) => {
  const video = SITE_CONFIG.videos[index];
  if (!video) return;
  card.href = video.url;
  card.querySelector("h3").textContent = video.title;
});

// Easy-to-edit social destinations.
const socialLinks = document.querySelectorAll(".hero-socials a");
if (socialLinks[0]) socialLinks[0].href = SITE_CONFIG.youtubeChannel;
if (socialLinks[1]) socialLinks[1].href = SITE_CONFIG.instagram;
if (socialLinks[2]) socialLinks[2].href = SITE_CONFIG.discord;
