import React from "react";
import { Modal, ModalBody } from "reactstrap";
import LoginForm from "./LoginForm";

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  render() {
    const { updateUser, updateSessionId } = this.props;
    return (
      <div>
        <button
          className="btn btn-success"
          type="button"
          onClick={this.toggleModal}
        >
          Login
        </button>
        <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
          <ModalBody>
            <LoginForm
              updateUser={updateUser}
              updateSessionId={updateSessionId}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

//async/await
// try {
//   const data = await fetchApi(
//     `${API_URL}/authentication/token/new?api_key=${API_KEY_3}`
//   );
//   const result = await fetchApi(
//     `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`,
//     {
//       method: "POST",
//       mode: "cors",
//       headers: {
//         "Content-type": "application/json"
//       },
//       body: JSON.stringify({
//         username: "belka",
//         password: "zxcvbn",
//         request_token: data.request_token
//       })
//     }
//   );
//   const { session_id } = await fetchApi(
//     `${API_URL}/authentication/session/new?api_key=${API_KEY_3}`,
//     {
//       method: "POST",
//       mode: "cors",
//       headers: {
//         "Content-type": "application/json"
//       },
//       body: JSON.stringify({
//         request_token: result.request_token
//       })
//     }
//   );
//   console.log(session_id);
// } catch (error) {
//   console.log("error", error);
// }

// const getRequestToken = () => {
//   return new Promise((resolve, reject) => {
//     fetch(`${API_URL}/authentication/token/new?api_key=${API_KEY_3}`)
//       .then(response => {
//         if (response.status < 400) {
//           return response.json();
//         } else {
//           throw response;
//         }
//       })
//       .then(data => {
//         resolve(data);
//       })
//       .catch(response => {
//         response.json().then(error => {
//           reject(error);
//         });
//       });
//   });
// };

// const validateWithLogin = body => {
//   return new Promise((resolve, reject) => {
//     fetch(
//       `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`,
//       {
//         method: "POST",
//         mode: "cors",
//         headers: {
//           "Content-type": "application/json"
//         },
//         body: JSON.stringify(body)
//       }
//     )
//       .then(response => {
//         if (response.status < 400) {
//           return response.json();
//         } else {
//           throw response;
//         }
//       })
//       .then(data => {
//         resolve(data);
//       })
//       .catch(response => {
//         response.json().then(error => {
//           reject(error);
//         });
//       });
//   });
// };

// fetch(`${API_URL}/authentication/token/new?api_key=${API_KEY_3}`)
//   .then(response => response.json())
//   .then(data => {
//     fetch(
//       `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`,
//       {
//         method: "POST",
//         mode: "cors",
//         headers: {
//           "Content-type": "application/json"
//         },
//         body: JSON.stringify({
//           username: "belka",
//           password: "zxcvbn",
//           request_token: data.request_token
//         })
//       }
//     )
//       .then(response => response.json())
//       .then(data => {
//         fetch(
//           `${API_URL}/authentication/session/new?api_key=${API_KEY_3}`,
//           {
//             method: "POST",
//             mode: "cors",
//             headers: {
//               "Content-type": "application/json"
//             },
//             body: JSON.stringify({
//               request_token: data.request_token
//             })
//           }
//         )
//           .then(response => response.json())
//           .then(data => {
//             console.log("session", data);
//           });
//       });
//   });