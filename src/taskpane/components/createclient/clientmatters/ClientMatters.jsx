import * as React from "react";
import ClientMatterForm from "./ClientMatterForm";
import ClientMattersList from "./ClientMattersList";
import "../button.css";
import { Input, Label, Radio, RadioGroup, Select, Button } from "@fluentui/react-components";

const ClientMatters = () => {
  //console.log("here data is", props.post);
  return (
    <div className="ms-Grid template" dir="ltr">
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div className="ms-md12">
            <div className="top-sec title">Create New Client Matter Folders</div>
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="left-sec ms-Grid-col ms-sm12 ms-md12 ms-lg5">
            <h5>Select a client matter lorem ipsum lorem ipsumlorem ipsumlorem ipsum</h5>
            <form className="clients-section">
              <div className="ms-Grid-row">
                <Label size="small" className="ms-Grid-col ms-sm6 ms-md12 ms-lg5 col-form-label">
                  Client search terms
                </Label>
                <div className="ms-Grid-col ms-sm6 ms-md12 ms-lg6">
                  {/* <input type="text" className="form-control" id="input" placeholder="Type 3+ characters" /> */}
                  <Input className="form-control" size="small" id="input" placeholder="Type 3+ characters" />
                </div>
              </div>
              <div className="ms-Grid-row">
                <Label size="small" className="ms-Grid-col ms-sm6 ms-md12 ms-lg5 col-form-label">
                  Client search terms
                </Label>
                <div className="ms-Grid-col ms-sm6 ms-md12 ms-lg6">
                  <Input className="form-control" size="small" id="input" placeholder="Type 3+ characters" />
                </div>
              </div>
              <div className="radio-section">
                <RadioGroup defaultValue="pear" className="radio-group">
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6 ms-md12 ms-lg5">
                      <Label size="small" className="form-check-label">
                        Default radio
                      </Label>
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md12 ms-lg6">
                      {/* <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked /> */}
                      <Radio size="small" value="apple" />
                    </div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6 ms-md12 ms-lg5">
                      <Label size="small" className="form-check-label">
                        Default radio
                      </Label>
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md12 ms-lg6">
                      {/* <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked /> */}
                      <Radio size="small" value="pear" />
                    </div>
                  </div>
                </RadioGroup>
              </div>
              <div className="radio-section">
                <RadioGroup defaultValue="pear" className="radio-group">
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6 ms-md12 ms-lg5">
                      <Label size="small" className="form-check-label">
                        Default radio
                      </Label>
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md12 ms-lg6">
                      {/* <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked /> */}
                      <Radio size="small" value="apple" />
                    </div>
                  </div>
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6 ms-md12 ms-lg5">
                      <Label size="small" className="form-check-label">
                        Default radio
                      </Label>
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md12 ms-lg6">
                      {/* <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked /> */}
                      <Radio size="small" value="pear" />
                    </div>
                  </div>
                </RadioGroup>
              </div>
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm6 ms-md12 ms-lg5">
                  <Label size="small" className="form-check-label">
                    Select Area of Law
                  </Label>
                </div>
                <div className="ms-Grid-col ms-sm6 ms-md12 ms-lg6">
                  <Select size="small">
                    <option>Red</option>
                    <option>Green</option>
                    <option>Blue</option>
                  </Select>
                </div>
              </div>
              <div className="ms-Grid-row btn-sec ms-sm12 ms-lg11">
                <Button size="small" className="btn">
                  Search
                </Button>
                <Button size="small" className="btn">
                  Clear
                </Button>
              </div>
            </form>
          </div>
          <div className="rgt-sec ms-Grid-col ms-sm12 ms-md12 ms-lg7">
            <div className="rgt-sec-title">
              <span>Client Matter Folder</span>
              <span>Will be created here</span>
            </div>
            <div className="data-view">
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md12">
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6 ms-md12 ms-lg6">
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
                      OK
                    </a>
                    <a href="javascript:void(0)" className="btn">
                      Cancel
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
