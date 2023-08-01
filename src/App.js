import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CityDetailTable from "./CityDetailTable";
const pincodeApiUrl = "https://api.postalpincode.in/pincode";
function App() {
  const [input, setInput] = useState("");
  const [pincodedetails, setPincodeDetails] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setPincodeDetails(null);
    const value = e.target.value.trim();
    if (/^\d*$/.test(value)) {
      setInput(value);
      setError("");
    } else {
      setError("Please enter a valid integer");
    }
  };

  const getCityDetail = async () => {
    try {
      if (!input) {
        setError("please enter valid pincode");
      } else {
        setLoading(true);
        const response = await axios.get(`${pincodeApiUrl}/${input}`);

        if (response.data && response.data.length > 0) {
          const data = response.data[0].PostOffice;
          setPincodeDetails(data[0]);
        } else {
          setError("Invalid pin code");
        }
      }
    } catch (error) {
      setError("Invalid pincode plss enter correct pincode.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1 className="heading">Get Indian City Details</h1>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          onChange={handleInput}
          maxLength="6"
          className={error ? "custom-input-error" : "custom-input"}
          placeholder="Enter Pincode"
        ></input>
        <div className="input-group-append">
          <button
            onClick={getCityDetail}
            disabled={loading}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
      <p className="errorMessage">{error}</p>
      {loading ? "loading..." : null}
      {!loading && pincodedetails && (
        <CityDetailTable pincodedetails={pincodedetails} />
      )}
    </div>
  );
}

export default App;
