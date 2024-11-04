import React, { useState } from "react";
import { auth } from "./firebase"; // Make sure this is the correct import
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const OtpVerification = ({ onSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [error, setError] = useState("");

  const setUpRecaptcha = () => {
    // Ensure recaptchaVerifier is created only once
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // Recaptcha solved, allow OTP
            console.log("Recaptcha verified");
          },
          "expired-callback": () => {
            console.log("Recaptcha expired, please try again");
          },
        },
        auth
      );
    }
  };

  const requestOtp = (e) => {
    e.preventDefault();
    setUpRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        console.log("OTP Sent");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    // OTP Verification logic
  };

  return (
    <div>
      <form onSubmit={verificationId ? verifyOtp : requestOtp}>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter phone number"
          required
          disabled={!!verificationId}
        />
        {verificationId && (
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
          />
        )}
        <div id="recaptcha-container"></div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">
          {verificationId ? "Verify OTP" : "Send OTP"}
        </button>
      </form>
    </div>
  );
};

export default OtpVerification;
