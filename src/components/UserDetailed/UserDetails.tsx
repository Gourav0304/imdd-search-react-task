import Logo from "assets/logo.webp";
import { UserDetailedProps } from "./types";
import "./style.css";

export const UserDetailedView = ({ item }: UserDetailedProps) => {
  const { name, subtext, description, image } = item
  return (
    <>
      <div className='modal_image_container'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='user_modal'>
        <div className='user_card_image'>
          <img src={image} alt='user-img' />
        </div>
        <div className='user_card_content'>
          <div className='card_user_name_container'>
            <p className='card_user_name'>{name}</p>
          </div>
          <p className='card_user_sub_text'>{subtext}</p>
          <p className='card_user_description'>{description}</p>
        </div>
      </div>
    </>
  )
}
