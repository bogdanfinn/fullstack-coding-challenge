import Box from "@mui/material/Box";
import {Modal} from "@mui/material";
import * as React from "react";

interface CustomModalProps {
    open: boolean
    onClose: () => void
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const CustomModal = (props: React.PropsWithChildren<CustomModalProps>) => {
    const {open, onClose, children} = props

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
    )
}
