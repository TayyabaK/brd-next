import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import './WhatsApp.css'
const WhatsApp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+97333227262"
      accountName="BRD Support"
      chatMessage="🌐 Welcome to BR Digitech - Your Blockchain Solution Company! 🚀

      👋 Thank you for reaching out. Our team is thrilled to assist you. A dedicated representative will be with you shortly to guide you through our innovative blockchain solutions.
      
      🔗 Get ready to explore the limitless possibilities of blockchain technology with BR Digitech. We look forward to serving you!
      
      🚀 Let's innovate together! 🌐💡"
      allowEsc
      allowClickAway
      notification
      notificationSound
      buttonStyle={{
        position: "fixed",
        bottom: "3rem",
        left: "2rem",
        width: '45px',
        height: '45px'
      }}
      statusMessage="Typically Replies With in 5 minutes"
      chatboxHeight={450}
      chatboxClassName="chatbox_class"
      chatboxStyle={{
        position: "fixed",
        bottom: "2rem",
        left: "2rem",
      }}
    />
  );
};

export default WhatsApp;
