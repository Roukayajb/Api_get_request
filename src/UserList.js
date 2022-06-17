import { React, useEffect, useState } from "react";
import axios from "axios";
import  {MdOutlineAlternateEmail} from "react-icons/md";
import  {FaCity} from "react-icons/fa";

export default function UserList() {
const [users, setUsers] = useState([]); // where to store the returned data
  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <div className="container mt-3 mb-4">
        <div className="col-lg-9 mt-4 mt-lg-0">
          <div className="row">
            <div className="col-md-12">
              <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                <table className="table manage-candidates-top mb-0">
                  <thead>
                    <tr>
                      <th>User Name</th>
                      <th className="text-center">Phone</th>
                      <th className="action text-right">Website</th>
                    </tr>
                  </thead>
                  <tbody>
                  {users.map((u) => (
                    <tr className="candidates-list">
                      <td className="title">
                        <div className="thumb">
                          <img
                            className="img-fluid"
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            alt=""
                          />
                        </div>
                        <div className="candidate-list-details">
                          <div className="candidate-list-info">
                            <div className="candidate-list-title">
                              <h5 className="mb-0">
                                {u.name}
                              </h5>
                            </div>
                            <div className="candidate-list-option">
                              <ul className="list-unstyled">
                                <li>
                                  <MdOutlineAlternateEmail/>   {u.email}
                                  
                                </li>
                                <li>
                                <FaCity/>  {u.address.city}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="candidate-list-favourite-time text-center">
                        <div className="candidate-list-title">
                          <h5 className="mb-0">
                           {u.phone}
                          </h5>
                        </div>
                      </td>
                      <td>
                        <div className="candidate-list-title">
                          <h5 className="mb-0">
                            {u.website}
                          </h5>
                        </div>
                      </td>
                    </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
