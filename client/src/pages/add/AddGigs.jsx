import React from "react";
import "./AddGigs.scss";

const AddGigs = () => {
  return (
    <div className="addGigs">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <div className="item">
              <label htmlFor="title">Title</label>
              <input type="text" placeholder="e.g. What I am good at" />
            </div>
            <div className="item">
              <label htmlFor="category">Category</label>
              <select name="cats" id="cats">
                <option value="design">Design</option>
                <option value="web">Web Development</option>
                <option value="animation">Animation</option>
                <option value="music">Music</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="cover">Cover Image</label>
              <input type="file" />
            </div>
            <div className="item">
              <label htmlFor="uploads">Upload Images</label>
              <input type="file" multiple />
            </div>
            <div className="item">
              <label htmlFor="description">Description</label>
              <textarea
                name=""
                id=""
                cols={30}
                rows={16}
                placeholder="Brief description to introduce your services"
              ></textarea>
            </div>
            <div className="item">
              <button>Create</button>
            </div>
          </div>
          <div className="right">
            <div className="item">
              <label htmlFor="service">Service</label>
              <input type="text" placeholder="e.g. landing page website" />
            </div>
            <div className="item">
              <label htmlFor="short">Short Description</label>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="short description of your service"
              ></textarea>
            </div>
            <div className="item">
              <label htmlFor="delivery">Delivery Time(e.g. 3 days)</label>
              <input type="number" min={1} />
            </div>
            <div className="item">
              <label htmlFor="revision">Revision Number</label>
              <input type="number" min={1} />
            </div>
            <div className="item">
              <label htmlFor="features">Add Features</label>
              <input type="text" placeholder="e.g. page design" />
              <input type="text" placeholder="e.g. logo design" />
              <input type="text" placeholder="e.g. file uploading" />
              <inputRevision
                Number
                type="text"
                placeholder="e.g. setting up domain and hosting"
              />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input type="number" min={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGigs;
