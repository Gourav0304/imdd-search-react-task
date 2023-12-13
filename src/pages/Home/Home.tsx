import { useEffect, useMemo, useState } from "react";
import Logo from "assets/logo.webp";
import { Card } from "components/Card/Card";
import { CustomModal } from "components/Modal";
import { UserDetailedView } from "components/UserDetailed";
import { UserAPIData, HomeProps } from "utils/types";
import "./style.css";
import { UserDataApi } from "api/userData";

export const Home = ({ userData }: HomeProps) => {
  const [open, setOpen] = useState(false);
  const [ displayData, setDisplayData ] = useState<UserAPIData[]>([])
  const [ search, setSearch ] = useState<string>('')
  const [filterData, setFilterData] = useState<UserAPIData | null>(null);

  useEffect(() => {
    UserDataApi(search)
      .then(data => {
        console.log({data})
        setDisplayData(data)
      })
  }, [search])
  
  const handleOpen = (userId: number) => {
    const selectedData = userData.find((user) => user.userId === userId);
    if (selectedData) {
      setOpen(true);
      setFilterData(selectedData);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setFilterData(null)
  }

  const changeHandler = (event: any) => {
    const searchF = event.target.value;
    setSearch(searchF)
  }

  const searchFilteredData = useMemo(() => {
    if(!search) return userData
    return userData.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  }, [search, userData])

  return (
    <>
      <div className='main_container'>
        <div className='main_container_child'>
          <div className='image_container'>
            <img src={Logo} alt='livelink logo' />
          </div>
          <input type="text" placeholder="search" value={search} onChange={changeHandler}/>
          <div className='user_section'>
            <Card userData={displayData} handleOpen={handleOpen} />
          </div>
        </div>
      </div>
      { filterData && (
        <CustomModal open={open} handleClose={handleClose}>
          <UserDetailedView item={filterData} />
        </CustomModal>
      )
      }
    </>
  );
};
