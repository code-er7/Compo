// import { HStack, Avatar, Box, Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import "./Page"
const AiCard = ({ name, lang, imgg }) => {
  return (
    <div className="box">
      <img src={imgg} alt="Avatar" className='box-img' />
      <div className="insideBox">
        <div className="name">{name}</div>
        <div className="language">{lang}</div>
      </div>
      <button className='box-button box-img'> <FontAwesomeIcon icon={faPlay} /></button>
    </div>
  )

};
export default AiCard;
