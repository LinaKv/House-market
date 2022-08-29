import React from "react";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

function Concat() {
  const [message, setMessage] = useState("");
  const [landlord, setLandLord] = useState(null);
  // const [searchParams, setSearchParams] = useSearchParams();

  const params = useParams();

  useEffect(() => {
    const getLandLord = async () => {
      const docRef = doc(db, "users", params.landlordId);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setLandLord(docSnap.data());
      } else {
        toast.error("Could not get landlord data");
      }
    };

    getLandLord();
  }, [params.lanLordId]);

  const onChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Concat Landlord</p>
      </header>

      {landlord !== null && (
        <main>
          <div className="contactLandlord">
            <p className="landlordName">Contact {landlord?.name}</p>
          </div>

          <form className="messageForm">
            <div className="messageDiv">
              <label htmlFor="message" className="messageLabel">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="textarea"
                value={message}
                onChange={onChange}
              ></textarea>
            </div>

            {/* <a
              href={`mailto:${landlord.email}?Subject=${searchParams.get(
                "listingName"
              )}&body=${message}`}
            >
              <button type="button" className="primaryButton">
                Send Message
              </button>
            </a> */}
          </form>
        </main>
      )}
    </div>
  );
}

export default Concat;
