import * as React from "react";
import { makeStyles } from "@fluentui/react-components";
import ClientMatterForm from "./ClientMatterForm";
import ClientMattersList from "./ClientMattersList";
import "../button.css";

const ClientMatters = () => {
  return (
    <div className="ms-Grid template" dir="ltr">
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div className="ms-md12">
            <div className="top-sec title">Create New Client Matter Folders</div>
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="left-sec ms-Grid-col ms-md12 ms-lg5">
            <h5>Select a client matter lorem ipsum lorem ipsumlorem ipsumlorem ipsum</h5>
            <form>
              <div className="ms-Grid-row">
                <label className="ms-Grid-col ms-md12 ms-lg5 col-form-label">Client search terms</label>
                <div className="ms-Grid-col ms-md12 ms-lg6">
                  <input type="text" className="form-control" id="input" placeholder="Type 3+ characters" />
                </div>
              </div>
              <div className="ms-Grid-row">
                <label className="ms-Grid-col ms-md12 ms-lg5 col-form-label">Client search terms</label>
                <div className="ms-Grid-col ms-md12 ms-lg6">
                  <input type="text" className="form-control" id="input" placeholder="Type 3+ characters" />
                </div>
              </div>
              <div className="radio-section">
                <div className="ms-Grid-row">
                  <div className="ms-Grid-col ms-md12 ms-lg5">
                    <label className="form-check-label">Default radio</label>
                  </div>
                  <div className="ms-Grid-col ms-md12 ms-lg6">
                    <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                  </div>
                </div>
                <div className="ms-Grid-row">
                  <div className="ms-Grid-col ms-md12 ms-lg5">
                    <label className="form-check-label">Default radio</label>
                  </div>
                  <div className="ms-Grid-col ms-md12 ms-lg6">
                    <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                  </div>
                </div>
              </div>
              <div className="radio-section">
                <div className="ms-Grid-row">
                  <div className="ms-Grid-col ms-md12 ms-lg5">
                    <label className="form-check-label">Default radio</label>
                  </div>
                  <div className="ms-Grid-col ms-md12 ms-lg6">
                    <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                  </div>
                </div>
                <div className="ms-Grid-row">
                  <div className="ms-Grid-col ms-md12 ms-lg5">
                    <label className="form-check-label">Default radio</label>
                  </div>
                  <div className="ms-Grid-col ms-md12 ms-lg6">
                    <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                  </div>
                </div>
              </div>
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-md12 ms-lg5">
                  <label className="form-check-label">Select Area of Law</label>
                </div>
                <div className="ms-Grid-col ms-md12 ms-lg6">
                  <select id="law">
                    <option value="volvo">--Volvo--</option>
                    <option value="saab">Saab</option>
                    <option value="vw">VW</option>
                    <option value="audi" selected>
                      Audi
                    </option>
                  </select>
                </div>
              </div>
              <div className="ms-Grid-row btn-sec ms-lg11">
                <a href="javascript:void(0)" className="btn">
                  Search
                </a>
                <a href="javascript:void(0)" className="btn">
                  Clear
                </a>
              </div>
            </form>
          </div>
          <div className="rgt-sec ms-Grid-col ms-md12 ms-lg7">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-md6">Client Matter Folder</div>
              <div className="ms-Grid-col ms-md6">Will be created here</div>
            </div>
            <div className="data-view">
              <div className="ms-Grid-row ">
                <div className="ms-Grid-col ms-md12">
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-md12 ms-lg6">
                      <input type="checkbox" value="" id="defaultCheck1" /> 25003 lorem ipsum
                    </div>
                    <div className="ms-Grid-col ms-md12 ms-lg6">Client/test</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="ms-Grid">
                <div className="ms-Grid-row">
                  <div className="ms-Grid-col ms-sm12 listing-btns">
                    [ZZZ] Folders Selected
                    <a href="javascript:void(0)" className="btn">
                      Search
                    </a>
                    <a href="javascript:void(0)" className="btn">
                      Clear
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientMatters;
