import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ModalProps } from "./types";
import { style } from "./style";

export const CustomModal = ({ handleClose, open, children }: ModalProps) => {
  return (
    <div className='modal_section'>
      <Modal
        keepMounted
        open={open}
        aria-labelledby='keep-mounted-modal-title'
        aria-describedby='keep-mounted-modal-description'
      >
        <Box
          sx={{
            ...style,
            width: "90%", // Adjusted width for all screens
            "@media (min-width: 600px)": {
              width: 400, // Default width for screens larger than 600px
            },
          }}
        >
          <div className='cross_svg_container'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='cross_svg'
              onClick={handleClose}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
          <>{children}</>
        </Box>
      </Modal>
    </div>
  );
};
