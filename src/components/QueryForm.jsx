import React, { useState } from "react";

const QueryForm = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [query, setQuery] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOtpSuccess = (verifiedPhone) => {
    setIsVerified(true);
    setPhoneNumber(verifiedPhone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isVerified) {
      // Handle query submission
      console.log("Query submitted by:", phoneNumber);
      console.log("Query:", query);
    } else {
      alert("Please verify your phone number first.");
    }
  };

  return (
    <div>
      {isVerified && (
        <form onSubmit={handleSubmit}>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your query"
            required
          />
          <button type="submit">Submit Query</button>
        </form>
      )}
    </div>
  );
};

export default QueryForm;
