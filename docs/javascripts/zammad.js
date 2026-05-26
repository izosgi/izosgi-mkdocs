document.addEventListener("DOMContentLoaded", function () {
  const script = document.createElement("script");
  script.src = "https://u210078.ehu.es/assets/chat/chat-no-jquery.min.js";

  script.onload = function () {
    new ZammadChat({
      background: "#040a18",
      fontSize: "12px",
      chatId: 1
    });
  };

  document.body.appendChild(script);
});