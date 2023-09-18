import React from "react";
import profile from "../../images/Review-1.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase/firebaseConfig";
import { getAuth } from "firebase/auth";

const MyProfile = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  return (
    <div className="container d-flex justify-content-center my-5">
      <div class="card mb-3 shadow">
        <div class="row g-0">
          <div class="col-md-5 bg-secondary p-4">
            <div className="text-center text-light my-5">
              <img src={user.photoURL} className="rounded-pill" alt="" />
              <div className="">
                <p className="mt-4">Name: {user.displayName}</p>
                <p>Phone: 01700 111 111</p>
                <p>Emial: {user.email}</p>
                <p>Address: Gulshan-1, Dhaka-1212, Bangladesh</p>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div className="card-body">
              <h5 class="card-title mb-5 text-center">Update Profile</h5>
              <form>
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-sm-12">
                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-sm-12">
                        <div class="form-outline mb-4">
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div class="form-outline mb-4">
                      <textarea
                        className="form-control"
                        rows="2"
                        placeholder="Address"
                      ></textarea>
                    </div>
                    <div class="mb-4">
                      <input class="form-control" type="file" id="formFile" />
                    </div>
                    <div class="form-check mb-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="male"
                        id="flexRadioDefault1"
                        checked
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Male
                      </label>
                    </div>
                    <div class="form-check mb-4">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="female"
                        id="flexRadioDefault2"
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-success w-100" type="submit">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
