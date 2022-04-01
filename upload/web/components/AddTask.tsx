import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const AddTask = () => {
  return (
    <>
      <section
        className="vh-100 bg-image "
        // style={{"background-image: 'url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')'"}}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6 p-4 ">
                <div className="card border border-dark">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create Task
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label">Title</label>
                        <input
                          type="text"
                          name="firstName"
                          //   onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Assign User</label>
                        <select className="form-control form-control-lg border border-dark">
                          <option>Select</option>
                          <option>User 1</option>
                          <option>User 2</option>
                        </select>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Completion Date</label>
                        <input
                          type="date"
                          name="email"
                          id="form3Example4cg"
                          //   onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>
                      {/* <div className="form-outline mb-4">
                        <label className="form-label">Email</label>
                      </div> */}

                      <div className="d-flex justify-content-center mt-4">
                        <button
                          type="button"
                          className="btn btn-primary"
                          //   onClick={onsubmitHandler}
                        >
                          Add Task
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddTask;
