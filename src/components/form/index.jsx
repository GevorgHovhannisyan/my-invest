import { useEffect } from "react";

const JotFormEmbed = () => {
  useEffect(() => {
    // Load external script
    const script = document.createElement("script");
    script.src =
      "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;

    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-253452553357056']",
          "https://form.jotform.com/"
        );
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      id="JotFormIFrame-253452553357056"
      title="Form"
      onLoad={() => window.parent.scrollTo(0, 0)}
      allow="geolocation; microphone; camera; fullscreen; payment"
      src="https://form.jotform.com/253452553357056"
      style={{
        minWidth: "100%",
        maxWidth: "100%",
        height: "539px",
        border: "none",
      }}
      scrolling="no"
    />
  );
};

export default JotFormEmbed;
