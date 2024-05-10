import React, { useState } from "react";
import styles from "./contactform.module.css";
import { Button } from "@mui/material";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    const mailtoLink = `mailto:contact@privinet?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.contactcontainer}>
        <label htmlFor="name" className={styles.formlabel}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.forminput}
        />
      </div>
      <div className={styles.contactcontainer}>
        <label htmlFor="email" className={styles.formlabel}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.forminput}
        />
      </div>
      <div className={styles.contactcontainer}>
        <label htmlFor="message" className={styles.formlabel}>
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.forminput}
        ></textarea>
      </div>
      <Button
        className={styles.footerChild}
        endIcon={<img width="5px" height="10px" src="/button-shape.svg" />}
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "17",
          background: "#3b8dcb",
          borderRadius: "41px",
          "&:hover": { background: "#3b8dcb" },
          width: 198,
          height: 52,
        }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
