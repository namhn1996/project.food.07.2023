import React from "react";
import "./ComnentPage.css";
function CommentsPage() {
  return (
    <div>
      <section className="content-item" id="comments">
        <div className="container">
          <div className="row">
            <div className="">
                <h2>Comments</h2>
              <form>
                <h3 className="pull-left">New Comment</h3>
                <button type="submit" className="btn btn-normal pull-right">
                  Submit
                </button>
                <fieldset>
                  <div className="row">
                    <div className="col-sm-3 col-lg-2 hidden-xs">
                      <img
                        className="img-responsive"
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt=""
                      />
                    </div>
                    <div className="form-group col-xs-12 col-sm-9 col-lg-10">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Your message"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </fieldset>
              </form>
              <h3>1 Comments</h3>
              {/* COMMENT 1 - START */}
              <div className="media">
                <a className="pull-left" href="#">
                  <img
                    className="media-object"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                  />
                </a>
                <div className="media-body">
                  <h4 className="media-heading">John Doe</h4>
                  <p>
                    Bánh ngon vlllll
                  </p>
                  <ul className="list-unstyled list-inline media-detail pull-left">
                    <li>
                      <i className="fa fa-calendar" />
                      27/02/2014
                    </li>
                    <li>
                      <i className="fa fa-thumbs-up" />
                      13
                    </li>
                  </ul>
                  <ul className="list-unstyled list-inline media-detail pull-right">
                    <li className="">
                      <a href=""> <i class="fa-regular fa-thumbs-up"></i>  Like</a>
                    </li>
                    <li className="">
                      <a href=""><i class="fa-regular fa-message-dots"></i> Reply</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* COMMENT 1 - END */}
              {/* COMMENT 2 - START */}
          
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CommentsPage;
