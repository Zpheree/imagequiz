import { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate, useParams } from 'react-router-dom';
import apiAccess from '../Communication/APIAccess';


let FederatedLogin = (props) => {
    const { username, name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      apiAccess.isLoggedIn()
      .then(x => {
          if(x) {
             props.customerLoggedIn(username);
             navigate('/');
          } else {
             alert('Something went wrong!');
             navigate('/');
          }
      })
    }, []);

    return (
        <>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>

        </>
    );
}

export default FederatedLogin;