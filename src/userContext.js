import React from "react";
const UserContext = React.createContext();

// Provider will be exported wrapped in ConfigProvider component.
class ConfigProvider extends React.Component {
  constructor(props){
    super(props);

    this.switchOrg = this.switchOrg.bind(this);
    this.setLanguage = this.setLanguage.bind(this);

    this.state = {
      organisation: {
        id: '',
        name: ''
      },
      isLoaded: false,
      switchOrg: this.switchOrg,
      setLanguage: this.setLanguage,
      activeOrg: false,
      language: 'en'
    };
  }

  componentDidMount(){
    const url = "/api/v1/user-details";
    fetch(url)
    .then(res => res.json())
    .then(
        (result) => {
            this.setState({
              organisation: {
                name: result.organisationName,
                id: result.organisationId
              },
              activeOrg: result.organisationId !== null
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
    );
  }

  setLanguage(event){
    this.setState({
      language: event.target.value
    });
  }

  switchOrg (event) {
    this.setState({
        organisation: {
          id: event.organisation_id
        }
    });

    const url = "/api/v1/user-details";
    fetch(url)
    .then(res => res.json())
    .then(
        (result) => {
            this.setState({
              organisation: {
                name: result.organisationName,
                id: result.organisationId
              },
              activeOrg: result.organisationId !== null
              
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
    );
  }

  render() {
    return (
      <UserContext.Provider
        value={this.state}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export { ConfigProvider };

// I make this default since it will probably be exported most often.
export default UserContext;