import { CardProps } from "utils/types";
import "./style.css";

export const Card = ({ handleOpen, userData }: CardProps) => (
  <>
    {userData.map(( { image, name, subtext, userId } ) => (
        <div key={userId} className='user_card' onClick={() => handleOpen(userId)}>
          <div className='user_card_image'>
            <img src={image} alt='user-img' />
          </div>
          <div className='user_card_text'>
            <p className='user_card_name'>{name}</p>
            <p className='user_card_subtext'>{subtext}</p>
          </div>
        </div>
      )
    )}
  </>
);
