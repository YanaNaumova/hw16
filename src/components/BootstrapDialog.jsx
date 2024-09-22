import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [isAgree, setIsAgree] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setIsAgree(false);
  };

  const handleAgry = () => {
    setIsAgree(true);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen} sx={{ mt: 2 }}>
        Открыть диалогвоe окно
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {!isAgree ? (
          <>
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Использовать Material UI?
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Это простое React приложение с использованием Material UI. Вы
                можете настроить его по своему усмотрению
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Отмена
              </Button>
              <Button autoFocus onClick={handleAgry}>
                Согласен
              </Button>
            </DialogActions>
          </>
        ) : (
          <DialogContent dividers>
            <Typography gutterBottom>
              Вы согласились использовать Material UI
            </Typography>
            <Button autoFocus onClick={handleClose}>
              OK
            </Button>
          </DialogContent>
        )}
      </BootstrapDialog>
    </React.Fragment>
  );
}
