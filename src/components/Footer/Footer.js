import '../Footer/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className="footer">
      Fais avec{' '}
      <span>
        <FontAwesomeIcon icon="heart" />
      </span>{' '}
      par Jessy
    </div>
  );
};

export default Footer;
